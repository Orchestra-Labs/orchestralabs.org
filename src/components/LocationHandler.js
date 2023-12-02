import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from "recoil";
import { navigationState } from "../atoms/navigationAtom";

const LocationHandler = () => {
  const setLocation = useSetRecoilState(navigationState);
  const location = useLocation();

  useEffect(() => {
    setLocation(location.pathname);
  }, [location]);

  return null;
};

export default LocationHandler;
