import React, { useEffect, useState, useRef } from "react";
import "./ExchangeRatioChart.css";
import { Chart } from 'chart.js/auto';
import { fetchBlockchainDataFromAPI } from "../api/api";
import { useRecoilValue } from 'recoil';
import { exchangeRatioState, reserveRatioState } from '../state/CollateralState';

const ExchangeRatioChart = () => {
    const [blockchainData, setBlockchainData] = useState([]);
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const [chartData, setChartData] = useState([]);

    const exchangeRatio = useRecoilValue(exchangeRatioState);
    const reserveRatio = useRecoilValue(reserveRatioState);

    // Initialize chart
    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const newChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Exchange Balance to Collateral Ratio',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    data: [],
                }, {
                    label: 'Reserve Balance to Collateral Ratio',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    data: [],
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax: 100,
                        ticks: {
                            stepSize: 25
                        }
                    }
                }
            }
        });

        setChartInstance(newChart);

        // Cleanup function
        return () => {
            if (newChart) {
                newChart.destroy();
            }
        };
    }, []);

    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchBlockchainDataFromAPI();
            if (result.success) {
                setBlockchainData(result.data);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 15000);

        return () => clearInterval(intervalId);
    }, []);

    // Update chart data
    useEffect(() => {
        if (chartInstance && chartData.length > 0) {
            const lastDataPoint = chartData[chartData.length - 1];
            chartInstance.data.labels.push(lastDataPoint.blockHeight);
            chartInstance.data.datasets[0].data.push(lastDataPoint.exchangeRatio);
            chartInstance.data.datasets[1].data.push(lastDataPoint.reserveRatio);
            chartInstance.update();
        }
    }, [chartData]);

    // Add or update data point
    useEffect(() => {
        if (blockchainData.length > 0) {
            const newPoint = {
                blockHeight: blockchainData.length,
                exchangeRatio: exchangeRatio,
                reserveRatio: reserveRatio
            };

            setChartData(prevData => {
                const isDataNew = !prevData.length || 
                  prevData[prevData.length - 1].blockHeight !== newPoint.blockHeight ||
                  prevData[prevData.length - 1].exchangeRatio !== newPoint.exchangeRatio ||
                  prevData[prevData.length - 1].reserveRatio !== newPoint.reserveRatio;

                if (isDataNew) {
                    return [...prevData, newPoint]; // Add new data point
                } else {
                    // Overwrite the last data point
                    return prevData.map((item, index) => 
                        index === prevData.length - 1 ? newPoint : item);
                }
            });
        }
    }, [exchangeRatio, reserveRatio, blockchainData]);

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
