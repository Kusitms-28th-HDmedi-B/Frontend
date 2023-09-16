import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  link: string;
  imgSrc: string;
}

const AppCard: React.FC<Props> = ({ link, imgSrc }) => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(link);
  }, []);

  return (
    <Container>
      <img src={imgSrc} alt="image" />
      <Button onClick={onClick}>
        <pre>서비스 보기</pre>
      </Button>
    </Container>
  );
};

export default AppCard;

const Container = styled.div`
  width: 70%;
  height: 346px;
  margin: auto;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  border-radius: 20px;
  background: #d9d9d9;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 244px;
  height: 62px;
  flex-shrink: 0;

  position: absolute;
  bottom: 80px;

  cursor: pointer;
  z-index: 2;

  border-radius: 31px;
  background: rgba(100, 100, 100, 0.4);

  pre {
    font-weight: 700;
    line-height: 16px; /* 100% */
  }

  /* 둥둥 떠있게 하기 */
  animation: float 3s ease-in-out infinite;
  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;
