import styled from 'styled-components';
import { Flex } from '../../../styles';

export const Wrapper = styled.div`
  color: ${props => props.theme.foreground};
  font-size: 1.2em;
`;

export const Header = styled(Flex)`
  padding: 10px;
  background: #363636;
  align-items: center;
  cursor: pointer;
`;

export const HeaderIcon = styled.div`
  width: 24px;
  height: 24px;
`;

export const HeaderTitle = styled.div``;

export const Body = styled.div`
  padding: 10px;
  background: #222222;
`;
