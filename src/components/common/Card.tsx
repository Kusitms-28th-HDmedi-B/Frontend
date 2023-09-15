import styled from 'styled-components';
import { ICardText } from '../../pages/value/valueData';

const CardContainer = styled.div`
  position: relative; //부모로서 CardContainer에 겹치게 하기 위한 설정
  width: 450px;
  height: 450px;
  padding: 30px;
  border-radius: 30px;
  overflow: hidden;
  * {
    transition: 0.5s;
  }
  &:hover > span {
    filter: blur(5px);
  }
  // Title 컴포넌트에 적용
  /* &:hover > div:nth-of-type(1) {
    font-size: 28px;
    top: 15%;
  }
  // SubTitle 컴포넌트에 적용
  &:hover > div:nth-of-type(2) {
    font-size: 24px;
    line-height: 30px;
  } */
  &:hover > ul {
    top: 70%;
    height: 200px;
  }
`;
const CardImg = styled.span<{ $imgUrl: string }>`
  position: absolute; //부모인 CardContainer에 겹치게 하기 위한 설정
  width: 450px;
  height: 450px;
  top: 0px;
  left: 0px;

  background: url(${(props) => props.$imgUrl}) left top no-repeat;
  background-size: cover;
  display: inline-block;
`;
const CardTitle = styled.div`
  position: absolute; //부모인 CardContainer에 겹치게 하기 위한 설정
  font-size: 36px;
  font-weight: 700;
  top: 10%;
  color: white;
`;
const CardSubTitle = styled.div`
  position: absolute; //부모인 CardContainer에 겹치게 하기 위한 설정
  width: 80%;
  font-size: 26px;
  font-weight: 700;
  top: 25%;
  color: white;

  white-space: pre; //개행문자!
  line-height: 40px;
`;
const CardUl = styled.ul`
  position: absolute; //부모인 CardContainer에 겹치게 하기 위한 설정
  width: 450px;
  height: 300px;
  top: 100%;
  left: 0%;
  font-size: 14px;
  font-weight: 700;
  overflow: hidden; //안보이게 했다가 보이게
  height: 0;
  list-style-type: circle; //왜 적용 안되지?

  background-color: white;
  li {
    line-height: 30px;
  }
`;
interface CardProps {
  url: string;
  textData: ICardText;
}
const Card: React.FC<CardProps> = ({ url, textData }) => {
  return (
    <CardContainer>
      <CardImg $imgUrl={url}></CardImg>
      <CardTitle>{textData.title}</CardTitle>
      <CardSubTitle>{textData.subTitle}</CardSubTitle>
      <CardUl>
        {textData.detail.map((eachLi, index) => (
          <li key={index}>ㆍ {eachLi}</li>
        ))}
      </CardUl>
    </CardContainer>
  );
};
export default Card;
