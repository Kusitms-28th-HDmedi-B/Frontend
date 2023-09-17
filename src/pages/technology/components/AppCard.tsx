import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AppCardType } from '../data';

const AppCard: React.FC<AppCardType> = ({
  title,
  subtitle,
  link,
  fontColor,
  logo,
  backgroundColor,
  backgroundUrl,
  marginTop,
}) => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(link);
  }, []);

  return (
    <Container backgroundColor={backgroundColor}>
      <TextContainer>
        {logo && <img src={logo} alt="logo" />}
        {title && (
          <Title>
            <pre style={{ color: `${fontColor}` }}>{title}</pre>
          </Title>
        )}
        {subtitle && (
          <SubTitle style={{ color: `${fontColor}` }} marginTop={marginTop}>
            <pre>{subtitle}</pre>
          </SubTitle>
        )}
      </TextContainer>
      <img src={backgroundUrl} style={{ width: '50%' }} />
      <ButtonWrapper>
        <Button onClick={onClick}>
          <pre>서비스 보기</pre>
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default AppCard;

interface ContainerProps {
  backgroundColor: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;

  position: relative;

  width: 70%;
  height: 346px;
  margin: auto;
  flex-shrink: 0;

  border-radius: 20px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

const TextContainer = styled.div`
  display: flex;
  padding: 20px;

  color: #1f64d1;
  width: 100%;

  img {
    width: 142.2px;
    height: 90px;
    flex-shrink: 0;
  }

  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  padding: 20px 10px;
  pre {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px; /* 112.5% */
    @media screen and (max-width: 500px) {
      font-size: 14px;
      margin-bottom: 7px;
    }
  }
`;

interface SubTitleProps {
  marginTop: string;
}

const SubTitle = styled.div<SubTitleProps>`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px; /* 150% */

  margin-top: ${({ marginTop }) => marginTop};

  @media screen and (max-width: 500px) {
    font-size: 13.44px;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  bottom: 50px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 244px;
  height: 62px;
  flex-shrink: 0;

  cursor: pointer;
  z-index: 2;

  border-radius: 31px;
  border: 2px solid #0070ed;
  background: #fff;

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
