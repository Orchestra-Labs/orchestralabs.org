import React from "react";
import NavBar from "./components/NavBar";
import CenterWidget from "./components/CenterWidget";
import './App.css';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <CenterWidget />
    </div>
  );
};

export default App;
