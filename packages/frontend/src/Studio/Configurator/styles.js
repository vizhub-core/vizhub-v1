import styled from 'styled-components';
import { Flex } from '../../styles';

export const Wrapper = styled.div`
  width: 250px;
`;

export const Header = styled(Flex)`
  padding: 10px;
  color: ${props => props.theme.foreground};
  background: #4d4d4d;
  font-size: 1.5em;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const HeaderIcon = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
`;

export const Section = styled.div`
  padding: 10px;
  color: ${props => props.theme.foreground};
  background: #363636;
  font-size: 1.2em;
`;

export const File = styled.div`
  font-family: monospace;
  margin-left: 2px;
  font-size: 1.4em;
  cursor: pointer;
`;
