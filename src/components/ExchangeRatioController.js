import React from 'react';
import { changeExchangeRatioApi } from '../api/api';
import { useRecoilState } from 'recoil';
import { exchangeRatioState } from '../atoms/walletBalanceAtom';

const ExchangeRatioController = () => {
    const [exchangeRatio, setExchangeRatio] = useRecoilState(exchangeRatioState);

    const changeExchangeRatio = async (newRatio) => {
        const result = await changeExchangeRatioApi(newRatio);
        if (result.success) {
            console.info(`Exchange ratio changed to ${newRatio}%`);
            alert(`Exchange ratio changed to ${newRatio}%`);
            setExchangeRatio(newRatio);
        } else {
            console.error('Error changing exchange ratio:', result.error);
        }
    };

    const isButtonDisabled = (ratio) => ratio === exchangeRatio;

    return (
        <>
            <h1 className='center-text'>Exchange Ratio (MLD:HUSD)</h1>
            <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} >
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
            </div>
        </>
    );
};

export default ExchangeRatioController;
