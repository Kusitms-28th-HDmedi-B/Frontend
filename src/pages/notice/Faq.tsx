import styled from 'styled-components';
import { Title } from '../info';
import { useState } from 'react';
import toggleup from './toggleUp.svg';
import toggleDown from './toggleDown.svg';
import Axios from '../../apis';
import { useQuery } from 'react-query';
const QuetionUl = styled.ul``;
const Quetionli = styled.ul`
  border-radius: 10px;
  padding: 15px 30px 15px 20px;
  margin: 10px 0;
  font-size: 20px;
  &:hover {
    background-color: #f4f4f4;
  }
  img {
    float: right;
    width: 20px;
    height: 20px;
    margin: 0px 30px 0 0; // 글자의 스타일
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
  const [isClicked, setIsClicked] = useState([
    false,
    false,
    false,
    false,
    false,
  ]); //로직 수정 필요
  //
  const fetchFaq = () => Axios.get('/api/qna');
  const { data } = useQuery(['api', 'faq'], fetchFaq, {
    staleTime: 10 * 5000,
    cacheTime: 10 * 5000 + 50,
  });
  console.log(data);
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
        {data?.data.data.map((each: any, index: number) => (
          <Quetionli key={index}>
            <Question>{each.question}</Question>
            <img
              src={isClicked[index] === true ? toggleup : toggleDown}
              onClick={() => toggleClick(index)}
            ></img>
            <Answer isClicked={isClicked[index]}>{each.answer}</Answer>
          </Quetionli>
        ))}
      </QuetionUl>
    </>
  );
};
export default Faq;
