import React, { useEffect, useState } from "react";
import "./WalletInformation.css";
import { useRecoilState } from "recoil";
import { walletState } from '../atoms/walletAtom';
import { fetchDemoData, fetchWalletBalances } from "../api/api";

const WalletInformation = () => {
    const [wallet, setWallet] = useRecoilState(walletState);
    const [exchangeBalances, setExchangeBalances] = useState({});
    const [reserveBalances, setReserveBalances] = useState({});
    const [collateralRequirement, setCollateralRequirement] = useState(0);
    const [exchangeInfo, setExchangeInfo] = useState({});

    useEffect(() => {
        const initializeDemoData = async () => {
            try {
                const data = await fetchDemoData();
                setWallet(prevWallet => ({
                    ...prevWallet, 
                    address: data.demo_address,
                    privateKey: data.demo_private_key,
                    publicKey: data.demo_public_key
                }));
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

        initializeDemoData();
    }, []);

    useEffect(() => {
        const updateBalances = async () => {
            if (wallet.address) {
                const walletBalances = await fetchWalletBalances(wallet.address);
                setWallet(prevWallet => ({ ...prevWallet, balances: walletBalances }));
            }
            if (exchangeInfo.exchangeAddress) {
                const exchangeBalances = await fetchWalletBalances(exchangeInfo.exchangeAddress);
                setExchangeBalances(exchangeBalances);
            }
            if (exchangeInfo.reserveAddress) {
                const reserveBalances = await fetchWalletBalances(exchangeInfo.reserveAddress);
                setReserveBalances(reserveBalances);
            }
        };

        const balanceInterval = setInterval(updateBalances, 3000);

        return () => clearInterval(balanceInterval);
    }, [wallet, exchangeInfo]);

    const renderBalances = (balances) => {
        if (!balances || Object.keys(balances).length === 0) {
            return <p>EMPTY</p>;
        }
    
        return Object.entries(balances).map(([assetJSON, amount]) => {
            const asset = JSON.parse(assetJSON);
            return <p key={asset.symbol}>{`${asset.name} (${asset.symbol}): ${amount.toFixed(8)}`}</p>;
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
