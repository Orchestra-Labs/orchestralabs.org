import React from 'react';
import './NavBar.css';
import { useRecoilState } from 'recoil';
import { navigationState } from '../state/NavigationState';
import NavOptions from '../utils/enums';

const NavBar = () => {
    const [navState, setNavState] = useRecoilState(navigationState);
  
    const handleNavClick = (navButton) => {
      setNavState({ currentPage: navButton });
    };

    const isActive = (navButton) => {
        return navState.currentPage === navButton ? 'active' : '';
    };
  
    return (
      <div className="navbar">
          <div id="title" onClick={() => handleNavClick(NavOptions.HOME)}>
              <img className="navbar-icon" src="sound-wave.png" alt="Sound Wave Icon" />
              <span>Symphony</span>
          </div>
  
          <div id="navlinks">
              <a href="#" className={isActive(NavOptions.HOME)} onClick={() => handleNavClick(NavOptions.HOME)}>Home</a>
              <a href="#" className={isActive(NavOptions.TEST_RESULTS)} onClick={() => handleNavClick(NavOptions.TEST_RESULTS)}>Test Results</a>
              <a href="#" className={isActive(NavOptions.DEMO)} onClick={() => handleNavClick(NavOptions.DEMO)}>View Demo</a>
          </div>
      </div>
    );
  };
  
  export default NavBar;
  
