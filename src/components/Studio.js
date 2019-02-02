import React from 'react';
import styled from 'styled-components';

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

export const Studio = () =>
  <StudioContainer>
    <ConfiguratorContainer>
      Configurator
    </ConfiguratorContainer>
    <EditorContainer>
      Editor
    </EditorContainer>
    <ViewerContainer>
      Viewer
    </ViewerContainer>
  </StudioContainer>
