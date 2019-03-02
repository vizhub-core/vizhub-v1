import React from 'react';
import { ArrowRightSVG, ArrowDownSVG } from '../../../icons';
import { Wrapper, Header, HeaderIcon, HeaderTitle, Body } from './styles';

export const Section = ({ title, children, isOpen, onToggleOpen }) => (
  <Wrapper>
    <Header onClick={onToggleOpen}>
      <HeaderIcon>{isOpen ? <ArrowDownSVG /> : <ArrowRightSVG />}</HeaderIcon>
      <HeaderTitle>{title}</HeaderTitle>
    </Header>
    <Body>{children}</Body>
  </Wrapper>
);
