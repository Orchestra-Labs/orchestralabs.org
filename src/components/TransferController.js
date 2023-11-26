import React from "react";

const TransferController = () => {
    return (
        <>
            <h1>Send Money / Exchange</h1>
            <p id="current_fees">Current Fees: Loading...</p>
            <p id="max_amounts">Maximum Sendable Amounts: Loading...</p>

            <div className="form-item">
                <label>Transaction Type</label>
                <select id="transaction_type">
                <option value="transfer">Transfer</option>
                <option value="exchange">Exchange</option>
                </select>
            </div>

            <div className="form-item">
                <label>Sender Asset</label>
                <select id="sender_asset">
                <option value='{"name": "Melody", "symbol": "MLD", "type": "On_Chain"}'>Melody</option>
                <option value='{"name": "Harmony USD", "symbol": "HUSD", "type": "Harmony"}'>HUSD</option>
                </select>
            </div>

            <div className="form-item">
                <label>Recipient Asset</label>
                <select id="recipient_asset">
                <option value='{"name": "Melody", "symbol": "MLD", "type": "On_Chain"}'>Melody</option>
                <option value='{"name": "Harmony USD", "symbol": "HUSD", "type": "Harmony"}'>HUSD</option>
                </select>
            </div>

            <input className="form-item" id="recipient_wallet_address" type="text" placeholder="Recipient Address" />
            <input className="form-item" id="send_amount" type="text" placeholder="Amount" />
            <p id="estimated_fees">Estimated Fees: N/A</p>
            <p id="expected_return">Expected Return: N/A</p>
            <button id="send_money_button">Send / Exchange</button>
        </>
    );
};

export default TransferController;