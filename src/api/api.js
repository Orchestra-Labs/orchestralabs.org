import { BASE_URL } from "../config/config";
import { API_ENDPOINTS } from "./../utils/apiConstants";
import { transactionOptions } from "../utils/optionValues";

export const fetchDemoData = async () => {
    try {
        const response = await fetch(`${BASE_URL}${API_ENDPOINTS.DEMO_DATA}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching wallet data:', error);
        throw error;
    }
};

export const fetchWalletBalances = async (address) => {
    try {
        const response = await fetch(`${BASE_URL}${API_ENDPOINTS.WALLET_BALANCES}?wallet_address=${address}`);
        const data = await response.json();
        return data.total_amounts || {};
    } catch (error) {
        console.error('Error fetching wallet balance:', error);
        throw error;
    }
};

export const changeExchangeRatioApi = async (newRatio) => {
    try {
        const response = await fetch(`${BASE_URL}${API_ENDPOINTS.CHANGE_EXCHANGE_RATIO}?percentage=${newRatio}`, {
            method: 'POST'
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
        const feesResponse = await fetch(`${BASE_URL}${API_ENDPOINTS.TRANSACTION_FEES}`);
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
        const exchangeResponse = await fetch(`${BASE_URL}${API_ENDPOINTS.TRANSACTION_EXCHANGE}`);
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

export const submitTransaction = async (transactionType, dataPackage) => {
    const endpoint = transactionType === transactionOptions.exchange.value ? 
        API_ENDPOINTS.TRANSACTION_EXCHANGE : 
        API_ENDPOINTS.SUBMIT_TRANSACTION;

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataPackage),
            json: true
        });

        if (response.ok) {
            return { success: true };
        } else {
            return { success: false, message: 'Error sending transaction request' };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: error.message || 'Unknown error' };
    }
};

export const fetchBlockchainDataFromAPI = async () => {
    try {
        const response = await fetch(`${BASE_URL}${API_ENDPOINTS.BLOCKCHAIN_DATA}`);
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