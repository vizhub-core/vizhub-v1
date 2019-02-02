import React from 'react';
import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Studio } from './components/Studio';

export const App = () => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return loaded ? <Studio/> : <LoadingScreen/>;
};
