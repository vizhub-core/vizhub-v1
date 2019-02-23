import React from 'react';
import { format } from 'd3-format';
import { Wrapper, Row, Action, Icon } from './styles';
import fork from '../../../svg/octicons/repo-forked.svg';
import edit from '../../../svg/octicons/pencil.svg';
import fullscreen from '../../../svg/material-design/fullscreen.svg';
import upvote from '../../../svg/octicons/thumbsup.svg';
import downvote from '../../../svg/octicons/thumbsdown.svg';
import share from '../../../svg/material-design/forward-arrow.svg';
import download from '../../../svg/material-design/download-button.svg';

export const formatVotes = format(',');

export const Actions = ({ upvotes, downvotes, onEditClick }) => (
  <Wrapper>
    <Row>
      <Action>
        <Icon src={fork} /> Fork
      </Action>
      <Action onClick={onEditClick}>
        <Icon src={edit} /> Edit
      </Action>
      <Action>
        <Icon src={fullscreen} />
      </Action>
    </Row>
    <Row>
      <Action>
        <Icon src={upvote} /> {formatVotes(upvotes)}
      </Action>
      <Action>
        <Icon src={downvote} /> {formatVotes(downvotes)}
      </Action>
      <Action>
        <Icon src={share} />
        Share
      </Action>
      <Action>
        <Icon src={download} />
      </Action>
    </Row>
  </Wrapper>
);
