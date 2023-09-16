import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { currHeaderAtom } from '../../../recoil/atom';
import { useEffect } from 'react';
import Banner from './Banner';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
  margin: auto;
  margin-bottom: 100px;
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
    left: -10px;
    background-color: #b6cfff;
    width: 720px;
    height: 20px;
    border-radius: 10px;
    z-index: 10;
  }
  div:nth-of-type(3) {
    position: absolute;
    top: 85%;
    left: -10px;
    background-color: #b6cfff;
    width: 630px;
    height: 20px;
    border-radius: 10px;
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
    border-radius: 10px;
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
    border-radius: 10px;
    z-index: 1;
  }
`;
const Lms = () => {
  const setCurrHeader = useSetRecoilState(currHeaderAtom);
  useEffect(() => setCurrHeader('transparent'));
  useEffect(() => {
    AOS.init();
  });
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
    </Container>
  );
};

export default Lms;
