import styled from 'styled-components';
import { Avatar } from '../styles';

export const InfoAvatar = styled(Avatar)`
  height: ${props => props.theme.infoAvatarHeight}px;
`;

export const Wrapper = styled.div`
  display: flex;
  font-size: 1.1em;
`;

export const OwnerNamePublishDate = styled.div`
  margin-left: ${props => props.theme.infoAvatarPadding}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
