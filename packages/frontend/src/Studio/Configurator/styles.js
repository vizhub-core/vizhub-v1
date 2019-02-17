import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 250px;
`;

export const Section = styled.div`
  border: 1px solid ${props => props.theme.foreground}
  padding: 10px;
`;

export const File = styled.div`
  font-family: monospace;
  margin-left: 2px;
  font-size: 1.4em;
  cursor: pointer;
`;
