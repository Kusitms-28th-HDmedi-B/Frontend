import styled from 'styled-components';
import { Title } from '../info';
import { useState } from 'react';
import toggleup from './toggleUp.svg';
import toggleDown from './toggleDown.svg';

const QuetionUl = styled.ul``;
const Quetionli = styled.ul`
  border-radius: 10px;
  padding: 10px 30px 10px 50px;
  margin: 10px 0;

  &:hover {
    background-color: #f4f4f4;
  }
  img {
    float: right;
    width: 20px;
    height: 20px;
    margin: 5px 30px 0 0; // 글자의 스타일
    /* position: relative; */
    /* display: inline-block; */
    vertical-align: middle;
    cursor: pointer;
    border: 0;
  }
`;
const Question = styled.div`
  display: inline-block;
  width: 80%; //버튼과 안겹치게 왼쪽으로 80프로만
`;
const Answer = styled.div<{ isClicked: boolean }>`
  width: 80%; //버튼과 안겹치게 왼쪽으로 80프로만
  /* background-color: #9f9f9f; */
  display: block;
  margin: ${(props) => (props.isClicked ? '20px 0' : '0')};
  max-height: ${(props) => (props.isClicked ? '300px' : '0')};
  overflow: hidden;
  transition:
    margin 0.3s ease-in-out,
    max-height 0.3s ease-in-out;
`;

const Faq = () => {
  const [isClicked, setIsClicked] = useState([false, false, false, false]);
  const datas = [
    [
      'Q. 질문있습니다 질문있어요 질문있다구요질문있습니다 질문있어요 질문있다구요질문있습니다 질문있어요 질문있다구요',
      'A. 첫번째 답변입니다 그만좀 물어보시죠. 붉은 사과를 한 입 베어 물고내가 아닌 누군가가 되었던 계아무 의미도 없는 화장을 하고나도 몰래 흥얼거린 타인의 노래',
    ],
    [
      'Q. 질문문질문닞룸니룸요',
      'A. 난 한낮에 뜬 보이지 않는 달난 다섯 번째 계절에 피어난 꽃난 떠난 이의 메마른 입맞춤넘쳐흐르는 나를 흘려보내고내가 아닌 누군가가 되었던 계절사랑스런 당신의 흉내를 내고거울 앞에서 느낀 절정의순간',
    ],
    [
      'Q. i have question',
      'A. 오직 나를 비추는 누군가의 눈 끝에서만 숨을 쉴 수 있는',
    ],
    [
      'Q. 궁그매너가궁금해',
      'A. 아무도 모르는 파란 길로아무도 모르는 파란 길로 갈 수 없지아무도 모르는 파란 길로',
    ],
  ];
  // 클릭한 질문의 인덱스를 받아옴
  const toggleClick = (index: number) => {
    console.log('click', index);
    setIsClicked((curr) => {
      const newArr = [...curr];
      newArr[index] = !newArr[index];
      return newArr;
    });
  };
  return (
    <>
      <Title>자주하는 질문</Title>
      <QuetionUl>
        {datas.map((data, index) => (
          <Quetionli key={index}>
            <Question>{data[0]}</Question>
            <img
              src={isClicked[index] === true ? toggleup : toggleDown}
              onClick={() => toggleClick(index)}
            ></img>
            <Answer isClicked={isClicked[index]}>{data[1]}</Answer>
          </Quetionli>
        ))}
      </QuetionUl>
    </>
  );
};
export default Faq;
