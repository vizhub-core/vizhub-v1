import React from 'react';
import logo from '../../svg/logo.svg';
import { Info } from './Info';
import { avatarUrl } from './avatarUrl';
import {
  ViewerWrapper,
  Header,
  Runner,
  InfoActions,
  Logo,
  HeaderAvatar,
  headerHeight
} from './styles';

const Actions = () => <div>Actions</div>;

export const Viewer = () => {
  // TODO get these from context.
  const loggedInUser = {
    gitHubId: '68416',
    name: 'Curran Kelleher'
  };
  const ownerUser = loggedInUser;
  const publishDate = new Date();
  const title = 'Visualization Title';

  return (
    <ViewerWrapper>
      <Header>
        <Logo src={logo} />
        <HeaderAvatar src={avatarUrl(loggedInUser, headerHeight)} />
      </Header>
      <Runner />
      <InfoActions>
        <Info title={title} user={ownerUser} publishDate={publishDate} />
        <Actions />
      </InfoActions>
    </ViewerWrapper>
  );
};
