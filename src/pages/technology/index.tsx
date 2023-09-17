import { useState, useEffect, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { currHeaderAtom } from '../../recoil/atom';
import AppCard from './components/AppCard';
import Card from '../../components/common/Card';
import { CardText } from './data';
import cardImgUrl from '/assets/image/ValueCard1.png';
import ArrowImage from '/assets/image/ArrowImage.svg';
import AIImage from '/assets/image/AIImage.svg';
import CustomizedInformation from '/assets/image/CustomizedInformation.svg';
import CloudService from '/assets/image/CloudService.svg';

const Technology = () => {
  const [opacity, setOpacity] = useState<number>(1);
  const setCurrHeader = useSetRecoilState(currHeaderAtom);

  const handleScroll = useCallback(() => {
    const currentScrollY: number = window.scrollY;
    const innerHeight = window.innerHeight;

    if (currentScrollY <= innerHeight) {
      setOpacity(1 - (1 / innerHeight) * currentScrollY);
    } else {
      setOpacity(0);
    }
  }, [opacity]);

  useEffect(() => setCurrHeader('transparent'), []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <Container>
      <FirstPageContainer style={{ opacity: `${opacity}` }}>
        <MainTextContainer>
          <pre>
            {'에이치디메디만의 기술력으로\n고객 맞춤형 서비스를 제공합니다.'}
          </pre>
        </MainTextContainer>
      </FirstPageContainer>

      <PaddingContainer />
      <SecondPageContainer>
        <img
          src={CloudService}
          alt="cloud"
          style={{ width: '30%', marginBottom: '100px' }}
          data-aos="fade-up"
        />
        <SecondPageImageContainer>
          <BackgroundImage src={ArrowImage} alt="background" />
          <InnerContainer>
            <pre data-aos="fade-up">
              {'클라우드 인프라를 통한\nMEGA DATA 관리'}
            </pre>
            <img src={AIImage} alt="ai" data-aos="fade-right" />
            <pre data-aos="fade-up">
              {'클라우드 인프라를 통한\nMEGA DATA 관리'}
            </pre>
            <img src={CustomizedInformation} alt="ci" data-aos="fade-left" />
            <pre data-aos="fade-up">
              {'클라우드 인프라를 통한\nMEGA DATA 관리'}
            </pre>
          </InnerContainer>
        </SecondPageImageContainer>
      </SecondPageContainer>

      <ThirdPageContainer>
        <GridContainer>
          {CardText.map((data) => (
            <div data-aos="fade-up" data-aos-easing="Ease out Back">
              <Card url={cardImgUrl} textData={data} />
            </div>
          ))}
        </GridContainer>
      </ThirdPageContainer>

      <FourthPageContainer>
        <AppCardContainer>
          <AppCard link="/service" imgSrc="" />
          <AppCard link="/service" imgSrc="" />
        </AppCardContainer>
      </FourthPageContainer>
    </Container>
  );
};

export default Technology;

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
  height: 200vh;
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
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const SecondPageImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  width: 70%;
  margin: auto;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  width: 30%;
  height: 94.3%;
  padding: 10px 0;

  pre {
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 700;
  }

  img {
    width: 100%;
    height: 21.06%;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  margin: auto;
`;

const ThirdPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 100px 0;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;

  width: 70%;
  margin: auto;
  gap: 30px;
  z-index: 2;
`;

const FourthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 100px 0;
`;

const AppCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  margin-bottom: 65px;
`;
