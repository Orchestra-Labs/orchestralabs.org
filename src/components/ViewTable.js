import React from "react";

const ViewTable = () => {
  return (
    <table>
        <tr>
            <td class="clear"></td>
        </tr>

        <tr title="Home">
            <td class="panel">
                <h1>The Symphony Blockchain</h1>
                <p>Symphony is the solution to the increasing centralization of stablecoins.</p>
                <p>It is in the final stages of development and coming soon!</p>
            </td>
        </tr>

        <tr>
            <td class="clear"></td>
        </tr>

        <tr title="Solution">
            <td class="panel">
                <h1>Bank Runs Solved</h1>
                <p>
                    Results utilizing transaction data from Luna's fall show
                    <br></br>
                    Symphony can drop to 1/4 of its original value and still honor full withdrawals!
                </p>
                <img class="image" src="Total-Coins-to-Refill-Exchange-and-Reserve.png" alt="Another Image"></img>
            </td>
        </tr>

        <tr>
            <td class="clear"></td>
        </tr>

        <tr title="Sign Up">
            <td class="panel">
                <h1>Be the First</h1>
                <p>Enter your contact information below to be one of the first to try this chain!</p>
                <a href="https://forms.gle/z6TkmYvchhnf1zZG7" target="_blank">Show Form</a>
            </td>
        </tr>

        <tr>
            <td class="clear"></td>
        </tr>
    </table>
  );
};

export default ViewTable;