// TransferController.js
import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { transactionTypeState, senderAssetState, recipientAssetState } from '../state/TransactionState';
import { walletState } from '../state/WalletState';

const TransferController = () => {
    const [transactionType, setTransactionType] = useRecoilState(transactionTypeState);
    const [senderAsset, setSenderAsset] = useRecoilState(senderAssetState);
    const [recipientAsset, setRecipientAsset] = useRecoilState(recipientAssetState);
    const wallet = useRecoilValue(walletState);
    const [recipientWalletAddress, setRecipientWalletAddress] = useState('');
    const [amountToSend, setAmountToSend] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('Expected Return: N/A');
    const [maxSendableAmount, setMaxSendableAmount] = useState('Maximum Sendable Amounts: Loading...');
    const [estimatedFees, setEstimatedFees] = useState('Estimated Fees: N/A');

    const updateMaxSendableAmount = async () => {
        if (!wallet.address) return; // No wallet address, skip update

        try {
            // Fetch current wallet balance
            const walletBalanceResponse = await fetch(`/wallets/balance?wallet_address=${wallet.address}`).then(res => res.json());

            // Fetch current transaction fees (as percentages)
            const feeResponse = await fetch('/transactions/fees').then(res => res.json());
            const minerFeePercent = feeResponse.fee_structure.miner_fee.amount;
            const reserveFeePercent = feeResponse.fee_structure.reserve_fee.amount;
            setCurrentFees(`Current Fees - Miner Fee: ${minerFeePercent * 100}%, Reserve Fee: ${reserveFeePercent * 100}%`);

            // Calculate total fee factor (1 + sum of fee percentages)
            const totalFeeFactor = 1 + minerFeePercent + reserveFeePercent;

            // Calculate maximum sendable amount before fees
            let maxAmountsText = 'Maximum Sendable Amounts: ';
            Object.entries(walletBalanceResponse['total_amounts']).forEach(([assetJSON, balance]) => {
                const asset = JSON.parse(assetJSON);
                const maxSendableAmountBeforeFees = balance / totalFeeFactor;
                maxAmountsText += `${asset.name}: ${maxSendableAmountBeforeFees.toFixed(2)} `;
            });

            setMaxSendableAmount(maxAmountsText.trim());
        } catch (error) {
            console.error('Error updating max sendable amounts:', error);
        }
    };

    const sendMoney = async () => {
        const confirmText = 'Are you sure to send?';
        let confirmResult = confirm(confirmText);
        if (!confirmResult) {
            alert('Canceled');
            return;
        }

        const inputAsset = JSON.parse(senderAsset);
        const outputAsset = JSON.parse(recipientAsset);
        const timeSent = Date.now();

        let feeStructure = {};
        let endpoint = '/transactions';
        let dataPackage = {};

        if (transactionType === 'exchange') {
            try {
                const exchangeResponse = await fetch('/transactions/exchange');
                const feesResponse = await fetch('/transactions/fees');
    
                const exchangeQueryResult = await exchangeResponse.json();
                const feeQueryResult = await feesResponse.json();
    
                feeStructure = feeQueryResult.fee_structure;
                endpoint = '/transactions/exchange';
    
                dataPackage = {
                    exchange_output: {
                        recipient_wallet_address: recipientWalletAddress,
                        asset: outputAsset,
                        amount: null,
                    },
                    unsigned_transaction_request: {
                        transaction: {
                            transaction_input: {
                                time_sent: timeSent,
                                sender_wallet_address: wallet.address,
                                transaction_type: transactionType,
                            },
                            transaction_output: {
                                recipient_wallet_address: exchangeQueryResult.address,
                                asset: inputAsset,
                                amount: parseFloat(amountToSend),
                            },
                            transaction_fees: feeStructure,
                        },
                        sender_private_key: wallet.privateKey,
                        sender_public_key: wallet.publicKey,
                    }
                };
            } catch (error) {
                console.error('Error fetching exchange info:', error);
                return;
            }
        } else {
            try {
                const feesResponse = await fetch('/transactions/fees');
                const feeQueryResult = await feesResponse.json();
                feeStructure = feeQueryResult.fee_structure;
    
                dataPackage = {
                    transaction: {
                        transaction_input: {
                            time_sent: timeSent,
                            sender_wallet_address: wallet.address,
                            transaction_type: transactionType,
                        },
                        transaction_output: {
                            recipient_wallet_address: recipientWalletAddress,
                            asset: inputAsset,
                            amount: parseFloat(amountToSend),
                        },
                        transaction_fees: feeStructure,
                    },
                    sender_private_key: wallet.privateKey,
                    sender_public_key: wallet.publicKey,
                };
    
            } catch (error) {
                console.error('Error fetching transaction fees:', error);
                return;
            }
        }

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataPackage),
            });

            const responseData = await response.json();
            if (response.ok && responseData.message !== 'fail') {
                alert('Transaction successful');
            } else {
                alert('Transaction failed');
            }
        } catch (error) {
            console.error(error);
            alert('Transaction failed');
        }

        setAmountToSend('0')
        updateMaxSendableAmount()
    };

    const calculateAndDisplayFees = async () => {
        const amount = parseFloat(amountToSend);
        if (isNaN(amount) || amount <= 0) {
            setEstimatedFees('Estimated Fees: N/A');
            return;
        }

        try {
            // Fetch current transaction fees (as percentages)
            const feeResponse = await fetch('/transactions/fees').then(res => res.json());
            const minerFeePercent = feeResponse.fee_structure.miner_fee.amount;
            const reserveFeePercent = feeResponse.fee_structure.reserve_fee.amount;
            const symbol = JSON.parse(senderAsset).symbol;

            // Calculate fees
            const minerFee = amount * minerFeePercent;
            const reserveFee = amount * reserveFeePercent;
            const totalFees = minerFee + reserveFee;

            // Update estimated fees
            setEstimatedFees(`Estimated Fees - Miner Fee: ${minerFee.toFixed(2)} ${symbol}, Reserve Fee: ${reserveFee.toFixed(2)} ${symbol}, Total Fees: ${totalFees.toFixed(2)} ${symbol}`);
        } catch (error) {
            console.error('Error calculating fees:', error);
        }
    };

    const calculateExpectedReturn = () => {
        // Calculate expected return
        const senderSymbol = JSON.parse(senderAsset).symbol;
        const recipientSymbol = JSON.parse(recipientAsset).symbol;
        const symbol = transactionType === 'exchange' ? recipientSymbol : senderSymbol;

        // Assume amountToSend is from a state or another source
        const amountToSend = 100; // Example amount
        let returnAmount = amountToSend;

        if (transactionType === 'exchange') {
            // currentExchangeRatio needs to come from a state or context
            const currentExchangeRatio = 1; // Example ratio
            returnAmount = amountToSend * currentExchangeRatio;
        }

        setExpectedReturn(`Expected Return: ${returnAmount.toFixed(2)} ${symbol}`);
    }

    const handleTransactionTypeChange = (event) => {
        const newType = event.target.value;
        setTransactionType(newType);
        if (newType === 'transfer') {
            setRecipientAsset(senderAsset);
        }
    };

    const handleSenderAssetChange = (event) => {
        const newAsset = event.target.value;
        setSenderAsset(newAsset);
        if (transactionType === 'transfer') {
            setRecipientAsset(newAsset);
        }
    };

    const handleRecipientAssetChange = (event) => {
        setRecipientAsset(event.target.value);
    };

    useEffect(() => {
        calculateAndDisplayFees()
        calculateExpectedReturn()
    }, [amountToSend, transactionType, senderAsset, recipientAsset, maxSendableAmount]);


    useEffect(() => {
        // Initial load or dependency change logic
        const intervalId = setInterval(updateMaxSendableAmount, 3000); // Update every 3 seconds

        // Cleanup function to clear the interval
        return () => clearInterval(intervalId);
    }, [wallet.address, senderAsset, recipientAsset]);

    useEffect(() => {
        updateMaxSendableAmount()
        calculateAndDisplayFees()
    }, []);

    return (
        <>
            <h1>Send Money / Exchange</h1>
            <p id="current_fees">Current Fees: Loading...</p>
            <p>{maxSendableAmount}</p>

            <div className="form-item">
                <label>Transaction Type</label>
                <select id="transaction_type" value={transactionType} onChange={handleTransactionTypeChange}>
                    <option value="transfer">Transfer</option>
                    <option value="exchange">Exchange</option>
                </select>
            </div>

            <div className="form-item">
                <label>Sender Asset</label>
                <select id="sender_asset" value={senderAsset} onChange={handleSenderAssetChange}>
                    <option value='{"name": "Melody", "symbol": "MLD", "type": "On_Chain"}'>Melody</option>
                    <option value='{"name": "Harmony USD", "symbol": "HUSD", "type": "Harmony"}'>HUSD</option>
                </select>
            </div>

            <div className="form-item">
                <label>Recipient Asset</label>
                <select id="recipient_asset" value={recipientAsset} onChange={handleRecipientAssetChange} disabled={transactionType === 'transfer'}>
                    <option value='{"name": "Melody", "symbol": "MLD", "type": "On_Chain"}'>Melody</option>
                    <option value='{"name": "Harmony USD", "symbol": "HUSD", "type": "Harmony"}'>HUSD</option>
                </select>
            </div>

            <input className="form-item" value={recipientWalletAddress} onChange={(e) => setRecipientWalletAddress(e.target.value)} type="text" placeholder="Recipient Address" />
            <input className="form-item" value={amountToSend} onChange={(e) => setAmountToSend(e.target.value)} type="text" placeholder="Amount" />
            <p>{estimatedFees}</p>
            <p>{expectedReturn}</p>
            <button onClick={sendMoney}>Send / Exchange</button>
        </>
    );
};

export default TransferController;
