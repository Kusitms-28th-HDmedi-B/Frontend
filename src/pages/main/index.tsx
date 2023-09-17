import { useSetRecoilState } from 'recoil';
import { currHeaderAtom } from '../../recoil/atom';
import { useEffect } from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import NewsContainer from './NewsContainer';
import { persuitDatas } from './bannerData';
import PersuitCard from './PersuitCard';

import circle from '/assets/image/main/home-circle.svg';

const Container = styled.div`
  width: 100vw;
`;
const SecondContainer = styled.div`
  width: 70%;
  margin: auto;
  /* height: 100vw; //없애? */
`;
const SecondText = styled.div`
  margin: 150px 0;
  white-space: break-spaces;
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  :nth-child(2) {
    color: #7aa4e8;
  }
`;
const SecondGif = styled.div`
  background: url(${circle}) no-repeat;
  background-size: cover;
  margin: auto;
  width: 748px;
  height: 600px;
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
const ThirdTitle = styled.div`
  width: 70%;
  margin: 100px auto;
  font-size: 30px;
  font-weight: 700;
  line-height: 45px;
  white-space: break-spaces;
`;
const FourthContainer = styled.div`
  width: 100vw;
  height: 120vh;
  background-color: #1a1f27;
`;
const Main = () => {
  const setCurrHeader = useSetRecoilState(currHeaderAtom);
  useEffect(() => setCurrHeader('transparent'));
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
      <FourthContainer>복약지도4만건건건</FourthContainer>
      <NewsContainer></NewsContainer>
    </Container>
  );
};

export default Main;
