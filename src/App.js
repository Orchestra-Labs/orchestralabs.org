import React from "react";
import NavBar from "./components/NavBar";
import './App.css';
import BottomNavBar from "./components/BottomNavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NavOptions} from "./utils/OptionValues";
import Home from "./components/Home";
import TestResults from "./components/TestResults";
import DemoPage from "./components/DemoPage";
import LocationHandler from "./components/LocationHandler";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <LocationHandler />
      <div className="container">
        <NavBar />
        <Routes>
          <Route path={NavOptions.HOME} element={<Home />} />
          <Route path={NavOptions.TEST_RESULTS} element={<TestResults />} />
          <Route path={NavOptions.DEMO} element={<DemoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNavBar />
      </div>
    </BrowserRouter>
  );
};

export default App;
