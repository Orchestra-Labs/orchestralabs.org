import React from "react";
import './TestResults.css';
import testResults from './../images/Total-Coins-to-Refill-Exchange-and-Reserve.png';

const TestResults = () => {
    return (
        <div className="container">
            <p className="test-results-text">
                Results utilizing transaction data from Luna's fall show Symphony can drop to 25% of its original value and still honor full withdrawals!
            </p>
            <img className="image" src={testResults} alt="Result of value drop testing of Symphony exchange"/>
        </div>
    );
};

export default TestResults;
