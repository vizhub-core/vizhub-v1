import React from 'react';
import { ActionSVG } from './styles';

// Derived from Material Design fullscreen icon.
export const FullScreenSVG = () => (
  <ActionSVG viewBox="0 0 18 18">
    <path d="M 2.25,12 H 0 v 6 H 6.0000001 V 15.75 H 2.25 Z M 0,6 H 2.25 V 2.25 H 6.0000001 V 0 H 0 Z m 15.75,9.75 H 12 V 18 h 6 V 12 H 15.75 Z M 12,0 v 2.25 h 3.75 V 6 H 18 V 0 Z" />
  </ActionSVG>
);

// Derived from Octicons repo-forked icon
export const ForkSVG = () => (
  <ActionSVG viewBox="0 0 10 16">
    <path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" />
  </ActionSVG>
);
