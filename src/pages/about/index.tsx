import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import MissionCard from './components/MissionCard';
import WorthCard from './components/WorthCard';
import { MissionData, StatisticData, WorthCardData } from './data';
import StatisticCard from './components/StatisticCard';
import ServiceCard from './components/ServiceCard';
import { currHeaderAtom } from '../../recoil/atom';
import { handleScroll } from './functions';

const About = () => {
  const [firstOpacity, setFirstOpacity] = useState<number>(1);
  const [secondOpacity, setSecondOpacity] = useState<number>(0);
  const setCurrHeader = useSetRecoilState(currHeaderAtom);

  useEffect(() => {
    setCurrHeader('transparent'), [];
    window.addEventListener(
      'scroll',
      handleScroll(setFirstOpacity, setSecondOpacity),
      { passive: true },
    );
    handleScroll(setFirstOpacity, setSecondOpacity)();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <Container>
      <FirstPageContainer style={{ opacity: `${firstOpacity}` }}>
        <MainTextContainer page={0}>
          <pre>{'에이치디메디는\n연결을 통해 건강한 사회를\n약속드립니다'}</pre>
        </MainTextContainer>
      </FirstPageContainer>

      <SecondPageContainer style={{ opacity: `${secondOpacity}` }}>
        <MainTextContainer page={1}>
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

  overflow-x: hidden;
`;

const FirstPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-color: #d9d9d9;

  &::before {
    content: '';
    background-image: url('/assets/image/about/about-image1.svg');
    background-size: cover;
    opacity: 0.7;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const PaddingContainer = styled.div`
  width: 100%;
  height: 300vh;
`;

interface MainContainer {
  page: number;
}

const MainTextContainer = styled.div<MainContainer>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70%;
  margin: auto;

  z-index: 2;

  pre {
    color: #191919;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    line-height: 86px; /* 172% */

    white-space: pre-wrap;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 20px;

    pre {
      text-align: center;
      font-size: ${({ page }) => (page === 0 ? '24px' : '16px')};
      font-style: normal;
      font-weight: 700;
      line-height: 34px; /* 141.667% */
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 20px;

    pre {
      text-align: center;
      font-size: ${({ page }) => (page === 0 ? '24px' : '16px')};
      font-style: normal;
      font-weight: 700;
      line-height: 34px; /* 141.667% */
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 20px;

    pre {
      text-align: center;
      font-size: ${({ page }) => (page === 0 ? '24px' : '16px')};
      font-style: normal;
      font-weight: 700;
      line-height: 34px; /* 141.667% */
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 20px;

    pre {
      text-align: center;
      font-size: ${({ page }) => (page === 0 ? '24px' : '16px')};
      font-style: normal;
      font-weight: 700;
      line-height: 34px; /* 141.667% */
    }
  }
`;

const SecondPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background: #eceef6;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const ThirdPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 100px 0 350px;
`;

const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  margin: auto;

  background-image: url('/assets/image/about/about-image2.svg');
  background-size: cover;

  gap: 100px;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 20px;
    gap: 60px;
  }
`;

const FourthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 50px;
  background: #d8dfec;
`;

const FifthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 0;
  @media screen and (max-width: 500px) {
    padding: 50px 0;
  }
`;
