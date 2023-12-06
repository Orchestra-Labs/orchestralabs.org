import React from 'react';
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';
import { NavOptions } from '../utils/optionValues';
import soundWaveIcon from './../images/sound-wave.png';

const NavBar = () => {
    const location = useLocation();

    const isActive = (pathOptions) => {
        return pathOptions.includes(location.pathname) ? 'active' : '';
    };

    return (
        <div className="navbar-container">
            <div className="navbar">
                <div id="title" className={isActive([NavOptions.HOME])}>
                    <Link to={NavOptions.HOME}>
                        <img className="navbar-icon" src={soundWaveIcon} alt="Sound Wave Icon" />
                        <span>Symphony</span>
                    </Link>
                </div>

                <div id="navlinks">
                    <Link to={NavOptions.HOME} className={isActive([NavOptions.HOME])}>Home</Link>
                    <Link to={NavOptions.TEST_RESULTS} className={isActive([NavOptions.TEST_RESULTS])}>Test Results</Link>
                    <Link to={NavOptions.DEMO} className={isActive([NavOptions.DEMO, NavOptions.CHART])}>View Demo</Link>
                </div>
            </div>
            <div id="demo-navlinks">
                {location.pathname === NavOptions.DEMO && (
                    <Link to={NavOptions.CHART}>Chart</Link>
                )}
                {location.pathname === NavOptions.CHART && (
                    <Link to={NavOptions.DEMO}>Data</Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
