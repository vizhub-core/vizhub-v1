import React from 'react';
import { withTheme } from 'styled-components';
import { avatarUrl } from '../avatarUrl';
import TimeAgo from 'timeago-react';

import {
  Wrapper,
  Comment,
  CommentAvatar,
  Left,
  Right,
  UserName,
  Time,
  Content
} from './styles';

export const Comments = withTheme(({ theme, comments }) => (
  <Wrapper>
    {comments.map(({ user, date, content }, i) => (
      <Comment key={i}>
        <Left>
          <CommentAvatar src={avatarUrl(user, theme.infoAvatarHeight)} />
        </Left>
        <Right>
          <UserName>{user.name}</UserName>
          <Time>
            <TimeAgo datetime={date} />
          </Time>
          <Content>{content}</Content>
        </Right>
      </Comment>
    ))}
  </Wrapper>
));
