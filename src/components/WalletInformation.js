import React, { useEffect, useState } from "react";
import "./WalletInformation.css";
import { useRecoilState } from "recoil";
import { collateralRequirementState, demoWalletState, exchangeBalancesState, reserveBalancesState } from '../atoms/walletBalanceAtom';
import { fetchDemoData, fetchWalletBalances } from "../api/api";
import { infoUpdateCountdownState } from "../atoms/timerAtom";

const WalletInformation = () => {
    const [demoWallet, setDemoWallet] = useRecoilState(demoWalletState);
    const [exchangeBalances, setExchangeBalances] = useRecoilState(exchangeBalancesState);
    const [reserveBalances, setReserveBalances] = useRecoilState(reserveBalancesState);
    const [collateralRequirement, setCollateralRequirement] = useRecoilState(collateralRequirementState);
    const [exchangeInfo, setExchangeInfo] = useState({});
    const [infoUpdateCountdown, setInfoUpdateCountdown] = useRecoilState(infoUpdateCountdownState);

    const updateBalances = async () => {
        if (demoWallet.address) {
            const walletBalances = await fetchWalletBalances(demoWallet.address);
            if (walletBalances) { // Check if the data is valid and the component is still mounted
                setDemoWallet(prevWallet => ({ ...prevWallet, balances: walletBalances }));
            }
        }
        if (exchangeInfo.exchangeAddress) {
            const exchangeBalances = await fetchWalletBalances(exchangeInfo.exchangeAddress);
            if (exchangeBalances) {
                setExchangeBalances(exchangeBalances);
            }
        }
        if (exchangeInfo.reserveAddress) {
            const reserveBalances = await fetchWalletBalances(exchangeInfo.reserveAddress);
            if (reserveBalances) {
                setReserveBalances(reserveBalances);
            }
        }
    };

    const initializeDemoData = async () => {
        try {
            const data = await fetchDemoData();
            setDemoWallet(prevWallet => ({
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

    const updateCollateralRequirement = async () => {
        try {
            const data = await fetchDemoData();
            setCollateralRequirement(data.collateral_requirement);
        } catch (error) {
            console.error('Error fetching wallet data:', error);
        }
    };

    const renderBalances = (balances) => {
        if (!balances || Object.keys(balances).length === 0) {
            return <p>EMPTY</p>;
        }
    
        return Object.entries(balances).map(([assetJSON, amount]) => {
            const asset = JSON.parse(assetJSON);
            return <p key={asset.symbol}>{`${asset.name} (${asset.symbol}): ${amount.toFixed(8)}`}</p>;
        });
    };

    useEffect(() => {
        initializeDemoData();

        // Start countdowns
        const infoUpdateTimer = setInterval(() => {
            setInfoUpdateCountdown(prevCountdown => prevCountdown > 0 ? prevCountdown - 1 : 3);
        }, 1000);

        return () => {
            clearInterval(infoUpdateTimer);
        };
    }, []);

    useEffect(() => {        
        const balanceInterval = setInterval(updateBalances, 3000);
        const collateralDataInterval = setInterval(updateCollateralRequirement, 3000);        

        return () => {
            clearInterval(collateralDataInterval);
            clearInterval(balanceInterval);
        };
    }, [demoWallet]);
    
    return (
        <>
            <h1>Demo Wallet</h1>
            <p>Next data update in: {infoUpdateCountdown}s. Blocks will finalize every 1-3 minutes.</p>
            <p>Give two blocks for blockchain to react to environmental changes.</p>
            <p>Delays may occur due to Google App Engine Deployment (dynamic allocation, not always-on server).</p>
            <div>
                <span className="data-label">Wallet Address:</span> <span className="data-value">{demoWallet.address}</span><br />
                <span className="data-label">Wallet Balances:</span> <span className="data-value">{renderBalances(demoWallet.balances)}</span><br />
                <span className="data-label">Exchange Balances:</span> <span className="data-value">{renderBalances(exchangeBalances)}</span><br />
                <span className="data-label">Reserve Balances:</span> <span className="data-value">{renderBalances(reserveBalances)}</span><br />
                <span className="data-label">Collateral Requirement:</span> <span className="data-value">{collateralRequirement}</span><br />
            </div>
        </>
    );
};

export default WalletInformation;
