import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  content: string;
  imgSrc: string;
  reverse: boolean;
  animation: string;
}

const MissionCard: React.FC<Props> = ({
  title,
  content,
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
            <TextContainer>
              <pre className="Title">{title}</pre>
              <pre className="Content">{content}</pre>
            </TextContainer>
          </>
        ) : (
          <>
            <TextContainer>
              <pre className="Title">{title}</pre>
              <pre className="Content">{content}</pre>
            </TextContainer>
            <ImageWrapper>
              <img src={imgSrc} alt="image" />
            </ImageWrapper>
          </>
        )}
      </InnerContainer>
    </Container>
  );
};

export default MissionCard;

const Container = styled.div`
  width: 100%;
  padding: 114px 0;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 70%;
  margin: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .Title {
    font-size: 26px;
    font-weight: 700;
    line-height: 26px; /* 100% */
  }

  .Content {
    color: #000;
    font-size: 36px;
    font-weight: 600;
    line-height: 56px; /* 155.556% */
  }
`;

const ImageWrapper = styled.div`
  width: 549px;
  height: 339px;
  flex-shrink: 0;

  border-radius: 20px;
  background: #d9d9d9;
`;
