import styled from 'styled-components';
import { headerHeight, infoAvatarHeight } from '../constants';

const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
`;

export const HeaderAvatar = styled(Avatar)`
  height: ${headerHeight}px;
  cursor: pointer;
`;

export const InfoAvatar = styled(Avatar)`
  height: ${infoAvatarHeight}px;
`;

export const avatarUrl = ({ gitHubId }, height) =>
  `https://avatars0.githubusercontent.com/u/${gitHubId}?s=${height * 2}&v=4`;
