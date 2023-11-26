    import React, { useEffect, useState, useRef } from "react";
    import "./ExchangeRatioChart.css";
    import { Chart } from 'chart.js/auto';
    
    const ExchangeRatioChart = () => {
        const [blockchainData, setBlockchainData] = useState([]);
        const chartRef = useRef(null);
        const [chartInstance, setChartInstance] = useState(null);
    
        const fetchBlockchainData = async () => {
            try {
                const response = await fetch('/blockchainData');
                const data = await response.json();
                setBlockchainData(data.blockchain || []);
            } catch (error) {
                console.error('Error fetching blockchain data:', error);
            }
        };
    
        useEffect(() => {
            const intervalId = setInterval(fetchBlockchainData, 15000);
    
            // Cleanup function to clear the interval
            return () => clearInterval(intervalId);
        }, []);
    
        const updateChart = (newData) => {
            if (chartInstance) {
                chartInstance.destroy(); // Destroy existing chart instance
            }
    
            const ctx = chartRef.current.getContext('2d');
            const newChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: newData.map((block) => block.timestamp), // Assuming each block has a timestamp
                    datasets: [{
                        label: 'Exchange Balance to Collateral Ratio',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        data: newData.map((block) => block.exchangeRatio), // Assuming each block has exchangeRatio
                    },
                    {
                        label: 'Reserve Balance to Collateral Ratio',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        data: newData.map((block) => block.reserveRatio), // Assuming each block has reserveRatio
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
        };
    
        useEffect(() => {
            if (blockchainData.length > 0) {
                updateChart(blockchainData);
            }
        }, [blockchainData]);
    
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
    