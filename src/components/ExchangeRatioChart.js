import React, { useEffect, useState, useRef } from "react";
import Chart from 'chart.js/auto'; // Ensure you have imported Chart from 'chart.js'
//<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
import "./ExchangeRatioChart.css";

const ExchangeRatioChart = () => {
    const [blockchainData, setBlockchainData] = useState([]);
    const [timestamp, setTimestamp] = useState([]);
    const chartRef = useRef(null); // Ref to attach to the canvas
    const [ratioChart, setRatioChart] = useState(null); // State to keep track of the chart instance

    const fetchBlockchainData = async () => {
        try {
            const response = await fetch('/blockchainData');
            const data = await response.json();
            setBlockchainData(data.blockchain || []);
        } catch (error) {
            console.error('Error fetching blockchain data:', error);
        }
    };

    function updateRatioChart(newTimestamp, newExchangeRatio, newReserveRatio) {
        // Find the index of the existing timestamp
        const timestampIndex = ratioChart.data.labels.findIndex(timestamp => timestamp === newTimestamp);
      
        if (timestampIndex !== -1) {
          // Update data at the found index
          ratioChart.data.datasets[0].data[timestampIndex] = newExchangeRatio; // Update exchange dataset
          ratioChart.data.datasets[1].data[timestampIndex] = newReserveRatio; // Update reserve dataset
        } else {
          // Add new data
          ratioChart.data.labels.push(newTimestamp);
          ratioChart.data.datasets[0].data.push(newExchangeRatio); // Update exchange dataset
          ratioChart.data.datasets[1].data.push(newReserveRatio); // Update reserve dataset
        }
      
        ratioChart.update();
      }

    useEffect(() => {
        const intervalId = setInterval(fetchBlockchainData, 15000);

        // Cleanup function to clear the interval
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (chartRef.current && !ratioChart) {
            const ctx = chartRef.current.getContext('2d');
            const newChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Exchange Balance to Collateral Ratio',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        data: []
                    },
                    {
                        label: 'Reserve Balance to Collateral Ratio',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        data: []
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

            setRatioChart(newChart);
        }
    }, [chartRef, ratioChart]);

    useEffect(() => {
        if (ratioChart) {
            blockHeight = length(blockchainData.blockchain)
            setTimestamp(blockHeight)
            updateRatioChart(blockHeight, newExchangeRatio, newReserveRatio)
        }
    }, [blockchainData, ratioChart]);

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
