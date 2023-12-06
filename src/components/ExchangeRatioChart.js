import React, { useEffect, useState, useRef } from "react";
import "./ExchangeRatioChart.css";
import { Chart } from 'chart.js/auto';
import { useRecoilValue } from 'recoil';
import { chartDataState } from "../atoms/chartDataAtom";

const ExchangeRatioChart = ({ shouldCreateChart, setShouldCreateChart }) => {
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const chartData = useRecoilValue(chartDataState);

    const createChart = () => {
        if (chartRef.current && !chartInstance) {
            const existingChart = Chart.getChart("ratioChart");
            if (existingChart) {
                existingChart.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            const newChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [],
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
        }
    }

    const updateChart = () => {
        if (chartInstance) {
            chartInstance.data.labels = chartData.labels;
            chartInstance.data.datasets[0].data = chartData.exchangeData;
            chartInstance.data.datasets[1].data = chartData.reserveData;
            chartInstance.update();
        }
    }

    useEffect(() => {
        setShouldCreateChart(true);

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
                setChartInstance(null);
            }
        };
    }, []);
    
    useEffect(() => {
        updateChart();    
    }, [chartData]);

    useEffect(() => {
        if (shouldCreateChart && chartRef.current) {
            createChart();
            setShouldCreateChart(false);
        }
    }, [shouldCreateChart]);
    
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
