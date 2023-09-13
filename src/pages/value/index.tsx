import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { currHeaderAtom } from '../../recoil/atom';
import { useEffect } from 'react';

import banner from '../../../public/assets/image/ValueBannerEx.png';
import cardImgUrl from '../../../public/assets/image/ValueCardEx.jpg';
import { CardText, secondContainerText } from './valueData';
import Card from '../../components/common/Card';

const Container = styled.div`
  width: 100vw;
  margin-bottom: 100px;
`;
const Banner = styled.div`
  width: 100%;
  height: 700px;
  background: url(${banner}) no-repeat center/cover;

  text-align: center;
  line-height: 700px;
  font-size: 50px;
  font-weight: 700;
`;
const FirstContainer = styled.div`
  width: 70%;
  height: 1500px; //일단!
  padding: 200px 0;
  margin: auto;
  /* border: 1px solid red; */
`;
const SubTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin: 50px 0;
`;
const GridContainer = styled.div`
  width: 850px;
  height: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2개의 열 */
  grid-template-rows: repeat(2, 1fr); /* 2개의 행 */
  /* justify-items: center; */ //왼쪽을 맞추자
  gap: 50px; //어렵다 이거..
`;
const SecondContainer = styled.div`
  width: 100%;
  height: 400px; //일단!
  padding: 200px 0;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #d9d9d9;
  span {
    width: 160px;
    height: 160px;
    border-radius: 80px;
    background: url(${cardImgUrl}) no-repeat;
    background-size: cover;
    display: inline-block;
  }
`;
const TextContainer = styled.div`
  display: inline-block;
  margin-left: 100px;
  div {
    white-space: break-spaces;
  }
  div:nth-of-type(1) {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  div:nth-of-type(2) {
    line-height: 20px;
  }
`;
const Value = () => {
  const setCurrHeader = useSetRecoilState(currHeaderAtom);

  useEffect(() => setCurrHeader('transparent'));
  return (
    <Container>
      <Banner>사회의 문제를 함게 고민할 수 있는 인재를 찾습니다!</Banner>
      <FirstContainer>
        <SubTitle>함께 성장할 인재를 찾습니다.</SubTitle>
        <GridContainer>
          {CardText.map((textData, index) => (
            <Card url={cardImgUrl} textData={textData} key={index}></Card>
          ))}
        </GridContainer>
      </FirstContainer>
      <SecondContainer>
        <span></span>
        <TextContainer>
          <div>{secondContainerText[0]}</div>
          <div>{secondContainerText[1]}</div>
        </TextContainer>
      </SecondContainer>
    </Container>
  );
};

export default Value;
