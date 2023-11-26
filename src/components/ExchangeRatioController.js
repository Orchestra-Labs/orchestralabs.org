import React from "react";

const ExchangeRatioController = () => {
    return (
        <>
            <h1>Exchange Ratio (MLD:HUSD)</h1>
            <button className="change-ratio-button" data-change-ratio="100">1:1</button>
            <button className="change-ratio-button" data-change-ratio="75">3:4</button>
            <button className="change-ratio-button" data-change-ratio="50">1:2</button>
            <button className="change-ratio-button" data-change-ratio="25">1:4</button>
        </>
    );
};

export default ExchangeRatioController;