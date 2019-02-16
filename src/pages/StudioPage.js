import React from 'react';
import { useState, useEffect } from 'react';
import { LoadingScreen } from '../LoadingScreen';
import { Studio } from '../Studio';

export const StudioPage = () => {
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

  return loaded ? (
    <Studio
      showConfigurator={showConfigurator}
      showEditor={showEditor}
      onEditClick={onEditClick}
      onFileClick={onFileClick}
    />
  ) : (
    <LoadingScreen />
  );
};
