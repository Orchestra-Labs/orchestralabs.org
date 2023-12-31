import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LocationHandler from "./components/LocationHandler";
import {NavOptions} from "./utils/optionValues";
import NavBar from "./components/NavBar";
import BottomNavBar from "./components/BottomNavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import TestResults from "./components/TestResults";
import './App.css';
import InteractiveDemoPage from './components/InteractiveDemoPage';
import DemoPage from './components/DemoPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <LocationHandler />
      <div className="container">
        <NavBar />
        <div className='centerItem'>
        <Routes>
          <Route path={NavOptions.HOME} element={<Home />} />
          <Route path={NavOptions.TEST_RESULTS} element={<TestResults />} />
          <Route path={NavOptions.DEMO} element={<DemoPage/>} />
          <Route path={NavOptions.CHART} element={<InteractiveDemoPage/>} />
          <Route path={NavOptions.INTERACTIVE_DEMO} element={<InteractiveDemoPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        <BottomNavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
