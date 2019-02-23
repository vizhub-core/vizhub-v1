import styled from 'styled-components';
import { Avatar } from '../styles';

export const InfoAvatar = styled(Avatar)`
  height: ${props => props.theme.infoAvatarHeight}px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const OwnerNamePublishDate = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const OwnerName = styled.div`
  color: ${props => props.theme.textMain};
  font-weight: bold;
`;

export const PublishDate = styled.div`
  color: ${props => props.theme.textLight};
  font-size: 0.8em;
`;
