import React from 'react';
import styled from 'styled-components';
import { timeFormat } from 'd3-time-format';
import logo from '../logo.svg';

const ViewerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

const headerHeight = 32;
const infoAvatarHeight = 64;

const Logo = styled.img`
  height: ${headerHeight}px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
`;

const HeaderAvatar = styled(Avatar)`
  height: ${headerHeight}px;
  cursor: pointer;
`;

const InfoAvatar = styled(Avatar)`
  height: ${infoAvatarHeight}px;
`;

const Runner = styled.div`
  height: 300px;
  background-color: #ddd;
`;

const InfoActions = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
`;

const Actions = () => <div>Actions</div>;

const avatarUrl = ({ gitHubId }, height) =>
  `https://avatars0.githubusercontent.com/u/${gitHubId}?s=${height * 2}&v=4`;

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

export const Viewer = () => {

  // TODO get these from context.
  const loggedInUser = {
    gitHubId: '68416',
    name: 'Curran Kelleher'
  };
  const ownerUser = loggedInUser;
  const publishDate = new Date();

  return (
    <ViewerWrapper>
      <Header>
        <Logo src={logo} />
        <HeaderAvatar src={avatarUrl(loggedInUser, headerHeight)} />
      </Header>
      <Runner />
      <InfoActions>
        <Info>
          <InfoAvatar src={avatarUrl(ownerUser, infoAvatarHeight)} />
          <OwnerNamePublishDate>
            <OwnerName>
              { ownerUser.name }
            </OwnerName>
            <PublishDate>
              { formatPublishDate(publishDate) }
            </PublishDate>
          </OwnerNamePublishDate>
        </Info>
        <Actions />
      </InfoActions>
    </ViewerWrapper>
  );
};
