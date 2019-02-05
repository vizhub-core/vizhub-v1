import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './svg/logo.svg';

const SpinningLogoWrapper = styled.div`
  background-color: #4567aa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinningImage = styled.img`
  animation: ${spin} infinite 50s linear;
  height: 25vmin;
`;

const SpinningLogo = () => <SpinningImage src={logo} />;

export const LoadingScreen = () => (
  <SpinningLogoWrapper>
    <SpinningLogo />
  </SpinningLogoWrapper>
);
