// TransferController.js
import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { transactionTypeState, senderAssetState, recipientAssetState } from '../state/TransactionState';
import { walletState } from '../state/WalletState';
import { fetchExchangeData, fetchTransactionFees, getMaxSendableAmount, submitTransaction } from '../api/api';

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

    useEffect(() => {
        const updateMaxSendableAmount = async () => {
          const result = await getMaxSendableAmount(wallet.address);
          if (result.error) {
            console.error(result.error);
          } else {
            setMaxSendableAmount(result.maxAmountsText);
            setCurrentFees(result.currentFeesText);
          }
        };
    
        if (wallet.address) {
          updateMaxSendableAmount();
        }
    }, [wallet.address],);

    const buildExchangeTransaction = async () => {
        const { success: feeSuccess, feeStructure, error: feeError } = await fetchTransactionFees();
        if (!feeSuccess) {
            console.error('Failed to fetch transaction fees:', feeError);
            return null;
        }
    
        const { success: exchangeSuccess, exchangeAddress, error: exchangeError } = await fetchExchangeData();
        if (!exchangeSuccess) {
            console.error('Failed to fetch exchange data:', exchangeError);
            return null;
        }
        
        return {
            exchange_output: {
                recipient_wallet_address: recipientWalletAddress,
                asset: JSON.parse(recipientAsset),
                amount: null,
            },
            unsigned_transaction_request: {
                transaction: {
                    transaction_input: {
                        time_sent: Date.now(),
                        sender_wallet_address: wallet.address,
                        transaction_type: transactionType,
                    },
                    transaction_output: {
                        recipient_wallet_address: exchangeAddress,
                        asset: JSON.parse(senderAsset),
                        amount: parseFloat(amountToSend),
                    },
                    transaction_fees: feeStructure,
                },
                sender_private_key: wallet.privateKey,
                sender_public_key: wallet.publicKey,
            }
        };
    };

    const buildTransaction = async () => {
        const { success, feeStructure, error } = await fetchTransactionFees();
      
        if (!success) {
            console.error('Failed to fetch transaction fees:', error);
            return null;
        }
    
        return {
            transaction: {
                transaction_input: {
                    time_sent: Date.now(),
                    sender_wallet_address: wallet.address,
                    transaction_type: transactionType,
                },
                transaction_output: {
                    recipient_wallet_address: recipientWalletAddress,
                    asset: JSON.parse(senderAsset),
                    amount: parseFloat(amountToSend),
                },
                transaction_fees: feeStructure,
            },
            sender_private_key: wallet.privateKey,
            sender_public_key: wallet.publicKey,
        };
    };

    const sendMoney = async () => {
        const confirmResult = confirm('Are you sure to send?');
        if (!confirmResult) {
            alert('Canceled');
            return;
        }
    
        let dataPackage = (transactionType === 'exchange') ? await buildExchangeTransaction() : await buildTransaction();
        if (!dataPackage) {
            alert('Failed to build transaction data.');
            return;
        }
    
        const endpoint = transactionType === 'exchange' ? '/transactions/exchange' : '/transactions';
    
        const transactionResult = await submitTransaction(endpoint, dataPackage);
        if (transactionResult.success) {
            alert('Transaction successful');
        } else {
            alert(`Transaction failed: ${transactionResult.message}`);
        }
    
        setAmountToSend('0');
        updateMaxSendableAmount();
    };
    

    const calculateAndDisplayFees = async () => {
        const amount = parseFloat(amountToSend);
        if (isNaN(amount) || amount <= 0) {
            setEstimatedFees('Estimated Fees: N/A');
            return;
        }

        const feeResult = await fetchTransactionFees();
        if (!feeResult.success) {
            console.error('Error calculating fees:', feeResult.error);
            // Handle the error in your UI as needed
            setEstimatedFees('Error in calculating fees');
            return;
        }
    
        // Extract fee percentages from the fee structure
        const minerFeePercent = feeResult.feeStructure.miner_fee.amount;
        const reserveFeePercent = feeResult.feeStructure.reserve_fee.amount;
        const symbol = JSON.parse(senderAsset).symbol;
    
        // Calculate fees
        const minerFee = amount * minerFeePercent;
        const reserveFee = amount * reserveFeePercent;
        const totalFees = minerFee + reserveFee;
    
        // Update estimated fees
        setEstimatedFees(`Estimated Fees - Miner Fee: ${minerFee.toFixed(2)} ${symbol}, Reserve Fee: ${reserveFee.toFixed(2)} ${symbol}, Total Fees: ${totalFees.toFixed(2)} ${symbol}`);
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
