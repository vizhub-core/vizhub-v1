import React from 'react';
import { useState, useEffect } from 'react';
import { LoadingScreen } from './LoadingScreen';
import { Studio } from './Studio';
import { AppWrapper } from './styles';

export const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [showConfigurator, setShowConfigorator] = useState(false);
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  const onEditClick = () => setShowConfigorator(!showConfigurator);
  const onFileClick = () => setShowEditor(!showEditor);

  const content = loaded ? (
    <Studio
      showConfigurator={showConfigurator}
      showEditor={showEditor}
      onEditClick={onEditClick}
      onFileClick={onFileClick}
    />
  ) : (
    <LoadingScreen />
  );
  return <AppWrapper>{content}</AppWrapper>;
};
