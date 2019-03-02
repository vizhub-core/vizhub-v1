import React from 'react';
import { ArrowRightSVG, ArrowDownSVG } from '../../../icons';
import { Wrapper, Header, HeaderIcon, HeaderTitle, Body } from './styles';

export const Section = ({ id, title, children, isOpen, onToggle }) => (
  <Wrapper>
    <Header onClick={() => onToggle(id)}>
      <HeaderIcon>{isOpen ? <ArrowDownSVG /> : <ArrowRightSVG />}</HeaderIcon>
      <HeaderTitle>{title}</HeaderTitle>
    </Header>
    <Body>{children}</Body>
  </Wrapper>
);
