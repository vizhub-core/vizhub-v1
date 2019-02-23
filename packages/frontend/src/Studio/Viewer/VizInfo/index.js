import React from 'react';
import { withTheme } from 'styled-components';
import { format } from 'd3-format';
import { Wrapper, Title, ViewCount } from './styles';

export const formatViewCount = format(',');

export const VizInfo = withTheme(({ theme, title, viewCount }) => (
  <Wrapper>
    <Title>{title}</Title>
    <ViewCount>{formatViewCount(viewCount)} views</ViewCount>
  </Wrapper>
));
