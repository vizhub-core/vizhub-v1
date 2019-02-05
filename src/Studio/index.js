import React from 'react';
import {
  StudioWrapper,
  ConfiguratorWrapper,
  EditorWrapper,
  ViewerWrapper
} from './styles';
import { Configurator } from './Configurator';
import { Editor } from './Editor';
import { Viewer } from './Viewer';

export const Studio = () => (
  <StudioWrapper>
    <ConfiguratorWrapper>
      <Configurator />
    </ConfiguratorWrapper>

    <EditorWrapper>
      <Editor />
    </EditorWrapper>

    <ViewerWrapper>
      <Viewer />
    </ViewerWrapper>
  </StudioWrapper>
);
