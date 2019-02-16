import styled from 'styled-components';

export const StudioWrapper = styled.div`
  display: flex;
`;

const ForegroundBackground = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.foreground};
`;

export const ConfiguratorWrapper = styled(ForegroundBackground)`
  flex: 1;
  overflow: auto;
`;

export const EditorWrapper = styled(ForegroundBackground)`
  flex: 4;
`;

export const ViewerWrapper = styled(ForegroundBackground)`
  flex: 4;
  overflow: auto;
`;
