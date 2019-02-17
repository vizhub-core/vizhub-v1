import styled from 'styled-components';
import { Avatar } from '../styles';

export const InfoAvatar = styled(Avatar)`
  height: ${props => props.theme.infoAvatarHeight}px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Owner = styled.div`
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

export const Title = styled.div`
  font-size: 1.5em;
  margin-bottom: 6px;
`;

export const ViewCount = styled.div`
  font-size: 0.8em;
  margin-bottom: 10px;
`;
