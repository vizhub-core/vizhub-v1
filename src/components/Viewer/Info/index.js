import React from 'react';
import {
  InfoWrapper,
  InfoAvatar,
  infoAvatarHeight,
  Owner,
  OwnerNamePublishDate,
  OwnerName,
  PublishDate,
  Title
} from './styles';
import { timeFormat } from 'd3-time-format';
import { avatarUrl } from '../avatarUrl';

const formatPublishDate = timeFormat('%B %d, %Y');

export const Info = ({ title, user, publishDate }) => (
  <InfoWrapper>
    <Title>{title}</Title>
    <Owner>
      <InfoAvatar src={avatarUrl(user, infoAvatarHeight)} />
      <OwnerNamePublishDate>
        <OwnerName>{user.name}</OwnerName>
        <PublishDate>{formatPublishDate(publishDate)}</PublishDate>
      </OwnerNamePublishDate>
    </Owner>
  </InfoWrapper>
);
