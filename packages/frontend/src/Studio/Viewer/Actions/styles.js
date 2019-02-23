import styled from 'styled-components';

export const Action = styled.button`
  font-size: 1em;
  background: white;
  margin: 0;
  border: 1px solid black;
  flex: 1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 35px;
`;

export const ActionSVG = styled.svg`
  fill: ${props => props.theme.textLight}
`;
