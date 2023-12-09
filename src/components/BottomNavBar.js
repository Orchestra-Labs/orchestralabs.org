import React from "react";
import "./BottomNavBar.css";
import discordIcon from "./../assets/images/discord.svg";
import twitterIcon from "./../assets/images/twitter.svg";
import linkedInIcon from "./../assets/images/linkedin.svg";
import githubIcon from "./../assets/images/github.svg";

const BottomNavBar = () => {
    return (
        <div className="bottom-nav">
            <div className="bottom-nav-links">
                <a href="https://discord.com/channels/1162823265975279636/1162823266432466975" target="_blank" rel="noopener noreferrer">
                    <img src={discordIcon} alt="Discord" className="social-icon" />
                </a>
                <a href="https://twitter.com/orchestra_labs" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/company/orchestra-labs/about" target="_blank" rel="noopener noreferrer">
                    <img src={linkedInIcon} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://github.com/Orchestra-Labs" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default BottomNavBar;
