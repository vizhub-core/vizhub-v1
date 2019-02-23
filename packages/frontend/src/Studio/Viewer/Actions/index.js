import React from 'react';
import {format} from 'd3-format';
import {Action, Icon, ActionSVG} from './styles';
import {ForkSVG, FullScreenSVG} from './svg';
import edit from '../../../svg/octicons/pencil.svg';
import upvote from '../../../svg/octicons/thumbsup.svg';
import downvote from '../../../svg/octicons/thumbsdown.svg';
import share from '../../../svg/material-design/forward-arrow.svg';
import download from '../../../svg/material-design/download-button.svg';

export const formatVotes = format(',');

export const FullScreen = () => (
  <div style={{width: '40px', height: '40px'}}>
    <FullScreenSVG />
  </div>
);

export const Fork = () => (
  <Action>
    <ForkSVG /> Fork
  </Action>
);

export const Edit = ({onEditClick}) => (
  <Action onClick={onEditClick}>
    <Icon src={edit} /> Edit
  </Action>
);

export const Upvote = ({upvotes}) => (
  <Action>
    <Icon src={upvote} /> {formatVotes(upvotes)}
  </Action>
);

export const Downvote = ({downvotes}) => (
  <Action>
    <Icon src={downvote} /> {formatVotes(downvotes)}
  </Action>
);

export const Share = () => (
  <Action>
    <Icon src={share} />
    Share
  </Action>
);

export const Download = () => (
  <Action>
    <Icon src={download} />
  </Action>
);
