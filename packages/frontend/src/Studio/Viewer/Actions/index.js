import React from 'react';
import {format} from 'd3-format';
import {Row, Action, Icon, ActionSVG} from './styles';
import fork from '../../../svg/octicons/repo-forked.svg';
import edit from '../../../svg/octicons/pencil.svg';
import upvote from '../../../svg/octicons/thumbsup.svg';
import downvote from '../../../svg/octicons/thumbsdown.svg';
import share from '../../../svg/material-design/forward-arrow.svg';
import download from '../../../svg/material-design/download-button.svg';

export const formatVotes = format(',');

export const FullScreen = () => (
  <ActionSVG width="40" height="40" viewBox="0 0 18 18" >
    <path d="M 2.25,12 H 0 v 6 H 6.0000001 V 15.75 H 2.25 Z M 0,6 H 2.25 V 2.25 H 6.0000001 V 0 H 0 Z m 15.75,9.75 H 12 V 18 h 6 V 12 H 15.75 Z M 12,0 v 2.25 h 3.75 V 6 H 18 V 0 Z" />
  </ActionSVG>
);

export const PrimaryActions = ({onEditClick}) => (
  <Row>
    <Action>
      <Icon src={fork} /> Fork
    </Action>
    <Action onClick={onEditClick}>
      <Icon src={edit} /> Edit
    </Action>
  </Row>
);

export const SecondaryActions = ({upvotes, downvotes}) => (
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
);

//export const Actions = ({upvotes, downvotes, onEditClick}) => (
//  <Wrapper>
//      <PrimaryActions onEditClick={onEditClick} />
//      <SecondaryActions upvotes={upvotes} downvotes={downvotes} />
//  </Wrapper>
//);
