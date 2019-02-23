import React from 'react';
import { withTheme } from 'styled-components';
import logo from '../../svg/logo.svg';
import { VizInfo } from './VizInfo';
import { OwnerInfo } from './OwnerInfo';
import { Actions } from './Actions';
import { Comments } from './Comments';
import { ForkedFrom } from './ForkedFrom';
import { avatarUrl } from './avatarUrl';
import {
  Wrapper,
  Padded,
  Header,
  Runner,
  InfoActions,
  Logo,
  HeaderAvatar,
  Description
} from './styles';

export const Viewer = withTheme(({ theme, onEditClick }) => {
  // TODO get these from context.
  const loggedInUser = {
    gitHubId: '68416',
    name: 'Curran Kelleher'
  };
  const ownerUser = loggedInUser;
  const publishDate = new Date();
  const title = 'Visualization Title';
  const viewCount = 1234;
  const upvotes = 2345;
  const downvotes = 5;
  const comments = [
    {
      user: loggedInUser,
      date: new Date('Fri Feb 15 2019'),
      content: 'This is the text of the comment'
    },
    {
      user: loggedInUser,
      date: new Date(),
      content: 'This is the text of the next comment'
    }
  ];

  return (
    <Wrapper>
      <Padded>
        <Header>
          <Logo src={logo} />
          <HeaderAvatar src={avatarUrl(loggedInUser, theme.headerHeight)} />
        </Header>
      </Padded>
      <Runner />
      <Padded>
        <InfoActions>
          <VizInfo title={title} viewCount={viewCount} />
          <OwnerInfo user={ownerUser} publishDate={publishDate} />
          <Actions
            upvotes={upvotes}
            downvotes={downvotes}
            onEditClick={onEditClick}
          />
          <ForkedFrom />
        </InfoActions>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Description>
        <Comments comments={comments} />
      </Padded>
    </Wrapper>
  );
});
