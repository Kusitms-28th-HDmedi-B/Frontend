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
            <Desktop>
              <ImageWrapper reverse={reverse}>
                <img src={imgSrc} alt="image" />
              </ImageWrapper>
              <TextContainer>
                <pre className="Title">{title}</pre>
                <pre className="Content">{content}</pre>
              </TextContainer>
            </Desktop>
            <Mobile>
              <TextContainer>
                <pre className="Title">{title}</pre>
                <pre className="Content">{content}</pre>
              </TextContainer>
              <ImageWrapper reverse={reverse}>
                <img src={imgSrc} alt="image" />
              </ImageWrapper>
            </Mobile>
          </>
        ) : (
          <>
            <Desktop>
              <TextContainer>
                <pre className="Title">{title}</pre>
                <pre className="Content">{content}</pre>
              </TextContainer>
              <ImageWrapper reverse={reverse}>
                <img src={imgSrc} alt="image" />
              </ImageWrapper>
            </Desktop>

            <Mobile>
              <TextContainer>
                <pre className="Title">{title}</pre>
                <pre className="Content">{content}</pre>
              </TextContainer>
              <ImageWrapper reverse={reverse}>
                <img src={imgSrc} alt="image" />
              </ImageWrapper>
            </Mobile>
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
 
  @media screen and (max-width: 500px) {
    padding: 50px 0;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Desktop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Mobile = styled.div`
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 20px;

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

  @media screen and (max-width: 500px) {
    margin-bottom: 30px;
    .Title {
      font-size: 16px;
      font-weight: 700;
      line-height: 26px; /* 260% */
    }

    .Content {
      font-size: 18px;
      font-weight: 600;
      line-height: 28px; /* 155.556% */
    }
  }
`;

interface ImageWrapperProps {
  reverse: boolean;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ reverse }) => (reverse ? 'flex-start' : 'flex-end')};


  width: 549px;
  height: 339px;
  flex-shrink: 0;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    justify-content: center;

    padding: 0 10px;
  }

  border-radius: 20px;
`;
