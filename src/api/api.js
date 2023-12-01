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
        const response = await fetch(`${BASE_URL}/changeRatio?percentage=${newRatio}`, {
            method: 'POST',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return { success: true };
    } catch (error) {
        console.error('Error changing exchange ratio:', error);
        return { success: false, error: error };
    }
};

export const fetchTransactionFees = async () => {
    try {
        const feesResponse = await fetch(`${BASE_URL}/transactions/fees`);
        const feeQueryResult = await feesResponse.text();
        
        return {
            success: true,
            feeStructure: JSON.parse(feeQueryResult),
        };
    } catch (error) {
        console.error('Error fetching transaction fees:', error);
        return {
            success: false,
            error: error.message,
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
            error: error.message,
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
        const response = await fetch(`${BASE_URL}/`);
        const JSONData = await response.text();
        const data = JSON.parse(JSONData)
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