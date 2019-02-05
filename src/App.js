import React from 'react';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { LoadingScreen } from './LoadingScreen';
import { Studio } from './Studio';
import { AppWrapper } from './styles';

export const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  const content = loaded ? <Studio /> : <LoadingScreen />;
  return <AppWrapper>{content}</AppWrapper>;
};
