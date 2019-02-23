import styled from 'styled-components';
import { Avatar } from '../styles';

export const InfoAvatar = styled(Avatar)`
  height: ${props => props.theme.infoAvatarHeight}px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const OwnerNamePublishDate = styled.div`
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const OwnerName = styled.div`
  font-weight: bold;
  line-height: 1.6em;
`;

export const PublishDate = styled.div`
  font-size: 0.9em;
`;
