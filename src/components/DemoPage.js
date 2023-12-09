import React from "react";
import demoVideo from '../assets/videos/demo.mp4'; 
import "./DemoPage.css"

const DemoPage = () => {
    return (
        <div className="container">
            <video width="1920" height="1080" controls>
                <source src={demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default DemoPage;
