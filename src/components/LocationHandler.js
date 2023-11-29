// LocationHandler.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from "recoil";
import { navigationState } from "../state/NavigationState";

const LocationHandler = () => {
  const setLocation = useSetRecoilState(navigationState);
  const location = useLocation();

  useEffect(() => {
    setLocation(location.pathname);
  }, [location, setLocation]);

  return null; // This component does not render anything
};

export default LocationHandler;
