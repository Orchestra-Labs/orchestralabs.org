import React from "react";
import "./ExchangeRatioChart.css"

const ExchangeRatioChart = () => {
    return (
        <>
            <h3>Percent Collateral Met by Block Height</h3>
            <div id="ratioChartContainer">
                <canvas id="ratioChart"></canvas> 
            </div>
        </>
    );
};

export default ExchangeRatioChart;