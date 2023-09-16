import { styled } from 'styled-components';

const Loading = () => (
  <LoadingWrapper>
    <SpinnerBlue />
  </LoadingWrapper>
);

export default Loading;

export const LoadingGrey = () => (
  <LoadingWrapper>
    <SpinnerGray />
  </LoadingWrapper>
);

const LoadingWrapper = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SpinnerBlue = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3); /* Border color of the spinner */
  border-top: 4px solid #cde6ff; /* Color of the spinner */
  border-right: 4px solid #cde6ff; /* Color of the spinner */
  border-bottom: 4px solid #cde6ff; /* Color of the spinner */
  border-radius: 50%; /* Makes it a circle */
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite; /* Spinning animation */
`;

const SpinnerGray = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #d9d9d9;
  border-right: 4px solid #d9d9d9;
  border-bottom: 4px solid #d9d9d9;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
`;
