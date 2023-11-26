import React from "react";

const ViewTable = () => {
  return (
    <table>
        <tbody>
            <tr title="Solution">
                <td className="panel">
                    <h1>Bank Runs Solved</h1>
                    <p>
                        Results utilizing transaction data from Luna's fall show
                        <br></br>
                        Symphony can drop to 1/4 of its original value and still honor full withdrawals!
                    </p>
                    <img className="image" src="Total-Coins-to-Refill-Exchange-and-Reserve.png" alt="Another Image"></img>
                </td>
            </tr>

            <tr>
                <td className="clear"></td>
            </tr>

            <tr title="Sign Up">
                <td className="panel">
                    <h1>Be the First</h1>
                    <p>Enter your contact information below to be one of the first to try this chain!</p>
                    <a href="https://forms.gle/z6TkmYvchhnf1zZG7" target="_blank">Show Form</a>
                </td>
            </tr>

            <tr>
                <td className="clear"></td>
            </tr>
        </tbody>
    </table>
  );
};

export default ViewTable;