import React, { useEffect, useState, useRef } from "react";
import "./ExchangeRatioChart.css";
import { Chart } from 'chart.js/auto';
import { useRecoilValue } from 'recoil';
import { collateralRequirementState, exchangeBalancesState, reserveBalancesState } from '../atoms/walletBalanceAtom';
import { fetchBlockchainDataFromAPI } from "../api/api";
import { tokenOptions } from "../utils/optionValues";
import { infoUpdateCountdownState } from "../atoms/timerAtom";

const ExchangeRatioChart = () => {
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const exchangeBalances = useRecoilValue(exchangeBalancesState);
    const reserveBalances = useRecoilValue(reserveBalancesState);
    const collateralRequirement = useRecoilValue(collateralRequirementState);
    const [blockchainLength, setBlockchainLength] = useState(0);
    const infoUpdateCountdown = useRecoilValue(infoUpdateCountdownState);

    const fetchData = async () => {
        const result = await fetchBlockchainDataFromAPI();
        if (result.success) {
            setBlockchainLength(result.data.length);
        }
    };

    // Calculate the percent collateral met based on balances
    const calculatePercentCollateralMet = (melodyBalance, collateralRequirement) => {
        // Ensure totalCollateral is not zero to avoid division by zero error
        return collateralRequirement > 0 ? (melodyBalance / collateralRequirement) * 100 : 100;
    };

    // Initialize chart
    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const newChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [], // This will be updated with blockchain length
                datasets: [{
                    label: 'Exchange Balance to Collateral Ratio',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    data: [],
                }, {
                    label: 'Reserve Balance to Collateral Ratio',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    data: [],
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 25
                        }
                    }
                }
            }
        });

        setChartInstance(newChartInstance);
        fetchData();

        return () => {
            if (newChartInstance) {
                newChartInstance.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (infoUpdateCountdown === 3) {
            fetchData();
        }

    }, [infoUpdateCountdown]);

    // Update chart when collateral requirements are updated
    useEffect(() => {
        if (chartInstance && blockchainLength > 0) {
            const melodyKey = tokenOptions.Melody.jsonValue.split(' ').join('');
            const dataIndex = chartInstance.data.labels.findIndex(label => label === blockchainLength);
    
            // If blockchainLength is already in the labels, update the corresponding data point
            // Otherwise, add a new data point
            if (dataIndex !== -1) {
                // Update existing data point
                chartInstance.data.datasets[0].data[dataIndex] = calculatePercentCollateralMet(
                    exchangeBalances[melodyKey], collateralRequirement
                );
                chartInstance.data.datasets[1].data[dataIndex] = calculatePercentCollateralMet(
                    reserveBalances[melodyKey], collateralRequirement
                );
            } else {
                // Add new data point
                chartInstance.data.labels.push(blockchainLength);
                chartInstance.data.datasets[0].data.push(
                    calculatePercentCollateralMet(exchangeBalances[melodyKey], collateralRequirement)
                );
                chartInstance.data.datasets[1].data.push(
                    calculatePercentCollateralMet(reserveBalances[melodyKey], collateralRequirement)
                );
            }
    
            chartInstance.update();
        }
    }, [collateralRequirement, chartInstance, blockchainLength, exchangeBalances, reserveBalances]);    

    return (
        <>
            <h3>Percent Collateral Met by Block Height</h3>
            <div id="ratioChartContainer">
                <canvas ref={chartRef} id="ratioChart"></canvas> 
            </div>
        </>
    );
};

export default ExchangeRatioChart;
