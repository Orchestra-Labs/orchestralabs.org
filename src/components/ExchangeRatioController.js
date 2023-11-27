// ExchangeRatioController.js
import React from 'react';
import { useRecoilState } from 'recoil';
import { exchangeRatioState } from '../state/ExchangeRatioState'; // Adjust the path as necessary
import { changeExchangeRatioApi } from '../api/api';

const ExchangeRatioController = () => {
    const [exchangeRatio, setExchangeRatio] = useRecoilState(exchangeRatioState);

    const changeExchangeRatio = async (newRatio) => {
        const result = await changeExchangeRatioApi(newRatio);
        if (result.success) {
            console.info(`Exchange ratio changed to ${newRatio}%`, result.data);
            alert(`Exchange ratio changed to ${newRatio}%`);
            setExchangeRatio(newRatio);
        } else {
            console.error('Error changing exchange ratio:', result.error);
        }
    };

    const isButtonDisabled = (ratio) => ratio === exchangeRatio;

    return (
        <>
            <h1>Exchange Ratio (MLD:HUSD)</h1>
            <button 
                className="change-ratio-button" 
                onClick={() => changeExchangeRatio(100)}
                disabled={isButtonDisabled(100)}
            >
                1:1
            </button>
            <button 
                className="change-ratio-button" 
                onClick={() => changeExchangeRatio(75)}
                disabled={isButtonDisabled(75)}
            >
                3:4
            </button>
            <button 
                className="change-ratio-button" 
                onClick={() => changeExchangeRatio(50)}
                disabled={isButtonDisabled(50)}
            >
                1:2
            </button>
            <button 
                className="change-ratio-button" 
                onClick={() => changeExchangeRatio(25)}
                disabled={isButtonDisabled(25)}
            >
                1:4
            </button>
        </>
    );
};

export default ExchangeRatioController;
