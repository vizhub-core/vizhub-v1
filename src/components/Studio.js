import React from 'react';
import styled from 'styled-components';
import { Configurator } from './Configurator';
import { Editor } from './Editor';
import { Viewer } from './Viewer';

const StudioWrapper = styled.div`
  display: flex;
`;

const ConfiguratorWrapper = styled.div`
  flex: 1;
`;

const EditorWrapper = styled.div`
  flex: 4;
`;

const ViewerWrapper = styled.div`
  flex: 4;
`;

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
