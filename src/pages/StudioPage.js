import React from 'react';
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { LoadingScreen } from '../LoadingScreen';
import { Studio } from '../Studio';
import {
  getShowConfigurator,
  setShowConfigurator,
  getFile,
  setFile
} from '../urlState';

export const StudioPage = withRouter(props => {
  const [loaded, setLoaded] = useState(false);

  const showConfigurator = getShowConfigurator(props) !== undefined;

  const file = getFile(props);
  const showEditor = file !== undefined;

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  const onEditClick = () =>
    setShowConfigurator(props, showConfigurator ? undefined : null);
  const onFileClick = clickedFile =>
    setFile(props, clickedFile === file ? undefined : clickedFile);

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
