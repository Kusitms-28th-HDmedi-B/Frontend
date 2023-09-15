import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { currHeaderAtom } from '../../../recoil/atom';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Youtube, { YouTubeProps } from 'react-youtube';

import UppLogo from '/assets/logo/upp-logo.svg';
import MedicationImage from '/assets/image/medication.svg';
import FunctionCard from './components/FunctionCard';
import UIUX from '/assets/image/UIUXImage.svg';

import { downloadData, functionCardData, statisticData } from './data';
import { handleScroll } from './functions';

const Upp = () => {
  const [firstOpacity, setFirstOpacity] = useState<number>(0);
  const [secondOpacity, setSecondOpacity] = useState<number>(0);
  const setCurrHeader = useSetRecoilState(currHeaderAtom);

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
      modestbranding: 1,
    },
  };

  const onPlayerEnd = (e: any) => {
    e.target.playVideo();
  };

  useEffect(() => {
    setCurrHeader('transparent');
    window.addEventListener(
      'scroll',
      handleScroll(setFirstOpacity, setSecondOpacity),
      { passive: true },
    );
    handleScroll(setFirstOpacity, setSecondOpacity)();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll(setFirstOpacity, setSecondOpacity),
      );
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <Container>
      <FirstPageContainer>
        <MainContainer>
          <LogoVideoContainer>
            <LeftBox>
              <pre>{'어디가 아프세요? 어프'}</pre>
              <img src={UppLogo} alt="logo" />
            </LeftBox>
            <Video>
              <Youtube videoId="T7MTZlGlH8Q" opts={opts} onEnd={onPlayerEnd} />
            </Video>
          </LogoVideoContainer>
        </MainContainer>
      </FirstPageContainer>

      <PaddingContainer />

      <SecondPageContainer style={{ opacity: firstOpacity }}>
        <SecondPageMainContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <StatisticText>
              <div>
                <pre>
                  <UnderLine color={'#b6cfff'}>{'매년'}</UnderLine>
                </pre>
              </div>
            </StatisticText>
            <StatisticBox>
              {statisticData.map(({ title, content }) => (
                <Statistic key={title}>
                  <pre className="title">{title}</pre>
                  <pre className="content">{content}</pre>
                </Statistic>
              ))}
            </StatisticBox>
          </div>
          <SecondPageBottomText>
            <pre>
              <UnderLine color={'#b6cfff'}>
                {'이 발생하고 있다는 것을 알고 계시나요?'}
              </UnderLine>
            </pre>
          </SecondPageBottomText>
        </SecondPageMainContainer>
      </SecondPageContainer>

      <SecondPageContainer style={{ opacity: secondOpacity }}>
        <SecondPageText style={{ position: 'relative' }}>
          <pre>
            {'국내 최초 비대면 복약지도 서비스 ‘어프’는\n'}
            <UnderLine color={'#FFC38A'}>
              {'잘못된 의약품 복용 습관을 개선'}
            </UnderLine>
            {'하고'}{' '}
            <UnderLine color={'#FFC38A'}>{'올바른 복약 생활'}</UnderLine>
            {'을 돕습니다.'}
          </pre>
        </SecondPageText>
      </SecondPageContainer>

      <ThirdPageContainer>
        <MediImageContainer>
          <pre>
            {'‘어프’는 지역 약사와 환자를 연결해 건강한 지역사회를 만듭니다'}
          </pre>
          <img src={MedicationImage} alt="medi" />
        </MediImageContainer>
      </ThirdPageContainer>

      <FourthPageContainer>
        <UppTitleContainer>
          <UppTitle>
            <img src={UppLogo} alt="logo" />
            <pre>{'는 어떤 서비스인가요?'}</pre>
          </UppTitle>
        </UppTitleContainer>
        <ServiceContainer>
          {functionCardData.map((data) => (
            <FunctionCard {...data} key={data.customer} />
          ))}
        </ServiceContainer>
      </FourthPageContainer>

      <UIUXImage data-aos="slide-up" data-aos-easing="Ease in-out Quart">
        <img src={UIUX} alt="ui/ux" />
      </UIUXImage>

      <FifthPageContainer>
        <AppDownloaderContainer>
          <pre>{'어프와 함께 건강한 의약품 복용 습관 만들어가요!'}</pre>
          <DownloadButtons>
            {downloadData.map(({ text, link }, idx) => (
              <DownloadButton
                data-aos="slide-up"
                data-aos-duration={1200 + 500 * idx}
                data-aos-offset={150}
                data-aos-easing="Ease in-out Back"
                key={link}
              >
                <a href={link} target="_blank">
                  <pre>{text}</pre>
                </a>
              </DownloadButton>
            ))}
          </DownloadButtons>
        </AppDownloaderContainer>
      </FifthPageContainer>
    </Container>
  );
};

