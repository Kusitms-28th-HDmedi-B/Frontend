import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { currHeaderAtom } from '../../recoil/atom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import banner from '/assets/image/ValueBanner.png';
import lee from '/assets/image/ValueLee.png';
import lastBanner from '/assets/image/ValueLastBanner.png';
import { CardText, curtureCardText, secondContainerText } from './valueData';
import Card from '../../components/common/Card';
import { useNavigate } from 'react-router-dom';
import CurtureCard from './CultureCard';
import { Title } from '../info';

const Container = styled.div`
  width: 100vw;
`;
const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${banner}) no-repeat;
  background-size: cover;

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
  margin: 100px 0 100px 50px;
`;
// const GridContainer = styled.div`
//   /* margin: auto; */
//   width: 850px;
//   height: 850px;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr); /* 2개의 열 */
//   grid-template-rows: repeat(2, 1fr); /* 2개의 행 */
//   /* justify-items: center; //왼쪽을 맞추자 */
//   gap: 100px; //어렵다 이거..
// `;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: auto;
  gap: 50px;
  z-index: 2;
`;
const SecondContainer = styled.div`
  width: 100%;
  height: 400px; //일단!
  padding: 200px 0;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f4fafe;
  span {
    width: 160px;
    height: 160px;
    border-radius: 80px;
    background: url(${lee}) no-repeat;
    background-size: cover;
    display: inline-block;
  }
`;
const TextContainer = styled.div`
  position: relative;

  display: inline-block;
  margin-left: 100px;
  div {
    white-space: break-spaces;
  }
  div:nth-of-type(1) {
    position: relative;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 40px;
    color: #003fa3;
    z-index: 20;
  }
  div:nth-of-type(2) {
    line-height: 22px;
    font-weight: 500;
  }

  div:nth-of-type(3) {
    position: absolute;
    top: 10%;
    left: -10px;
    background-color: rgba(179, 218, 255, 1);
    width: 460px;
    height: 16px;
    border-radius: 8px;
    z-index: 10;
  }
`;
const ThirdContainer = styled.div`
  width: 70%;
  margin: 100px auto;
  height: 600px;
`;
const CurtureCardContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
`;
const FourthContainer = styled.div`
  width: 100%;
  height: 110vh;
  padding: 200px 0;
  margin: auto;
  background-color: #d9d9d9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url(${lastBanner}) no-repeat;
  background-size: cover;

  div:nth-of-type(1) {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 80px;
    color: white;
  }
  //채용공고 바로가기 버튼
  div:nth-of-type(2) {
    width: 250px;
    height: 60px;
    border-radius: 30px;
    background-color: white;

    font-weight: 600;
    text-align: center;
    line-height: 60px;
    color: #000;
    cursor: pointer;

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
  }
`;
const Value = () => {
  const setCurrHeader = useSetRecoilState(currHeaderAtom);
  const navigate = useNavigate();
  useEffect(() => setCurrHeader('transparent'));

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container>
      <Banner>사회의 문제를 함께 고민할 수 있는 인재를 찾습니다!</Banner>
      <FirstContainer>
        <SubTitle>함께 성장할 인재를 찾습니다.</SubTitle>
        <GridContainer>
          {CardText.map((textData, index) => (
            <Card
              url={`/assets/image/ValueCard${index}.png`}
              textData={textData}
              key={index}
            ></Card>
          ))}
        </GridContainer>
      </FirstContainer>
      <SecondContainer>
        <span></span>
        <TextContainer>
          <div>{secondContainerText[0]}</div>
          <div>{secondContainerText[1]}</div>
          <div></div>
        </TextContainer>
      </SecondContainer>
      <ThirdContainer>
        <Title>HDmedi의 문화</Title>
        <CurtureCardContainer>
          {curtureCardText.map((text, index) => (
            <CurtureCard
              text={text}
              imgUrl={`/assets/image/ValueCurtureCard${index}.png`}
              color={index === 1 ? '#019F96' : '#1C35B4'}
              delay={index * 300}
              key={index}
            ></CurtureCard>
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
