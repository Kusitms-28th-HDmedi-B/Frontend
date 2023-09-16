import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  imgSrc: string;
  reverse: boolean;
  animation: string;
}

const StatisticCard: React.FC<Props> = ({
  title,
  imgSrc,
  reverse,
  animation,
}) => {
  return (
    <Container>
      <InnerContainer
        data-aos={animation}
        data-aos-delay="30"
        data-aos-easing="ease-in-out-back"
      >
        {reverse ? (
          <>
            <ImageWrapper>
              <img src={imgSrc} alt="image" />
            </ImageWrapper>
            <Title>
              <pre>{title}</pre>
            </Title>
          </>
        ) : (
          <>
            <Title>
              <pre>{title}</pre>
            </Title>
            <ImageWrapper>
              <img src={imgSrc} alt="image" />
            </ImageWrapper>
          </>
        )}
      </InnerContainer>
    </Container>
  );
};

export default StatisticCard;

const Container = styled.div`
  width: 100%;
  padding: 160px 0;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 70%;
  margin: auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  pre {
    color: #fff;
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    line-height: 86px; /* 172% */
  }
`;

const ImageWrapper = styled.div`
  width: 700px;
  height: 370px;
  flex-shrink: 0;

  border-radius: 20px;
  background: #afafaf;
`;
