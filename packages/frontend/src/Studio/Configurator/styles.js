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

export const HeaderIcon = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
`;

export const HeaderTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const Section = styled.div`
  color: ${props => props.theme.foreground};
  font-size: 1.2em;
`;

export const SectionHeader = styled(Flex)`
  padding: 10px;
  background: #363636;
  align-items: center;
`;

export const SectionHeaderIcon = styled.div`
  width: 32px;
  height: 32px;
`;

export const SectionHeaderTitle = styled.div``;

export const SectionBody = styled.div`
  padding: 10px;
`;

export const File = styled.div`
  font-family: monospace;
  margin-left: 2px;
  font-size: 1.4em;
  cursor: pointer;
`;

export const Widget = styled(Flex)``;

export const WidgetTitle = styled.div``;

export const WidgetValue = styled.div`
  color: ${props => props.color};
`;
