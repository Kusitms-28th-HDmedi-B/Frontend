import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  imgSrc: string;
  reverse: boolean;
  animation: string;
}

const WorthCard: React.FC<Props> = ({ title, imgSrc, reverse, animation }) => {
  return (
    <Container reverse={reverse}>
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
            <Title>{title}</Title>
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
  background-color: ${({ reverse }) => (reverse ? '#FFF' : '#D9D9D9')};
  padding: 114px 0;
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

  text-align: center;
  font-size: 38px;
  font-weight: 700;
  line-height: 86px; /* 156.364% */
`;

const ImageWrapper = styled.div`
  width: 516px;
  height: 370px;
  flex-shrink: 0;

  border-radius: 20px;
  background: #afafaf;
`;
