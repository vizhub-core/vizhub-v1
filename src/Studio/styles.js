import styled from 'styled-components';

export const StudioWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const ForegroundBackground = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.foreground};
`;

export const ConfiguratorWrapper = styled(ForegroundBackground)`
  flex: 0 0 auto;
  overflow: auto;
`;

export const EditorWrapper = styled(ForegroundBackground)`
  flex: 1;
  overflow: auto;
  display: flex;
  height: 100%;
`;

export const ViewerWrapper = styled(ForegroundBackground)`
  flex: 1;
  overflow: auto;
  display: flex;
  justify-content: center;
`;
