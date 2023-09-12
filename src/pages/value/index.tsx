import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { currHeaderAtom } from '../../recoil/atom';
import { useEffect } from 'react';

import banner from '../../../public/assets/image/ValueBannerEx.png';
import card from '../../../public/assets/image/ValueCardEx.jpg';
import { CardText, bannerText } from './valueData';

const Container = styled.div`
  width: 100vw;
  margin-bottom: 100px;
`;
const Banner = styled.div`
  width: 100%;
  height: 700px;
  background: url(${banner}) no-repeat center/cover;

  text-align: center;
  line-height: 700px;
  font-size: 50px;
  font-weight: 700;
`;
const FirstContainer = styled.div`
  width: 70%;
  height: 1500px; //일단!
  padding: 200px 0;
  margin: auto;
  border: 1px solid red;
`;
const SubTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin: 50px 0;
`;
const GridContainer = styled.div`
  width: 850px;
  height: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2개의 열 */
  grid-template-rows: repeat(2, 1fr); /* 2개의 행 */
  /* justify-items: center; */ //왼쪽을 맞추자
  gap: 50px; //어렵다 이거..
`;

const CardContainer = styled.div`
  position: relative; //부모로서 CardContainer에 겹치게 하기 위한 설정
  width: 450px;
  height: 450px;
  padding: 20px;
  &:hover > span {
    filter: blur(15px);
  }
`;
const CardImg = styled.span`
  width: 450px;
  height: 450px;
  top: 0px; //얘네가 없으면 부모의 content로 들어간다! padding 설정에 좋다
  left: 0px; //얘네가 없으면 부모의 content로 들어간다! padding 설정에 좋다

  background: url(${card}) left top no-repeat;
  background-size: cover;
  display: inline-block;
  position: absolute; //부모인 CardContainer에 겹치게 하기 위한 설정
`;
const CardTitle = styled.div`
  position: absolute; //부모인 CardContainer에 겹치게 하기 위한 설정
`;
const CardSubTitle = styled.div`
  position: absolute; //부모인 CardContainer에 겹치게 하기 위한 설정
  top: 10%;
`;
const CardUl = styled.ul`
  position: absolute; //부모인 CardContainer에 겹치게 하기 위한 설정
  top: 30%;
`;

const hoverMouse = () => {};
const Value = () => {
  const setCurrHeader = useSetRecoilState(currHeaderAtom);

  useEffect(() => setCurrHeader('transparent'));
  return (
    <Container>
      <Banner>{bannerText}</Banner>
      <FirstContainer>
        <SubTitle>함께 성장할 인재를 찾습니다.</SubTitle>
        <GridContainer>
          {CardText.map((each) => (
            <CardContainer onMouseEnter={hoverMouse}>
              <CardImg></CardImg>
              <CardTitle>{each.title}</CardTitle>
              <CardSubTitle>{each.subTitle}</CardSubTitle>
              <CardUl>
                {each.detail.map((eachLi) => (
                  <li>- {eachLi}</li>
                ))}
              </CardUl>
            </CardContainer>
          ))}
        </GridContainer>
      </FirstContainer>
    </Container>
  );
};

export default Value;
