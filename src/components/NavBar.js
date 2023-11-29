import React from 'react';
import './NavBar.css';
import { Link, useLocation } from 'react-router-dom';
import NavOptions from '../utils/enums';

const NavBar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className="navbar">
            <div id="title" className={isActive(NavOptions.HOME)}>
                <Link to={NavOptions.HOME}>
                    <img className="navbar-icon" src="sound-wave.png" alt="Sound Wave Icon" />
                    <span>Symphony</span>
                </Link>
            </div>

            <div id="navlinks">
                <Link to={NavOptions.HOME} className={isActive(NavOptions.HOME)}>Home</Link>
                <Link to={NavOptions.TEST_RESULTS} className={isActive(NavOptions.TEST_RESULTS)}>Test Results</Link>
                <Link to={NavOptions.DEMO} className={isActive(NavOptions.DEMO)}>View Demo</Link>
            </div>
        </div>
    );
};

export default NavBar;
