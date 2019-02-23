import React from 'react';
import { format } from 'd3-format';
import { Action} from './styles';
import {
  ForkSVG,
  FullScreenSVG,
  EditSVG,
  UpvoteSVG,
  DownvoteSVG,
  ShareSVG,
  DownloadSVG
} from './svg';

export const formatVotes = format(',');

export const FullScreen = () => (
  <div style={{ width: '40px', height: '40px' }}>
    <FullScreenSVG />
  </div>
);

export const Fork = () => (
  <Action>
    <ForkSVG /> Fork
  </Action>
);

export const Edit = ({ onEditClick }) => (
  <Action onClick={onEditClick}>
    <EditSVG /> Edit
  </Action>
);

export const Upvote = ({ upvotes }) => (
  <Action>
    <UpvoteSVG /> {formatVotes(upvotes)}
  </Action>
);

export const Downvote = ({ downvotes }) => (
  <Action>
    <DownvoteSVG /> {formatVotes(downvotes)}
  </Action>
);

export const Share = () => (
  <Action>
    <ShareSVG />
    Share
  </Action>
);

export const Download = () => (
  <Action>
    <DownloadSVG /> Download
  </Action>
);
