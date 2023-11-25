import React from "react";
import './NavBar.css';

const TodoList = () => {
  return (
    <div class="navbar">
        <div id="title">
            <img class="navbar-icon" src="sound-wave.png" alt="Sound Wave Icon"></img>
            <span>Symphony</span>
        </div>

        <div id="navlinks">
            <a href="#" id="homeButton">Home</a>
            <a href="#" id="solutionButton">Solution</a>
            <a href="#" id="signUpButton">Sign Up</a>
        </div>
    </div>
  );
};

export default TodoList;
