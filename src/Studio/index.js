import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  StudioWrapper,
  ConfiguratorWrapper,
  EditorWrapper,
  ViewerWrapper
} from './styles';
import { Configurator } from './Configurator';
import { Editor } from './Editor';
import { Viewer } from './Viewer';
import { dark, light } from '../themes';

export const Studio = () => (
  <StudioWrapper>
    <ThemeProvider theme={dark}>
      <>
        <ConfiguratorWrapper>
          <Configurator />
        </ConfiguratorWrapper>
        <EditorWrapper>
          <Editor />
        </EditorWrapper>
      </>
    </ThemeProvider>
    <ThemeProvider theme={light}>
      <ViewerWrapper>
        <Viewer />
      </ViewerWrapper>
    </ThemeProvider>
  </StudioWrapper>
);
