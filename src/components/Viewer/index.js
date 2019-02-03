import React from 'react';
import logo from '../../svg/logo.svg';
import { Info } from './Info';
import { avatarUrl } from './avatarUrl';
import * as S from './styles'

const Actions = () => <div>Actions</div>;

export const Viewer = () => {

  // TODO get these from context.
  const loggedInUser = {
    gitHubId: '68416',
    name: 'Curran Kelleher'
  };
  const ownerUser = loggedInUser;
  const publishDate = new Date();

  return (
    <S.ViewerWrapper>
      <S.Header>
        <S.Logo src={logo} />
        <S.HeaderAvatar src={avatarUrl(loggedInUser, S.headerHeight)} />
      </S.Header>
      <S.Runner />
      <S.InfoActions>
        <Info user={ownerUser} publishDate={publishDate} />
        <Actions />
      </S.InfoActions>
    </S.ViewerWrapper>
  );
};
