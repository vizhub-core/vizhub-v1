import styled from 'styled-components';

const desktopOnlyMedia = `
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  font-size: 0.8em;
  color: ${props => props.theme.textLight};
  background: white;
  margin: 0;
  border: none;
  flex: 1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props => props.desktopOnly ? desktopOnlyMedia : ''}
`;

export const Icon = styled.div`
  width: 25px;
`;

export const SVG = styled.svg`
  fill: ${props => props.theme.textLight};
`;
