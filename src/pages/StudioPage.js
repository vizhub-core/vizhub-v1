import React from 'react';
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { LoadingScreen } from '../LoadingScreen';
import { Studio } from '../Studio';
import { getShowConfigurator, setShowConfigurator } from '../urlState';

export const StudioPage = withRouter(props => {
  const [loaded, setLoaded] = useState(false);

  const showConfigurator = getShowConfigurator(props);
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  const onEditClick = () => setShowConfigurator(props, !showConfigurator);
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
});
