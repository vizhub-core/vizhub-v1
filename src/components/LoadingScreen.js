import React from 'react';
import logo from '../logo.svg';
import styled, { keyframes } from 'styled-components';

const SpinningLogoContainer = styled.div`
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
  height: 30vmin;
`

const SpinningLogo = () => <SpinningImage src={logo} />;

export const LoadingScreen = () => (
  <SpinningLogoContainer>
    <SpinningLogo />
  </SpinningLogoContainer>
)
