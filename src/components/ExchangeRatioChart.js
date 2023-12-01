import React, { useEffect, useState, useRef } from "react";
import "./ExchangeRatioChart.css";
import { Chart } from 'chart.js/auto';
import { fetchBlockchainDataFromAPI } from "../api/api";

const ExchangeRatioChart = () => {
    const [blockchainData, setBlockchainData] = useState([]);
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const [lastLength, setLastLength] = useState(0); // Track the last length of blockchainData

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

    // Fetch blockchain data
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

    // Update chart data based on blockchainData
    useEffect(() => {
        if (chartInstance) {
            // If it's the first time setting the data, read all of it
            if (lastLength === 0 && blockchainData.length > 0) {
                chartInstance.data.labels = blockchainData.map((_, index) => index + 1);
                chartInstance.data.datasets[0].data = blockchainData.map(block => block.exchange_ratio);
                chartInstance.data.datasets[1].data = blockchainData.map(block => block.reserve_ratio);
                chartInstance.update();
                setLastLength(blockchainData.length);
            }
            // For subsequent updates, add only the new data
            else if (blockchainData.length > lastLength) {
                const latestBlock = blockchainData[blockchainData.length - 1];
                chartInstance.data.labels.push(blockchainData.length);
                chartInstance.data.datasets[0].data.push(latestBlock.exchange_ratio);
                chartInstance.data.datasets[1].data.push(latestBlock.reserve_ratio);
                chartInstance.update();
                setLastLength(blockchainData.length);
            }
        }
    }, [blockchainData, chartInstance, lastLength]);

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
