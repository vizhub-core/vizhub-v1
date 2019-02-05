import React from 'react';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { LoadingScreen } from './LoadingScreen';
import { Studio } from './Studio';
import { light, dark } from './themes';

export const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
    let toggle = true;
    setInterval(() => {
      toggle = !toggle;
      setTheme(toggle ? dark : light);
    }, 2000);
  }, []);

  return loaded ? (
    <ThemeProvider theme={theme}>
      <Studio />
    </ThemeProvider>
  ) : (
    <LoadingScreen />
  );
};
