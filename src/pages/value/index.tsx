import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { currHeaderAtom } from '../../recoil/atom';
import { useEffect } from 'react';

import banner from '../../../public/assets/image/ValueBanner.png';
import cardImgUrl from '../../../public/assets/image/ValueCard.png';
import curtureCardImgUrl from '../../../public/assets/image/ValueCurtureCard.png';
import { CardText, curtureCardText, secondContainerText } from './valueData';
import Card from '../../components/common/Card';
import { useNavigate } from 'react-router-dom';
import CurtureCard from './CultureCard';
import { Title } from '../info';

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
  color: #eef7ff;
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
const ThirdContainer = styled.div`
  width: 70%;
  margin: auto;
  height: 600px;
`;
const CurtureCardContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;
const FourthContainer = styled.div`
  width: 100%;
  height: 600px;
  padding: 200px 0;
  margin: auto;
  background-color: #d9d9d9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div:nth-of-type(1) {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 80px;
  }
  div:nth-of-type(2) {
    width: 250px;
    height: 60px;
    border-radius: 30px;
    background-color: #6a6a6a;

    text-align: center;
    line-height: 60px;
    color: white;
    cursor: pointer;
  }
`;
const Value = () => {
  const setCurrHeader = useSetRecoilState(currHeaderAtom);
  const navigate = useNavigate();
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
      <ThirdContainer>
        <Title>HD메디의 문화</Title>
        <CurtureCardContainer>
          {curtureCardText.map((text) => (
            <CurtureCard text={text} imgUrl={curtureCardImgUrl}></CurtureCard>
          ))}
        </CurtureCardContainer>
      </ThirdContainer>
      <FourthContainer>
        <div>우리와 함께 더 좋은 세상을 만들어요</div>
        <div onClick={() => navigate('../recruit')}>채용 공고 바로가기</div>
      </FourthContainer>
    </Container>
  );
};

export default Value;
