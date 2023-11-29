import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { transactionTypeState, senderAssetState, recipientAssetState } from '../state/TransactionState';
import { walletState } from '../state/WalletState';
import { fetchExchangeData, fetchTransactionFees, fetchWalletBalances, submitTransaction } from '../api/api';

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

    const buildTransaction = async (isExchange) => {
        // Fetch transaction fees
        const { success: feeSuccess, feeStructure, error: feeError } = await fetchTransactionFees();
        if (!feeSuccess) {
            console.error('Failed to fetch transaction fees:', feeError);
            return null;
        }
    
        // Additional steps for exchange transactions
        let exchangeAddress = null;
        if (isExchange) {
            const { success: exchangeSuccess, exchangeAddress: fetchedExchangeAddress, error: exchangeError } = await fetchExchangeData();
            if (!exchangeSuccess) {
                console.error('Failed to fetch exchange data:', exchangeError);
                return null;
            }
            exchangeAddress = fetchedExchangeAddress;
        }
    
        // Constructing the transaction object
        const transactionInput = {
            time_sent: Date.now(),
            sender_wallet_address: wallet.address,
            transaction_type: transactionType,
        };
    
        const transactionOutput = isExchange ? 
            { recipient_wallet_address: exchangeAddress, asset: JSON.parse(senderAsset), amount: parseFloat(amountToSend) } : 
            { recipient_wallet_address: recipientWalletAddress, asset: JSON.parse(senderAsset), amount: parseFloat(amountToSend) };
    
        const transaction = {
            transaction_input: transactionInput,
            transaction_output: transactionOutput,
            transaction_fees: feeStructure,
        };
    
        // Additional output for exchange transactions
        const exchangeOutput = isExchange ? 
            { recipient_wallet_address: recipientWalletAddress, asset: JSON.parse(recipientAsset), amount: null } : 
            null;
    
        return isExchange ? 
            { exchange_output: exchangeOutput, unsigned_transaction_request: { transaction, sender_private_key: wallet.privateKey, sender_public_key: wallet.publicKey } } : 
            { transaction, sender_private_key: wallet.privateKey, sender_public_key: wallet.publicKey };
    };
    

    const sendMoney = async () => {
        const confirmResult = confirm('Are you sure to send?');
        if (!confirmResult) {
            alert('Canceled');
            return;
        }

        let dataPackage = await buildTransaction(transactionType === 'exchange');
        if (!dataPackage) {
            alert('Failed to build transaction data.');
            return;
        }

        const endpoint = transactionType === 'exchange' ? '/transactions/exchange' : '/transactions';
        const transactionResult = await submitTransaction(endpoint, dataPackage);

        transactionResult.success ? alert('Transaction successful') : alert(`Transaction failed: ${transactionResult.message}`);
        setAmountToSend('0');
        // updateMaxSendableAmount();
    };

    // TODO: potentially remove
    // useEffect(() => {
    //     const updateMaxSendableAmount = async () => {
    //       const result = await getMaxSendableAmount(wallet.address);
    //       if (result.error) {
    //         console.error(result.error);
    //       } else {
    //         setMaxSendableAmount(result.maxAmountsText);
    //         setCurrentFees(result.currentFeesText);
    //       }
    //     };
    
    //     if (wallet.address) {
    //       updateMaxSendableAmount();
    //     }
    // }, [wallet.address],);

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

    const getMaxSendableAmount = async (walletAddress) => {
        if (!walletAddress) {
          return { error: 'No wallet address provided.' };
        }
      
        try {
          // Fetch current wallet balance using fetchWalletBalances function
          const walletBalances = await fetchWalletBalances(walletAddress);
    
          // Fetch current transaction fees using fetchTransactionFees function
          const transactionFees = await fetchTransactionFees();
          const minerFeePercent = transactionFees.miner_fee.amount;
          const reserveFeePercent = transactionFees.reserve_fee.amount;
    
          // Calculate total fee factor (1 + sum of fee percentages)
          const totalFeeFactor = 1 + minerFeePercent + reserveFeePercent;
    
          // Calculate maximum sendable amount before fees
          let maxAmountsText = 'Maximum Sendable Amounts: ';
          for (const [asset, balance] of Object.entries(walletBalances)) {
            const maxSendableAmountBeforeFees = balance / totalFeeFactor;
            maxAmountsText += `${asset}: ${maxSendableAmountBeforeFees.toFixed(2)} `;
          }
    
          return {
            maxAmountsText: maxAmountsText.trim(),
            currentFeesText: `Current Fees - Miner Fee: ${(minerFeePercent * 100).toFixed(2)}%, Reserve Fee: ${(reserveFeePercent * 100).toFixed(2)}%`
          };
        } catch (error) {
          console.error('Error updating max sendable amounts:', error);
          return { error: error.message };
        }
    };    

    useEffect(() => {
        const updateData = async () => {
            if (wallet.address) {
                const result = await getMaxSendableAmount(wallet.address);
                if (result.error) {
                    console.error(result.error);
                } else {
                    setMaxSendableAmount(result.maxAmountsText);
                }
            }
            await calculateAndDisplayFees();
        };
        updateData();

        const intervalId = setInterval(updateData, 3000); // Update every 3 seconds
        return () => clearInterval(intervalId);
    }, [wallet.address, senderAsset, recipientAsset, amountToSend]);

    // TODO: potentially remove
    // const calculateExpectedReturn = () => {
    //     // Calculate expected return
    //     const senderSymbol = JSON.parse(senderAsset).symbol;
    //     const recipientSymbol = JSON.parse(recipientAsset).symbol;
    //     const symbol = transactionType === 'exchange' ? recipientSymbol : senderSymbol;

    //     // Assume amountToSend is from a state or another source
    //     const amountToSend = 100; // Example amount
    //     let returnAmount = amountToSend;

    //     if (transactionType === 'exchange') {
    //         // currentExchangeRatio needs to come from a state or context
    //         const currentExchangeRatio = 1; // Example ratio
    //         returnAmount = amountToSend * currentExchangeRatio;
    //     }

    //     setExpectedReturn(`Expected Return: ${returnAmount.toFixed(2)} ${symbol}`);
    // }

    // TODO: potentially remove
    // useEffect(() => {
    //     calculateAndDisplayFees()
    //     calculateExpectedReturn()
    // }, [amountToSend, transactionType, senderAsset, recipientAsset, maxSendableAmount]);


    // TODO: potentially remove
    // useEffect(() => {
    //     // Initial load or dependency change logic
    //     const intervalId = setInterval(updateMaxSendableAmount, 3000); // Update every 3 seconds

    //     // Cleanup function to clear the interval
    //     return () => clearInterval(intervalId);
    // }, [wallet.address, senderAsset, recipientAsset]);

    // TODO: potentially remove
    // useEffect(() => {
    //     updateMaxSendableAmount()
    //     calculateAndDisplayFees()
    // }, []);

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
