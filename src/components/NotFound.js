import React from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <h1>404: Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p id="navlinks">
                <Link to="/">Go back to Home</Link>
            </p>
        </div>
    );
};

export default NotFound;
