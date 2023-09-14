import { useSetRecoilState } from 'recoil';
import { currHeaderAtom } from '../../recoil/atom';
import { useEffect } from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import NewsContainer from './NewsContainer';

const Container = styled.div`
  width: 100vw;
`;
const SecondContainer = styled.div`
  width: 70%;
  margin: auto;
  height: 100vw; //없애?
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
  margin: auto;
  width: 600px;
  height: 600px;
  background-color: red;
`;
const ThirdContainer = styled.div`
  width: 70%;
  margin: auto;
`;
const ThirdTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  white-space: break-spaces;
`;
const FourthContainer = styled.div`
  width: 100vw;
  height: 100vh;
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
        <SecondGif>s</SecondGif>
      </SecondContainer>
      <ThirdContainer>
        <ThirdTitle>
          {"에이치디메디는\n'지속가능한 사회'를 추구합니다."}
        </ThirdTitle>
      </ThirdContainer>
      <FourthContainer>복약지도4만건건건</FourthContainer>
      <NewsContainer>누ㅠ스</NewsContainer>
    </Container>
  );
};

export default Main;
