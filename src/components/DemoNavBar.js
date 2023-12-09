import { Link, useLocation } from 'react-router-dom';
import { NavOptions } from '../utils/optionValues';
import './DemoNavBar.css';

const DemoNavBar = () => {
    const location = useLocation();

    return (
        <div id="navlinks">
            {location.pathname === NavOptions.DEMO && (
                <Link to={NavOptions.CHART} >Chart</Link>
            )}
            {location.pathname !== NavOptions.DEMO && (
                <Link to={NavOptions.DEMO} >Data</Link>
            )}
        </div>
    );
};

export default DemoNavBar;
