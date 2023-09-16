import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  imgSrc: string;
  reverse: boolean;
  animation: string;
  backgroundUrl?: string | undefined;
}

const WorthCard: React.FC<Props> = ({
  title,
  imgSrc,
  reverse,
  animation,
  backgroundUrl,
}) => {
  return (
    <Container reverse={reverse}>
      <img
        className="background"
        src={backgroundUrl}
        alt="back"
        style={{ opacity: '0.6' }}
      />
      <InnerContainer data-aos={animation}>
        {reverse ? (
          <>
            <Title>
              <pre>{title}</pre>
            </Title>
            <ImageWrapper>
              <img src={imgSrc} alt="image" />
            </ImageWrapper>
          </>
        ) : (
          <>
            <ImageWrapper>
              <img src={imgSrc} alt="image" />
            </ImageWrapper>
            <Title>
              <pre>{title}</pre>
            </Title>
          </>
        )}
      </InnerContainer>
    </Container>
  );
};

export default WorthCard;

interface ContainerType {
  reverse: boolean;
}
const Container = styled.div<ContainerType>`
  width: 100%;
  position: relative;
  height: 598px;

  @media screen and (max-width: 500px) {
    height: auto;
  }
  .background {
    width: 100%;

    z-index: 2;

    position: absolute;
    bottom: 0;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 70%;
  margin: auto;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;

  pre {
    color: #4a81e5;
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    line-height: 86px; /* 156.364% */

    @media screen and (max-width: 500px) {
      font-size: 30px;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 516px;
  height: 370px;
  flex-shrink: 0;

  @media screen and (max-width: 500px) {
    width: 70%;
  }

  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`;
