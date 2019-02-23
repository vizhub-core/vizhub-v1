import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ForkedFromText = styled.div`
  font-size: 0.8em;
  color: ${props => props.theme.textLight};
`;

export const ForkedFromViz = styled.div`
  width: 120px;
  height: 50px;
  background-color: #ddd;
`;
