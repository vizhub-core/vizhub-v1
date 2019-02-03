import React from 'react';
import * as S from './styles'
import { timeFormat } from 'd3-time-format';
import { avatarUrl } from '../avatarUrl';

const formatPublishDate = timeFormat('%B %d, %Y');

export const Info = ({ user, publishDate }) => (
  <S.InfoWrapper>
    <S.InfoAvatar src={avatarUrl(user, S.infoAvatarHeight)} />
    <S.OwnerNamePublishDate>
      <S.OwnerName>
        { user.name }
      </S.OwnerName>
      <S.PublishDate>
        { formatPublishDate(publishDate) }
      </S.PublishDate>
    </S.OwnerNamePublishDate>
  </S.InfoWrapper>
)
