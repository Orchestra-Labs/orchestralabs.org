import React, { useRef, useEffect } from "react";
import demoVideo from '../assets/videos/demo.mp4'; 
import playButton from '../assets/images/play-button.svg';
import "./DemoPage.css"

const DemoPage = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleVideoPlay = () => {
            document.querySelector(".video-container").style.backgroundColor = "black";
        };

        const videoElement = videoRef.current;
        videoElement.addEventListener("play", handleVideoPlay);

        return () => {
            videoElement.removeEventListener("play", handleVideoPlay);
        };
    }, []);

    return (
        <div className="video-container">
            <video ref={videoRef} controls poster={playButton}>
                <source src={demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default DemoPage;
