import React from 'react';
import styled from 'styled-components';
import { Function } from '../data';

const FunctionCard: React.FC<Function> = ({
  imgSrc,
  customer,
  contents,
  reverse,
}) => {
  return (
    <Container data-aos="fade-up">
      {/* 상단 이미지 */}
      <img src={imgSrc} />
      <Title>
        {/* 제목 */}
        <pre>{customer}</pre>
      </Title>
      <MainContentContainer>
        {contents.map(({ src, message, list }) => (
          <Element key={message}>
            {reverse ? (
              <>
                <TextContainer>
                  <pre>{message}</pre>
                  {list && (
                    <ul>
                      {list.map((l, idx) => (
                        <List key={idx}>{l}</List>
                      ))}
                    </ul>
                  )}
                </TextContainer>
                <img src={src} alt="image" />
              </>
            ) : (
              <>
                <img src={src} alt="image" />
                <pre>{message}</pre>
              </>
            )}
          </Element>
        ))}
      </MainContentContainer>
    </Container>
  );
};

export default FunctionCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 39px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 394px;
  height: 97px;
  flex-shrink: 0;

  border-radius: 40px;
  background: #2a5ba9;

  pre {
    color: #fff;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 56px; /* 112% */
  }
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 56px;

  border-radius: 74px;
  background: #f5f5f5;

  padding: 56px 43px;
`;

const Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;

  img {
    width: 50px;
    height: 50px;
  }

  pre {
    text-align: center;
    font-size: 23px;
    font-weight: 700;
    line-height: 56px; /* 243.478% */
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const List = styled.li`
  color: #626262;
  font-size: 16px;
  font-weight: 700;
  line-height: 56px; /* 280% */

  list-style-type: circle;
`;
