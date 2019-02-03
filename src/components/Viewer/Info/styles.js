import styled from 'styled-components';
import { Avatar } from '../styles';

export const infoAvatarHeight = 64;

export const InfoAvatar = styled(Avatar)`
  height: ${infoAvatarHeight}px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Owner = styled.div`
  display: flex;
`;

export const OwnerNamePublishDate = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const OwnerName = styled.div`
  font-weight: bold;
  line-height: 1.6em;
`;

export const PublishDate = styled.div`
  color: #11111199;
  font-size: 0.9em;
`;

export const Title = styled.div`
  font-size: 2em;
`;
