import React from "react";
import WalletInformation from "./WalletInformation";
import TransferController from "./TransferController";

const DemoController = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <WalletInformation />
                    </td>
                    <td>
                        <TransferController />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default DemoController;
