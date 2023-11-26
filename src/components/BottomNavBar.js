import React from "react";
import "./BottomNavBar.css";

const BottomNavBar = () => {
    return (
        <div className="bottom-nav">
            <div className="bottom-nav-links">
                <a href="https://discord.com/channels/1162823265975279636/1162823266432466975" target="_blank" rel="noopener noreferrer">
                    <img src="/discord.svg" alt="Discord" className="social-icon" />
                </a>
                <a href="https://twitter.com/orchestra_labs" target="_blank" rel="noopener noreferrer">
                    <img src="/twitter.svg" alt="Twitter" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/company/orchestra-labs/about" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.svg" alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://github.com/Orchestra-Labs" target="_blank" rel="noopener noreferrer">
                    <img src="/github.svg" alt="GitHub" className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default BottomNavBar;
