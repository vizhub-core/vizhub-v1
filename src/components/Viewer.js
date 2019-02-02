import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const ViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

const headerHeight = '32px'

const Logo = styled.img`
  height: ${headerHeight};
`;

const Avatar = styled.img`
  height: ${headerHeight};
  border-radius: 50%;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
`;

// TODO get from context.
const avatarUrl = 'https://avatars0.githubusercontent.com/u/68416?s=64&v=4';

export const Viewer = () => (
  <Header>
    <Logo src={logo} />
    <Avatar src={avatarUrl} />
  </Header>
);
