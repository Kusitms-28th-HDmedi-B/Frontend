import { useSetRecoilState } from 'recoil';
import { currHeaderAtom } from '../../recoil/atom';
import { useEffect } from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import NewsContainer from './NewsContainer';
import { persuitDatas } from './bannerData';
import PersuitCard from './PersuitCard';

import Graph from './Graph';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
  width: 100vw;
`;
const SecondContainer = styled.div`
  width: 70%;
  margin: auto;
  white-space: break-spaces;
  @media screen and (max-width: 500px) {
    width: 70%;
    margin: 0 30px;
    margin: auto;
  }
`;

const SecondText = styled.div`
  margin-top: 150px;
  font-size: 27px;
  font-weight: 600;
  line-height: 38px;
  text-align: center;
  :nth-child(2) {
    color: #7aa4e8;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const SecondTextMobile = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: inline;

    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    margin: 150px 0;
    :nth-child(2) {
      color: #7aa4e8;
    }
  }
`;
const SecondGif = styled.div`
  background: url('https://hdmedi-b.s3.ap-northeast-2.amazonaws.com/3.gif')
    no-repeat;
  background-size: cover;
  margin: auto;
  width: 748px;
  height: 530px;
  @media screen and (max-width: 500px) {
    margin: 50px auto;
    width: 250px;
    height: 200px;
  }
`;
const ThirdTitle = styled.div`
  width: 70%;
  margin: 100px auto;
  font-size: 30px;
  font-weight: 700;
  line-height: 45px;
  white-space: break-spaces;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const ThirdContainer = styled.div`
  margin: auto;
  margin-bottom: 200px;
  width: 70%;
  flex-wrap: wrap;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = () => {
  const setCurrHeader = useSetRecoilState(currHeaderAtom);
  useEffect(() => setCurrHeader('transparent'));

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container>
      <Banner></Banner>
      <SecondContainer>
        <SecondText>
          <span>{'에이치디메디는\n'}</span>
          <span>{'지역 약사와 지역 환자를 연결'}</span>
          <span>
            {
              '하는 복약지도를 제공해\n의약품의 부작용을 줄이고, 더 건강한 사회를 약속드립니다.'
            }
          </span>
        </SecondText>
        <SecondTextMobile>
          <span>{'에이치디메디는\n'}</span>
          <span>{'지역 약사와 지역 환자를 연결'}</span>
          <span>{'하는\n'}</span>
          <span>{'복약지도를 제공해\n'}</span>
          <span>{'의약품의 부작용을 줄이고,\n'}</span>
          <span>{'더 건강한 사회를 약속드립니다.'}</span>
        </SecondTextMobile>
        <SecondGif></SecondGif>
      </SecondContainer>
      <ThirdTitle>
        {"에이치디메디는\n'지속가능한 사회'를 추구합니다."}
      </ThirdTitle>
      <ThirdContainer>
        {persuitDatas.map((data, index) => (
          <PersuitCard {...data} key={index}></PersuitCard>
        ))}
      </ThirdContainer>
      <Graph></Graph>
      <NewsContainer></NewsContainer>
    </Container>
  );
};

export default Main;
