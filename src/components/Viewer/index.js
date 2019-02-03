import React from 'react';
import styled from 'styled-components';
import logo from '../../svg/logo.svg';
import { Info } from './Info';
import { avatarUrl, HeaderAvatar } from './Avatar';
import { headerHeight } from './constants';

const ViewerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: ${headerHeight}px;
`;

const Runner = styled.div`
  height: 300px;
  background-color: #ddd;
`;

const InfoActions = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

const Actions = () => <div>Actions</div>;

export const Viewer = () => {

  // TODO get these from context.
  const loggedInUser = {
    gitHubId: '68416',
    name: 'Curran Kelleher'
  };
  const ownerUser = loggedInUser;
  const publishDate = new Date();

  return (
    <ViewerWrapper>
      <Header>
        <Logo src={logo} />
        <HeaderAvatar src={avatarUrl(loggedInUser, headerHeight)} />
      </Header>
      <Runner />
      <InfoActions>
        <Info user={ownerUser} publishDate={publishDate} />
        <Actions />
      </InfoActions>
    </ViewerWrapper>
  );
};
