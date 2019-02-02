import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const ViewerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

const headerHeight = 32;
const infoAvatarHeight = 64;

const Logo = styled.img`
  height: ${headerHeight}px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
`;

const HeaderAvatar = styled(Avatar)`
  height: ${headerHeight}px;
  cursor: pointer;
`;

const InfoAvatar = styled(Avatar)`
  height: ${infoAvatarHeight}px;
`;

const Runner = styled.div`
  height: 300px;
  background-color: #ddd;
`;

const InfoActionsWrapper = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div``;

const Actions = () => <div>Actions</div>;

const avatarUrl = (gitHubId, height) =>
  `https://avatars0.githubusercontent.com/u/${gitHubId}?s=${height * 2}&v=4`;

export const Viewer = () => {

  // TODO get these from context.
  const loggedInUser = '68416';
  const ownerUser = '68416';

  return (
    <>
      <Header>
        <Logo src={logo} />
        <HeaderAvatar src={avatarUrl(loggedInUser, headerHeight)} />
      </Header>
      <Runner />
      <InfoActionsWrapper>
        <Info>
          <InfoAvatar src={avatarUrl(ownerUser, infoAvatarHeight)} />
        </Info>
        <Actions />
      </InfoActionsWrapper>
    </>
  );
};
