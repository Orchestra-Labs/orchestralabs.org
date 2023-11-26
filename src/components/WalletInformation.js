import React from "react";
import "./WalletInformation.css"

const WalletInformation = () => {
    return (
        <>
            <h1>Demo Wallet</h1>
            <p>Note: Data refreshes every 3 second(s). A new block is created every 1 minute(s).</p>
            <div>
                <span className="data-label">Wallet Address:</span> <span id="wallet_address" className="data-value"></span><br />
                <span className="data-label">Wallet Balances:</span> <span id="asset_amounts" className="data-value"></span><br />
                <span className="data-label">Exchange Balances:</span> <span id="exchange_balances" className="data-value"></span><br />
                <span className="data-label">Reserve Balances:</span> <span id="reserve_balances" className="data-value"></span><br />
                <span className="data-label">Collateral Requirement:</span> <span id="collateral_requirement" className="data-value"></span><br />
            </div>
        </>
    );
};

export default WalletInformation;