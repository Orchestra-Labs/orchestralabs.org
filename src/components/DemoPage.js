import React from "react";
import WalletInformation from "./WalletInformation";
import TransferController from "./TransferController";
import ExchangeRatioController from "./ExchangeRatioController";
import ExchangeRatioChart from "./ExchangeRatioChart";
import "./DemoPage.css"

const DemoPage = () => {
    return (
        <table className="container">
            <tbody>
                <tr>
                    <td className="left">
                        <WalletInformation />
                        <ExchangeRatioController />
                    </td>
                    <td className="right">
                        <TransferController />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <ExchangeRatioChart />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default DemoPage;
