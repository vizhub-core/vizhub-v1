import React from 'react';

import { Wrapper, Row, Action } from './styles';

export const Actions = () => (
  <Wrapper>
    <Row>
      <Action>Fork</Action>
      <Action>Edit</Action>
      <Action>FullScreen</Action>
    </Row>
    <Row>
      <Action>Upvote</Action>
      <Action>Downvote</Action>
      <Action>Share</Action>
      <Action>Download</Action>
    </Row>
  </Wrapper>
);
