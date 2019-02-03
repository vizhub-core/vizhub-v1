import React from 'react';
import {
  InfoWrapper,
  InfoAvatar,
  infoAvatarHeight,
  OwnerNamePublishDate,
  OwnerName,
  PublishDate,
} from './styles';
import { timeFormat } from 'd3-time-format';
import { avatarUrl } from '../avatarUrl';

const formatPublishDate = timeFormat('%B %d, %Y');

export const Info = ({ user, publishDate }) => (
  <InfoWrapper>
    <InfoAvatar src={avatarUrl(user, infoAvatarHeight)} />
    <OwnerNamePublishDate>
      <OwnerName>
        { user.name }
      </OwnerName>
      <PublishDate>
        { formatPublishDate(publishDate) }
      </PublishDate>
    </OwnerNamePublishDate>
  </InfoWrapper>
)