export default Upp;

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
`;

const MainContainer = styled.div`
  width: 70%;
  margin: auto;
`;

const LogoVideoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
`;

const Video = styled.div`
  flex-shrink: 0;

  iframe {
    border-radius: 50px;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 400px;
    /* height: 316px; */
    flex-shrink: 0;

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

  pre {
    font-size: 38px;
    font-weight: 700;
    line-height: 86px; /* 172% */
  }
`;

const PaddingContainer = styled.div`
  width: 100%;
  height: 600vh;
`;

const SecondPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const SecondPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 70%;
  margin: auto;

  gap: 40px;
`;

const SecondPageBottomText = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 60px;

  position: relative;
  pre {
    color: #151515;
    font-size: 38px;
    font-weight: 700;
    line-height: 73.471px; /* 146.941% */
  }
`;

const StatisticText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  pre {
    color: #151515;
    font-size: 50px;
    font-weight: 700;
    line-height: 73.471px; /* 146.941% */
  }

  padding: 0 130px;
`;

const StatisticBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 240px;
  padding: 45px 0 50px;

  border-radius: 20px;
  background: #cde6ff;

  .title {
    color: #002177;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 42.465px; /* 176.936% */
  }

  .content {
    color: #002177;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 42.465px; /* 84.929% */
  }
`;

const SecondPageText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70%;
  height: 138px;
  margin: auto;
  flex-shrink: 0;

  border-radius: 50px;

  pre {
    color: #151515;
    font-size: 38px;
    font-weight: 700;
    line-height: 73.471px; /* 146.941% */
  }
`;

interface UnderLineType {
  color: string;
}

const UnderLine = styled.span<UnderLineType>`
  background: linear-gradient(
    to top,
    ${({ color }) => color} 35%,
    transparent 0%
  );
`;

const ThirdPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100vh;

  gap: 100px;
`;

const MediImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 70%;
  margin: auto;
  gap: 100px;

  img {
    width: 100%;
  }

  pre {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 56px; /* 155.556% */
  }
`;

const UppTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 180px;
  flex-shrink: 0;

  background: #e9f1ff;
`;

const UppTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 70%;
  margin: auto;

  gap: 10px;

  img {
    width: 274px;
    height: 176.842px;
    flex-shrink: 0;
  }

  pre {
    color: #00498f;
    font-size: 50px;
    font-weight: 700;
    line-height: 73.471px; /* 146.941% */

    align-self: flex-end;

    margin-bottom: 10px;
  }
`;

const FourthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 100px 0;

  gap: 50px;
`;

const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 70%;
  margin: auto;
`;

const UIUXImage = styled.div`
  width: 70%;
  margin: auto;

  img {
    width: 100%;
    padding: 50px 0;
  }
`;

const FifthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  background: #d9d9d9;
`;

const AppDownloaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 70%;
  margin: auto;

  gap: 200px;

  pre {
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    line-height: 56px; /* 112% */
  }
`;

const DownloadButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 60px;
  gap: 50px;
`;

const DownloadButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 202.335px;
  height: 96px;
  flex-shrink: 0;

  border-radius: 30px;
  background: #6a6a6a;

  cursor: pointer;
  z-index: 2;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    text-decoration: none;
    pre {
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      line-height: 26px; /* 162.5% */
    }
  }
`;
