import React, { useEffect, useState, useRef } from "react";
import "./ExchangeRatioChart.css";
import { Chart } from 'chart.js/auto';
import { useRecoilValue } from 'recoil';
import { collateralRequirementState, exchangeBalancesState, reserveBalancesState } from '../atoms/walletBalanceAtom';
import { fetchBlockchainDataFromAPI } from "../api/api";
import { tokenOptions } from "../utils/optionValues";
import { infoUpdateCountdownState } from "../atoms/timerAtom";
import { chartDataState } from "../atoms/chartDataAtom";

const ExchangeRatioChart = () => {
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const chartData = useRecoilValue(chartDataState);
    const exchangeBalances = useRecoilValue(exchangeBalancesState);
    const reserveBalances = useRecoilValue(reserveBalancesState);
    const collateralRequirement = useRecoilValue(collateralRequirementState);
    const [blockchainLength, setBlockchainLength] = useState(0);
    const infoUpdateCountdown = useRecoilValue(infoUpdateCountdownState);

    useEffect(() => {
        if (!chartRef.current) {
            console.warn("Canvas element is not rendered yet.");
            return;
        }
    
        const ctx = chartRef.current.getContext('2d');
        if (!ctx) {
            console.warn("Failed to get canvas context.");
            return;
        }
    
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
    
        return () => {
            if (newChartInstance) {
                newChartInstance.destroy();
            }
        };
    }, [chartData]);

    // Update chart when collateral requirements are updated
    useEffect(() => {
        // Delay the update slightly to ensure DOM is ready
        const updateChart = () => {
            if (chartInstance) {
                chartInstance.data.labels = chartData.labels;
                chartInstance.data.datasets[0].data = chartData.exchangeData;
                chartInstance.data.datasets[1].data = chartData.reserveData;
                chartInstance.update();
            }
        };
    
        updateChart();    
    }, [chartData, chartInstance]);
    
    return (
        <>
            <h3 className="center-text">Percent Collateral Met by Block Height</h3>
            <div id="ratioChartContainer">
                <canvas ref={chartRef} id="ratioChart"></canvas> 
            </div>
        </>
    );
};

export default ExchangeRatioChart;
