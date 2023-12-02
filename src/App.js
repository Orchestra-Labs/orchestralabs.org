import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LocationHandler from "./components/LocationHandler";
import {NavOptions} from "./utils/optionValues";
import NavBar from "./components/NavBar";
import BottomNavBar from "./components/BottomNavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import TestResults from "./components/TestResults";
import DemoPage from "./components/DemoPage";




import './App.css';

function App() {
  return (
    <BrowserRouter basename="/">
      <LocationHandler />
      <div className="container">
        <NavBar />
        <Routes>
          <Route path={NavOptions.HOME} element={<Home />} />
          <Route path={NavOptions.TEST_RESULTS} element={<TestResults />} />
          <Route path={NavOptions.DEMO} element={<DemoPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
