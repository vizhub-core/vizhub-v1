import React from 'react';
import { format } from 'd3-format';
import { Wrapper } from './styles';

export const formatViewCount = format(',');

export const ViewCount = ({ viewCount }) => (
  <Wrapper>{formatViewCount(viewCount)}</Wrapper>
);
