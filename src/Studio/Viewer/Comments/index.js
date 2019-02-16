import React from 'react';

import { Wrapper, Comment } from './styles';

export const Comments = ({ comments }) => (
  <Wrapper>
    {comments.map(({ user, date, content }, i) => (
      <Comment key={i}>{content}</Comment>
    ))}
  </Wrapper>
);
