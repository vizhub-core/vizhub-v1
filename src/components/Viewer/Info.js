import React from 'react';
import styled from 'styled-components';
import { timeFormat } from 'd3-time-format';
import { InfoAvatar, avatarUrl } from './Avatar';
import { infoAvatarHeight } from './constants';

const InfoWrapper = styled.div`
  display: flex;
`;

const OwnerNamePublishDate = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OwnerName = styled.div`
  font-weight: bold;
  line-height: 1.6em;
`;

const PublishDate = styled.div`
  color: #11111199;
  font-size: 0.9em;
`;


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
