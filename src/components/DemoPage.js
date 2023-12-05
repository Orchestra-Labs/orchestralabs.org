import React from "react";
import WalletInformation from "./WalletInformation";
import DemoController from "./DemoData";
import ExchangeRatioChart from "./ExchangeRatioChart";
import { useLocation } from "react-router";
import { NavOptions } from "../utils/optionValues";
import ExchangeRatioController from "./ExchangeRatioController";

const DemoPage = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname === NavOptions.DEMO && (
                <DemoController />
            )}
            {location.pathname === NavOptions.CHART && (
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ExchangeRatioController />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <ExchangeRatioChart />
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    );
};

export default DemoPage;
