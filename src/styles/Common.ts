import styled, { keyframes } from 'styled-components';

export const BlackBackGround = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1100;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
`;

const spin = keyframes`
to{
  transform: rotate(360deg);
}`;

export const LoadingSpinner = styled.div`
  display: block;
  position: absolute;
  left: 50%;
  top: 30%;
  width: 50px;
  height: 50px;
  border: 4px solid ${props => props.theme.palette.blackColor};
  border-radius: 50%;
  border-top-color: ${props => props.theme.palette.blueColor};
  animation: ${spin} 1s linear infinite;
`;
