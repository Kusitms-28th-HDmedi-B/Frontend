import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { currHeaderAtom } from '../../../recoil/atom';
import { useEffect } from 'react';
import Banner from './Banner';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Uppinfo from './Uppinfo';

import systemImg from '/assets/image/lms/lms-system.png';
import lastBanner from '/assets/image/lms/lms-last-banner.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: auto;
  white-space: break-spaces;
`;

const Text1 = styled.div`
  position: relative;

  margin: 400px auto;
  width: 70%;
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  text-align: left;
  div:nth-of-type(1) {
    position: relative;
    z-index: 19;
  }
  div:nth-of-type(2) {
    position: absolute;
    top: 34%;
    left: -5px;
    background-color: #b6cfff;
    width: 710px;
    height: 20px;
    /* border-radius: 10px; */
    z-index: 10;
  }
  div:nth-of-type(3) {
    position: absolute;
    top: 85%;
    left: -5px;
    background-color: #b6cfff;
    width: 620px;
    height: 20px;
    /* border-radius: 10px; */
    z-index: 10;
  }
`;
const Text2 = styled.div`
  position: relative;

  margin: 400px auto;
  width: 70%;
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  text-align: right;

  div:nth-of-type(1) {
    position: relative;
    z-index: 2;
  }
  div:nth-of-type(2) {
    position: absolute;
    top: 34%;
    right: -10px;

    background-color: #ffc38a;
    width: 635px;
    height: 20px;
    /* border-radius: 10px; */
    z-index: 1;

    justify-items: right;
  }
  div:nth-of-type(3) {
    position: absolute;
    top: 85%;
    right: -10px;
    background-color: #ffc38a;
    width: 840px;
    height: 20px;
    /* border-radius: 10px; */
    z-index: 1;
  }
`;
const UppBelt = styled.div`
  width: 100vw;
  height: 200px;
  background-color: #1a7cff;
  color: white;

  font-size: 50px;
  font-weight: 700;
  text-align: center;
  line-height: 200px;
`;
const LmsSystem = styled.span`
  background: url(${systemImg}) no-repeat;
  background-size: cover;
  width: 100vw;
  height: 80vw;
  display: inline-block;
`;
const LastBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #293f98;
  width: 100vw;
  height: 80vh;
  span {
    background: url(${lastBanner}) no-repeat;
    background-size: cover;
    width: 600px;
    height: 400px;
    display: inline-block;
    margin: 100px;
    border-radius: 10px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin-right: 120px;
    /* color: white; */

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;
const LastText = styled.div`
  white-space: break-spaces;
  display: inline-block;
  font-size: 48px;
  line-height: 70px;
  font-weight: 700;
  color: white;
  margin-bottom: 80px;

  text-align: center;

  display: inline-block;
`;

const FloatBtn2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  flex-shrink: 0;
  margin-top: 30px;

  cursor: pointer;
  z-index: 2;

  border-radius: 31px;
  border: 2px solid #0070ed;
  background: #fff;
  color: black;

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
`;

const Lms = () => {
  const setCurrHeader = useSetRecoilState(currHeaderAtom);
  useEffect(() => setCurrHeader('transparent'));
  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Container>
      <Banner />
      <Text1
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      >
        <div>
          {'비대면 교육 시스템이 구축되지 않아\n우왕좌왕한 경험이 있으신가요?'}
        </div>
        <div></div>
        <div></div>
      </Text1>
      <Text2
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      >
        <div>
          {
            '우리의 경쟁력을 UP시키기 위해\n비대면 교육/관리 서비스 UPP와 함께해요!'
          }
        </div>
        <div></div>
        <div></div>
      </Text2>
      <UppBelt>UPP는 어떤 서비스인가요?</UppBelt>
      <Uppinfo />
      <LmsSystem></LmsSystem>
      <LastBanner>
        <span></span>
        <div>
          <LastText>{'교육과 관리를 한 번에,\nUPP와 함께 하세요!'}</LastText>
          <Link to={'https://pharm.hdmedi.kr//'}>
            <FloatBtn2>서비스 보기</FloatBtn2>
          </Link>
        </div>
      </LastBanner>
    </Container>
  );
};

export default Lms;
