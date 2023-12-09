import React, { useEffect, useState } from "react";
import DemoController from "./DemoData";
import ExchangeRatioChart from "./ExchangeRatioChart";
import { useLocation } from "react-router";
import { NavOptions, tokenOptions } from "../utils/optionValues";
import ExchangeRatioController from "./ExchangeRatioController";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { fetchBlockchainDataFromAPI, fetchDemoData, fetchWalletBalances } from "../api/api";
import { infoUpdateCountdownState } from "../atoms/timerAtom";
import { chartDataState } from "../atoms/chartDataAtom";
import { collateralRequirementState, demoWalletState, exchangeBalancesState, reserveBalancesState } from "../atoms/walletBalanceAtom";
import { exchangeInfoState } from "../atoms/exchangeAtom";

const DemoPage = () => {
    const location = useLocation();
    const [shouldCreateChart, setShouldCreateChart] = useState(false);
    const [chartInstance, setChartInstance] = useState(null);
    const setChartData = useSetRecoilState(chartDataState);
    const [infoUpdateCountdown, setInfoUpdateCountdown] = useRecoilState(infoUpdateCountdownState);
    const [collateralRequirement, setCollateralRequirement] = useRecoilState(collateralRequirementState);
    const [demoWallet, setDemoWallet] = useRecoilState(demoWalletState);
    const [exchangeBalances, setExchangeBalances] = useRecoilState(exchangeBalancesState);
    const [reserveBalances, setReserveBalances] = useRecoilState(reserveBalancesState);
    const [exchangeInfo, setExchangeInfo] = useRecoilState(exchangeInfoState);

    const updateCollateralRequirement = async () => {
        try {
            const data = await fetchDemoData();
            setCollateralRequirement(data.collateral_requirement);
        } catch (error) {
            console.error('Error fetching wallet data:', error);
        }
    };

    const calculatePercentCollateralMet = (balance, collateralRequirement) => {
        return collateralRequirement > 0 ? (balance / collateralRequirement) * 100 : 100;
    };

    const fetchData = async () => {
        const result = await fetchBlockchainDataFromAPI();
        if (result.success) {
            const melodyKey = tokenOptions.Melody.jsonValue.split(' ').join('');

            setChartData(prevChartData => {
                const updatedLabels = [...prevChartData.labels];
                const updatedExchangeData = [...prevChartData.exchangeData];
                const updatedReserveData = [...prevChartData.reserveData];
            
                const blockchainLength = result.data.length;
                const dataIndex = updatedLabels.findIndex(label => label === blockchainLength);
            
                if (dataIndex !== -1) {
                    // Update existing data point
                    updatedExchangeData[dataIndex] = calculatePercentCollateralMet(
                        exchangeBalances[melodyKey], collateralRequirement
                    );
                    updatedReserveData[dataIndex] = calculatePercentCollateralMet(
                        reserveBalances[melodyKey], collateralRequirement
                    );
                } else {
                    // Add new data point
                    updatedLabels.push(blockchainLength);
                    updatedExchangeData.push(
                        calculatePercentCollateralMet(exchangeBalances[melodyKey], collateralRequirement)
                    );
                    updatedReserveData.push(
                        calculatePercentCollateralMet(reserveBalances[melodyKey], collateralRequirement)
                    );
                }
            
                return {
                    labels: updatedLabels,
                    exchangeData: updatedExchangeData,
                    reserveData: updatedReserveData
                };
            });            
        }
    };

    const updateBalances = async () => {
        if (demoWallet.address) {
            const walletBalances = await fetchWalletBalances(demoWallet.address);
            if (walletBalances) { // Check if the data is valid and the component is still mounted
                setDemoWallet(prevWallet => ({ ...prevWallet, balances: walletBalances }));
            }
        }
        if (exchangeInfo.exchangeAddress) {
            const exchangeBalances = await fetchWalletBalances(exchangeInfo.exchangeAddress);
            if (exchangeBalances) {
                setExchangeBalances(exchangeBalances);
            }
        }
        if (exchangeInfo.reserveAddress) {
            const reserveBalances = await fetchWalletBalances(exchangeInfo.reserveAddress);
            if (reserveBalances) {
                setReserveBalances(reserveBalances);
            }
        }
    };

    const initializeDemoData = async () => {
        try {
            const data = await fetchDemoData();
            setDemoWallet(prevWallet => ({
                ...prevWallet,
                address: data.demo_address,
                privateKey: data.demo_private_key,
                publicKey: data.demo_public_key
            }));
            setExchangeInfo({
                exchangeAddress: data.exchange_address,
                reserveAddress: data.reserve_address,
                exchangeRatio: data.exchange_ratio,
            });
            setCollateralRequirement(data.collateral_requirement);
        } catch (error) {
            console.error('Error fetching wallet data:', error);
        }
    };

    useEffect(() => {
        initializeDemoData();
        setShouldCreateChart(true);

        const infoUpdateTimer = setInterval(() => {
            setInfoUpdateCountdown(prevCountdown => prevCountdown > 0 ? prevCountdown - 1 : 3);
        }, 1000);

        return () => {
            clearInterval(infoUpdateTimer);
            if (chartInstance) {
                chartInstance.destroy();
                setChartInstance(null);
            }
        };
    }, []);

    useEffect(() => {
        if (location.pathname === NavOptions.CHART) {
            setShouldCreateChart(true);
        }
    }, [location.pathname]);    

    useEffect(() => {
        if (infoUpdateCountdown === 3) {
            fetchData();
        }
    }, [infoUpdateCountdown]);

    useEffect(() => {        
        const balanceInterval = setInterval(updateBalances, 3000);
        const collateralDataInterval = setInterval(updateCollateralRequirement, 3000);        

        return () => {
            clearInterval(collateralDataInterval);
            clearInterval(balanceInterval);
        };
    }, [demoWallet]);

    return (
        <>
            {location.pathname === NavOptions.DEMO && (
                <DemoController />
            )}
            {location.pathname === NavOptions.CHART && (
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ExchangeRatioController />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ExchangeRatioChart
                                    shouldCreateChart={shouldCreateChart}
                                    setShouldCreateChart={setShouldCreateChart}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    );
};

export default DemoPage;
