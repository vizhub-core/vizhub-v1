import React from 'react';
import { timeFormat } from 'd3-time-format';
import { format } from 'd3-format';
import { avatarUrl } from '../avatarUrl';
import {
  InfoWrapper,
  InfoAvatar,
  infoAvatarHeight,
  Owner,
  OwnerNamePublishDate,
  OwnerName,
  PublishDate,
  Title,
  ViewCount
} from './styles';

const formatPublishDate = timeFormat('%B %d, %Y');
export const formatViewCount = format(',');

export const Info = ({ title, viewCount, user, publishDate }) => (
  <InfoWrapper>
    <Title>{title}</Title>
    <ViewCount>{formatViewCount(viewCount)} views</ViewCount>
    <Owner>
      <InfoAvatar src={avatarUrl(user, infoAvatarHeight)} />
      <OwnerNamePublishDate>
        <OwnerName>{user.name}</OwnerName>
        <PublishDate>{formatPublishDate(publishDate)}</PublishDate>
      </OwnerNamePublishDate>
    </Owner>
  </InfoWrapper>
);
