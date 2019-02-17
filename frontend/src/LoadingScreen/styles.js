import styled, { keyframes } from 'styled-components';

export const LoadingScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const spin = keyframes`
  from { transform: rotate(-5deg) scale(0.2); }
  to { transform: rotate(360deg) scale(1); }
`;

export const SpinningImage = styled.img`
  animation: ${spin} infinite 50s linear;
  height: 25vmin;
`;
