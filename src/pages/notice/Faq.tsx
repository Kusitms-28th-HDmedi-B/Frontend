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

const Answer = styled.div`
  background-color: #9f9f9f;
`;

const Faq = () => {
  const [isToggled, setIsToggled] = useState([false, false, false, false]);
  const datas = [
    'Q. 질문있습니다 질문있어요 질문있다구요',
    'Q. 질문문질문닞룸니룸요',
    'Q. i have question',
    'Q. 궁그매너가궁금해',
  ];
  // 클릭한 질문의 인덱스를 받아옴
  const toggleClick = (index: number) => {
    console.log('click', index);
    setIsToggled((curr) => {
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
            {data}
            <img
              src={isToggled[index] === true ? toggleup : toggleDown}
              onClick={() => toggleClick(index)}
            ></img>
            <Answer >답변이됐니?</Answer>
          </Quetionli>
        ))}
      </QuetionUl>
    </>
  );
};
export default Faq;
