import React from "react";
import "./WalletInformation.css";
import { useRecoilValue } from "recoil";
import { collateralRequirementState, demoWalletState, exchangeBalancesState, reserveBalancesState } from '../atoms/walletBalanceAtom';
import { infoUpdateCountdownState } from "../atoms/timerAtom";

const WalletInformation = () => {
    const demoWallet = useRecoilValue(demoWalletState);
    const exchangeBalances = useRecoilValue(exchangeBalancesState);
    const reserveBalances = useRecoilValue(reserveBalancesState);
    const collateralRequirement = useRecoilValue(collateralRequirementState);
    const infoUpdateCountdown = useRecoilValue(infoUpdateCountdownState);

    const renderBalances = (balances) => {
        if (!balances || Object.keys(balances).length === 0) {
            return <p>EMPTY</p>;
        }
    
        return (
            <ul>
                {Object.entries(balances).map(([assetJSON, amount]) => {
                    const asset = JSON.parse(assetJSON);
                    return <li key={asset.symbol}>{`${asset.name} (${asset.symbol}): ${amount.toFixed(8)}`}</li>;
                })}
            </ul>
        );
    };    
    
    return (
        <>
            <h1>Demo Wallet</h1>
            <p>Next data update in: {infoUpdateCountdown}s. Blocks will finalize every 1-3 minutes.</p>
            <p>Give two blocks for blockchain to react to environmental changes.</p>
            <div>
                <span className="data-label">Wallet Address:</span> 
                <span className="data-value">{demoWallet.address}</span><br />
                
                <span className="data-label">Wallet Balances:</span> 
                <span className="data-value">{renderBalances(demoWallet.balances)}</span><br />
                
                <span className="data-label">Exchange Balances:</span> 
                <span className="data-value">{renderBalances(exchangeBalances)}</span><br />
                
                <span className="data-label">Reserve Balances:</span> 
                <span className="data-value">{renderBalances(reserveBalances)}</span><br />
                
                <span className="data-label">Collateral Requirement:</span> 
                <span className="data-value">{collateralRequirement}</span><br />
            </div>
        </>
    );
};

export default WalletInformation;
