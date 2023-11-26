import React from "react";
import NavBar from "./components/NavBar";
import CenterWidget from "./components/CenterWidget";
import './App.css';
import BottomNavBar from "./components/BottomNavBar";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <CenterWidget />
      <BottomNavBar />
    </div>
  );
};

export default App;
