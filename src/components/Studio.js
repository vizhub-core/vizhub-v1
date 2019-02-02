import React from 'react';
import styled from 'styled-components';
import { Configurator } from './Configurator';
import { Editor } from './Editor';
import { Viewer } from './Viewer';

const StudioContainer = styled.div`
  display: flex;
`;

const ConfiguratorContainer = styled.div`
  flex-grow: 1;
`;

const EditorContainer = styled.div`
  flex-grow: 4;
`;

const ViewerContainer = styled.div`
  flex-grow: 2;
`;

export const Studio = () => (
  <StudioContainer>

    <ConfiguratorContainer>
      <Configurator />
    </ConfiguratorContainer>

    <EditorContainer>
      <Editor />
    </EditorContainer>

    <ViewerContainer>
      <Viewer />
    </ViewerContainer>

  </StudioContainer>
);
