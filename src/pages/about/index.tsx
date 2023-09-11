import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import MissionCard from './components/MissionCard';
import WorthCard from './components/WorthCard';
import { MissionData, StatisticData, WorthCardData } from './data';
import StatisticCard from './components/StatisticCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from './components/ServiceCard';

const About = () => {
  const [firstOpacity, setFirstOpacity] = useState<number>(1);
  const [secondOpacity, setSecondOpacity] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const currentScrollY: number = window.scrollY;
    const innerHeight = window.innerHeight;

    if (currentScrollY <= innerHeight) {
      setFirstOpacity(1 - (1 / innerHeight) * currentScrollY);
      setSecondOpacity((1 / innerHeight) * currentScrollY);
    } else if (
      innerHeight <= currentScrollY &&
      currentScrollY <= 2 * innerHeight
    ) {
      setFirstOpacity(0);
      setSecondOpacity(2 - (1 / innerHeight) * currentScrollY);
    } else {
      setFirstOpacity(0);
      setSecondOpacity(0);
    }
  }, [firstOpacity, secondOpacity]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    handleScroll();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <Container>
      <FirstPageContainer style={{ opacity: `${firstOpacity}` }}>
        <MainTextContainer>
          <pre>기업 소개 메인 문장</pre>
        </MainTextContainer>
      </FirstPageContainer>

      <SecondPageContainer style={{ opacity: `${secondOpacity}` }}>
        <MainTextContainer>
          <pre>{`HDmedi는 의약품 부작용을 경험한 대표 ‘이정의’의 실제 사례를 바탕으로\n사용자 맞춤형 의료 정보를 제공하기 위해 탄생했습니다.`}</pre>
        </MainTextContainer>
      </SecondPageContainer>

      <PaddingContainer />

      <ThirdPageContainer>
        <MissionContainer>
          {MissionData.map((data) => (
            <MissionCard {...data} key={data.title} />
          ))}
        </MissionContainer>
      </ThirdPageContainer>

      <FourthPageContainer>
        {WorthCardData.map((data) => (
          <WorthCard {...data} key={data.title} />
        ))}
      </FourthPageContainer>

      <FifthPageContainer>
        {StatisticData.map((data) => (
          <StatisticCard
            {...data}
            key={data.title}
            animation={data.animation}
          />
        ))}
      </FifthPageContainer>

      <ServiceCard />
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
`;

const FirstPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-color: #d9d9d9;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const PaddingContainer = styled.div`
  width: 100%;
  height: 300vh;
`;

const MainTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70%;
  margin: auto;

  pre {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    line-height: 86px; /* 172% */

    white-space: pre-wrap;
  }
`;

const SecondPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const ThirdPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 100px;
`;

const FourthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FifthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
