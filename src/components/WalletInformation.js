import React, { useEffect, useState } from "react";
import "./WalletInformation.css";
import { useRecoilState } from "recoil";
import { walletState } from '../state/WalletState';

const WalletInformation = () => {
    const [wallet, setWallet] = useRecoilState(walletState);
    const [exchangeBalances, setExchangeBalances] = useState({});
    const [reserveBalances, setReserveBalances] = useState({});
    const [collateralRequirement, setCollateralRequirement] = useState(0);
    const [exchangeInfo, setExchangeInfo] = useState({});

    useEffect(() => {
        const fetchDemoData = async () => {
            try {
                const response = await fetch('/demodata');
                const data = await response.json();
                setWallet(prevWallet => ({ ...prevWallet, address: data.demo_address }));
                setExchangeInfo({
                    exchangeAddress: data.exchange_address,
                    reserveAddress: data.reserve_address,
                    exchangeRatio: data.exchange_ratio,
                });
                setCollateralRequirement(data.collateral_requirement);
            } catch (error) {
                console.error('Error fetching wallet data:', error);
            }
        };

        fetchDemoData();
    }, []); // Empty dependency array to run only once

    useEffect(() => {
        const fetchWalletBalances = async (address, setter) => {
            try {
                const response = await fetch(`/wallets/balance?wallet_address=${address}`);
                const data = await response.json();
                setter(data.total_amounts || {});
            } catch (error) {
                console.error('Error fetching wallet balance:', error);
            }
        };

        const balanceInterval = setInterval(() => {
            if (wallet.address) {
                fetchWalletBalances(wallet.address, setWallet);
            }
            if (exchangeInfo.exchangeAddress) {
                fetchWalletBalances(exchangeInfo.exchangeAddress, setExchangeBalances);
            }
            if (exchangeInfo.reserveAddress) {
                fetchWalletBalances(exchangeInfo.reserveAddress, setReserveBalances);
            }
        }, 3000);

        return () => clearInterval(balanceInterval);
    }, [wallet.address, exchangeInfo.exchangeAddress, exchangeInfo.reserveAddress]);

    const renderBalances = (balances) => {
        if (!balances || Object.keys(balances).length === 0) {
            return <p>EMPTY</p>;
        }
    
        return Object.entries(balances).map(([assetJSON, amount]) => {
            const asset = JSON.parse(assetJSON);
            return <p key={asset.symbol}>{`${asset.name} (${asset.symbol}): ${amount}`}</p>;
        });
    };    

    return (
        <>
            <h1>Demo Wallet</h1>
            <p>Note: Data refreshes every 3 seconds. A new block is created every 1 minute.</p>
            <div>
                <span className="data-label">Wallet Address:</span> <span className="data-value">{wallet.address}</span><br />
                <span className="data-label">Wallet Balances:</span> <span className="data-value">{renderBalances(wallet.balances)}</span><br />
                <span className="data-label">Exchange Balances:</span> <span className="data-value">{renderBalances(exchangeBalances)}</span><br />
                <span className="data-label">Reserve Balances:</span> <span className="data-value">{renderBalances(reserveBalances)}</span><br />
                <span className="data-label">Collateral Requirement:</span> <span className="data-value">{collateralRequirement}</span><br />
            </div>
        </>
    );
};

export default WalletInformation;
