import React from 'react';
import { format } from 'd3-format';
import { Wrapper, Icon } from './styles';
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

const Action = ({ svg: SVG, onClick, children }) => (
  <Wrapper onClick={onClick}>
    <Icon>
      <SVG />
    </Icon>
    {children}
  </Wrapper>
);

export const Fork = () => <Action svg={ForkSVG}>Fork</Action>;

export const Edit = ({ onClick }) => (
  <Action svg={EditSVG} onClick={onClick}>
    Edit
  </Action>
);

export const Upvote = ({ upvotes }) => (
  <Action svg={UpvoteSVG}>{formatVotes(upvotes)}</Action>
);

export const Downvote = ({ downvotes }) => (
  <Action svg={DownvoteSVG}>{formatVotes(downvotes)}</Action>
);

export const Share = () => <Action svg={ShareSVG}>Share</Action>;

export const Download = () => <Action svg={DownloadSVG}>Download</Action>;
