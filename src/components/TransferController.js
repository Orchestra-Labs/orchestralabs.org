import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { transactionTypeState, senderAssetState, recipientAssetState } from '../atoms/transactionAtom';
import { walletState } from '../atoms/walletAtom';
import { fetchExchangeData, fetchTransactionFees, submitTransaction } from '../api/api';
import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';
import { tokenOptions, transactionOptions } from '../utils/optionValues';

const TransferController = () => {
    const [transactionType, setTransactionType] = useRecoilState(transactionTypeState);
    const [senderAsset, setSenderAsset] = useRecoilState(senderAssetState);
    const [recipientAsset, setRecipientAsset] = useRecoilState(recipientAssetState);
    const [currentFees, setCurrentFees] = useState({})
    const wallet = useRecoilValue(walletState);
    const [recipientWalletAddress, setRecipientWalletAddress] = useState('');
    const [amountToSend, setAmountToSend] = useState('');
    const [currentFeesText, setCurrentFeesText] = useState('Loading...');
    const [expectedReturn, setExpectedReturn] = useState('Expected Return: N/A');
    const [maxSendableAmount, setMaxSendableAmount] = useState('Maximum Sendable Amounts: Loading...');
    const [estimatedFees, setEstimatedFees] = useState('Estimated Fees: N/A');

    function signTransaction(serializedTransaction, key) {
        const signature = CryptoJS.HmacSHA256(serializedTransaction, key);
        return signature.toString(CryptoJS.enc.Base64);
    }

    const buildTransaction = async (isExchange) => {
        // Fetch transaction fees
        const feeResult = await fetchTransactionFees();
        if (!feeResult.success) {
            console.error('Failed to fetch transaction fees:', feeResult.error);
            return null;
        }

        const feeStructure = feeResult.feeStructure
    
        // Additional steps for exchange transactions
        let exchangeAddress = null;
        if (isExchange) {
            const exchangeResult = await fetchExchangeData();
            if (!exchangeResult.success) {
                console.error('Failed to fetch exchange data:', exchangeResult.error);
                return null;
            }

            exchangeAddress = exchangeResult.exchangeAddress;
        }
    
        // Constructing the transaction object
        const transactionInput = {
            id: uuidv4(),
            time_sent: Date.now(),
            sender_wallet_address: wallet.address,
            transaction_type: transactionType,
        };
    
        const transactionOutput = isExchange ? 
            { recipient_wallet_address: exchangeAddress, asset: JSON.parse(senderAsset), amount: parseFloat(amountToSend) } : 
            { recipient_wallet_address: recipientWalletAddress, asset: JSON.parse(senderAsset), amount: parseFloat(amountToSend) };
    
        const sendingFees = feeStructure
        sendingFees.miner_fee.amount = sendingFees.miner_fee.amount * transactionOutput.amount
        sendingFees.miner_fee.asset = transactionOutput.asset
        sendingFees.reserve_fee.amount = sendingFees.reserve_fee.amount * transactionOutput.amount
        sendingFees.reserve_fee.asset = transactionOutput.asset

        const transaction = {
            transaction_input: transactionInput,
            transaction_output: transactionOutput,
            transaction_fees: sendingFees,
        };

        const serializedTransaction = JSON.stringify(transaction);

        const signature = signTransaction(serializedTransaction, wallet.privateKey);

        const sigKeyPair = {
            signature: signature,
            public_key: wallet.publicKey
        };

        const signedTransactionRequest = {
            transaction: transaction,
            signature_pairs: [sigKeyPair],
            signature_threshold: 1,
        };
    
        // Additional output for exchange transactions
        const exchangeOutput = isExchange ? 
            { recipient_wallet_address: recipientWalletAddress, asset: JSON.parse(recipientAsset), amount: null } : 
            null;
    
        return isExchange ? 
            { exchange_output: exchangeOutput, signed_transaction_request: signedTransactionRequest } : 
            signedTransactionRequest;
    };

    const sendMoney = async () => {
        // const confirmResult = confirm('Are you sure to send?');
        // if (!confirmResult) {
        //     alert('Canceled');
        //     return;
        // }

        let dataPackage = await buildTransaction(transactionType === 'exchange');
        if (!dataPackage) {
            alert('Failed to build transaction data.');
            return;
        }

        const transactionResult = await submitTransaction(transactionType, dataPackage);

        transactionResult.success ? alert('Transaction successful') : alert(`Transaction failed: ${transactionResult.message}`);
        setAmountToSend('0');
    };

    const calculateCurrentFees = () => {
        if (currentFees) {
          // Here you format the fees as you want them to appear
          const minerFee = currentFees.miner_fee?.amount || 0;
          const reserveFee = currentFees.reserve_fee?.amount || 0;

          const minerFeePercent = minerFee * 100
          const reserveFeePercent = reserveFee * 100

          const formattedFees = `Miner Fee: ${minerFeePercent.toFixed(2)}%, Reserve Fee: ${reserveFeePercent.toFixed(2)}%`;
      
          setCurrentFeesText(formattedFees);
        } else {
          setCurrentFeesText('Loading...');
        }
      }

    const calculateExpectedFees = () => {
        const amount = parseFloat(amountToSend);
        if (isNaN(amount) || amount <= 0 || Object.keys(currentFees).length === 0) {
          setEstimatedFees('Estimated Fees: N/A');
          return;
        }
      
        // Extract fee percentages from the fee structure stored in state
        const minerFeePercent = currentFees.miner_fee?.amount || 0;
        const reserveFeePercent = currentFees.reserve_fee?.amount || 0;
        const symbol = JSON.parse(senderAsset).symbol;
      
        // Calculate fees
        const minerFee = amount * minerFeePercent;
        const reserveFee = amount * reserveFeePercent;
        const totalFees = minerFee + reserveFee;
      
        // Update estimated fees
        setEstimatedFees(`Estimated Fees - Miner Fee: ${minerFee.toFixed(2)} ${symbol}, Reserve Fee: ${reserveFee.toFixed(2)} ${symbol}, Total Fees: ${totalFees.toFixed(2)} ${symbol}`);
    };

    const updateSenderAsset = (newTransactionType, newRecipientAsset) => {
        if (newTransactionType === transactionOptions.transfer.value) {
            setSenderAsset(newRecipientAsset);
        } else if (newTransactionType === transactionOptions.exchange.value) {
            const MelodyJSON = tokenOptions.Melody.JSONValue
            const HUSDJSON = tokenOptions.HUSD.JSONValue
            const oppositeAsset = newRecipientAsset ===  MelodyJSON
                                  ? HUSDJSON
                                  : MelodyJSON;
            setSenderAsset(oppositeAsset);
        }
    }

    const updateRecipientAsset = (newTransactionType, newSenderAsset) => {
        if (newTransactionType === transactionOptions.transfer.value) {
            setRecipientAsset(newSenderAsset);
        } else if (newTransactionType === transactionOptions.exchange.value) {
            const MelodyJSON = tokenOptions.Melody.JSONValue
            const HUSDJSON = tokenOptions.HUSD.JSONValue
            const oppositeAsset = newSenderAsset ===  MelodyJSON
                                  ? HUSDJSON
                                  : MelodyJSON;
            setRecipientAsset(oppositeAsset);
        }
    }

    const handleTransactionTypeChange = (event) => {
        const newTransactionType = event.target.value;
        setTransactionType(newTransactionType);
        updateRecipientAsset(newTransactionType, senderAsset)    
    };
    
    const handleSenderAssetChange = (event) => {
        const newAsset = event.target.value;
        setSenderAsset(newAsset);
        updateRecipientAsset(transactionType, newAsset)
    };

    const handleRecipientAssetChange = (event) => {
        const newAsset = event.target.value;
        setRecipientAsset(newAsset);
        updateSenderAsset(transactionType, newAsset)
    };

    const getMaxSendableAmount = async () => {
        try {    
          const minerFeePercent = currentFees.miner_fee?.amount || 0;
          const reserveFeePercent = currentFees.reserve_fee?.amount || 0;
      
          // Calculate total fee factor (1 + sum of fee percentages)
          const totalFeeFactor = 1 + minerFeePercent + reserveFeePercent;
    
          // Calculate maximum sendable amount before fees
          let maxAmountsText = 'Maximum Sendable Amounts: ';
          if(wallet?.balances != null){
            for (const [assetJSON, balance] of Object.entries(wallet.balances)) {
                const maxSendableAmountBeforeFees = balance / totalFeeFactor;
                const asset = JSON.parse(assetJSON);
                // Use toFixed for display purposes only, not for calculations
                maxAmountsText += `${asset.name} (${asset.symbol}): ${maxSendableAmountBeforeFees.toFixed(8)} `;
            }
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
        const fetchAndUpdateFees = async () => {
          const feeResult = await fetchTransactionFees();
          if (feeResult.success) {
            setCurrentFees(feeResult.feeStructure);
          } else {
            console.error('Error fetching fees:', feeResult.error);
          }
        };
      
        fetchAndUpdateFees(); // Fetch fees immediately on mount
        const intervalId = setInterval(fetchAndUpdateFees, 3000); // Update fees every 3 seconds
      
        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    useEffect(() => {
        // Ensure wallet address is available
        if (wallet.address) {
          calculateCurrentFees();
          calculateExpectedFees();
          getMaxSendableAmount().then((result) => {
            if (result.error) {
              console.error(result.error);
            } else {
              setMaxSendableAmount(result.maxAmountsText);
            }
          });
        }
    }, [currentFees]);

    useEffect(() => {
        const calculateExpectedReturn = () => {
          if (!amountToSend || !senderAsset || !recipientAsset) {
            setExpectedReturn('Expected Return: N/A');
            return;
          }
      
          const amount = parseFloat(amountToSend);
          if (isNaN(amount)) {
            setExpectedReturn('Expected Return: N/A');
            return;
          }

          const senderSymbol = JSON.parse(senderAsset).symbol;
          const recipientSymbol = JSON.parse(recipientAsset).symbol;
          const symbol = transactionType === transactionOptions.exchange.value ? recipientSymbol : senderSymbol;

          // Assume amountToSend is from a state or another source
          let returnAmount = amount;

          if (transactionType === transactionOptions.exchange.value) {
            // currentExchangeRatio needs to come from a state or context
            const currentExchangeRatio = 1; // Example ratio
            returnAmount = amountToSend * currentExchangeRatio;
          }
            
          setExpectedReturn(`Expected Return: ${returnAmount.toFixed(2)} ${symbol}`);
        };
      
        calculateExpectedFees();
        calculateExpectedReturn();
    }, [amountToSend, transactionType, senderAsset, recipientAsset]);

    useEffect(() => {
        // Ensure wallet balances are available
        if (wallet.balances) {
          getMaxSendableAmount().then((result) => {
            if (result.error) {
              console.error(result.error);
            } else {
              setMaxSendableAmount(result.maxAmountsText);
            }
          });
        }
    }, [wallet.balances]); // Dependency on wallet.balances

    return (
        <>
            <h1>Send Money / Exchange</h1>
            <p id="current_fees">Current Fees: {currentFeesText}</p>
            <p>{maxSendableAmount}</p>

            <div className="form-item">
                <label>Transaction Type</label>
                <select id="transaction_type" value={transactionType} onChange={handleTransactionTypeChange}>
                <option value={transactionOptions.transfer.value}>{transactionOptions.transfer.displayText}</option>
                <option value={transactionOptions.exchange.value}>{transactionOptions.exchange.displayText}</option>
                </select>
            </div>

            <div className="form-item">
                <label>Sender Asset</label>
                <select id="sender_asset" value={senderAsset} onChange={handleSenderAssetChange}>
                <option value={tokenOptions.Melody.JSONValue}>{tokenOptions.Melody.displayText}</option>
                    <option value={tokenOptions.HUSD.JSONValue}>{tokenOptions.HUSD.displayText}</option>
                </select>
            </div>

            <div className="form-item">
                <label>Recipient Asset</label>
                <select id="recipient_asset" value={recipientAsset} onChange={handleRecipientAssetChange} disabled={transactionType === 'transfer'}>
                <option value={tokenOptions.Melody.JSONValue}>{tokenOptions.Melody.displayText}</option>
                    <option value={tokenOptions.HUSD.JSONValue}>{tokenOptions.HUSD.displayText}</option>
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
