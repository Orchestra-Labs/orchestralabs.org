import { BASE_URL } from "../config/config";

export const fetchDemoData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/demodata`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching wallet data:', error);
        throw error;
    }
};

export const fetchWalletBalances = async (address) => {
    try {
        const response = await fetch(`${BASE_URL}/wallets/balance?wallet_address=${address}`);
        const data = await response.json();
        return data.total_amounts || {};
    } catch (error) {
        console.error('Error fetching wallet balance:', error);
        throw error;
    }
};

export const changeExchangeRatioApi = async (newRatio) => {
    try {
        const response = await fetch(`${BASE_URL}/changeExchangeRatio?percentage=${newRatio}`, {
            method: 'POST',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return { success: true, data: data };
    } catch (error) {
        console.error('Error changing exchange ratio:', error);
        return { success: false, error: error };
    }
};

export const getMaxSendableAmount = async (walletAddress) => {
    if (!walletAddress) {
      return { error: 'No wallet address provided.' };
    }
  
    try {
      // Fetch current wallet balance
      const walletBalanceResponse = await fetch(`${BASE_URL}/wallets/balance?wallet_address=${walletAddress}`).then(res => res.json());
  
      // Fetch current transaction fees (as percentages)
      const feeResponse = await fetch('/transactions/fees').then(res => res.json());
      const minerFeePercent = feeResponse.miner_fee.amount;
      const reserveFeePercent = feeResponse.reserve_fee.amount;
  
      // Calculate total fee factor (1 + sum of fee percentages)
      const totalFeeFactor = 1 + minerFeePercent + reserveFeePercent;
  
      // Calculate maximum sendable amount before fees
      let maxAmountsText = 'Maximum Sendable Amounts: ';
      for (const [assetJSON, balance] of Object.entries(walletBalanceResponse['total_amounts'])) {
        const asset = JSON.parse(assetJSON);
        const maxSendableAmountBeforeFees = balance / totalFeeFactor;
        maxAmountsText += `${asset.name}: ${maxSendableAmountBeforeFees.toFixed(2)} `;
      }
  
      return {
        maxAmountsText: maxAmountsText.trim(),
        currentFeesText: `Current Fees - Miner Fee: ${minerFeePercent * 100}%, Reserve Fee: ${reserveFeePercent * 100}%`
      };
    } catch (error) {
      console.error('Error updating max sendable amounts:', error);
      return { error: error.message };
    }
};

export const fetchTransactionFees = async () => {
    try {
        const feesResponse = await fetch(`${BASE_URL}/transactions/fees`);
        const feeQueryResult = await feesResponse.json();

        return {
            success: true,
            feeStructure: feeQueryResult.fee_structure,
        };
    } catch (error) {
        console.error('Error fetching transaction fees:', error);
        return {
            success: false,
            error: error.message, // Providing the error message for better error handling
        };
    }
};

export const fetchExchangeData = async () => {
    try {
        const exchangeResponse = await fetch(`${BASE_URL}/transactions/exchange`);
        const exchangeQueryResult = await exchangeResponse.json();

        return {
            success: true,
            exchangeAddress: exchangeQueryResult.address,
        };
    } catch (error) {
        console.error('Error fetching exchange info:', error);
        return {
            success: false,
            error: error.message, // Providing the error message for better error handling
        };
    }
};

export const submitTransaction = async (endpoint, dataPackage) => {
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
            // Transaction was successful
            alert('Transaction successful');
            return { success: true };
        } else {
            // Transaction failed
            alert('Transaction failed');
            return { success: false, message: responseData.message || 'Unknown error' };
        }
    } catch (error) {
        console.error(error);
        alert('Transaction failed');
        return { success: false, message: error.message || 'Unknown error' };
    }
};

export const fetchBlockchainDataFromAPI = async () => {
    try {
        const response = await fetch(`${BASE_URL}/blockchainData`);
        const data = await response.json();
        return {
            success: true,
            data: data.blockchain || []
        };
    } catch (error) {
        console.error('Error fetching blockchain data:', error);
        return {
            success: false,
            error: error.message
        };
    }
};