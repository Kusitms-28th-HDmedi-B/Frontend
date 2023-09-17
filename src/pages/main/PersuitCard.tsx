import styled from 'styled-components';
import { persuitCardProps } from './bannerData';

const Container = styled.div`
  position: relative;
  height: 320px;
  width: 320px;
  border-radius: 20px;
  padding: 30px;
  font-weight: 600;
  overflow: hidden;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 그림자 스타일 지정 */
  * {
    transition: 0.5s;
  }
  &:hover > span {
    filter: blur(20px);
  }
  &:hover > ul {
    top: 80px;
    height: auto;
  }
  &:hover > div {
    color: black;
  }

  @media screen and (max-width: 500px) {
    height: 300px;
    width: 300px;
    padding: 20px;
    margin-bottom: 20px;
  }
`;
const CardImg = styled.span<{ $imgUrl: string }>`
  position: absolute; //부모인 CardContainer에 겹치게 하기 위한 설정
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;

  background: url(${(props) => props.$imgUrl}) left top no-repeat;
  background-size: cover;
  display: inline-block;
  @media screen and (max-width: 500px) {
    filter: blur(20px);
  }
`;
const Title = styled.div`
  position: absolute; //부모인 CardContainer에 겹치게 하기 위한 설정

  font-weight: 700;
  color: #097df5;

  font-size: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    color: black;
    font-size: 25px;
    margin-bottom: 20px;
  }
`;
const StyledUl = styled.ul`
  position: absolute; //부모인 CardContainer에 겹치게 하기 위한 설정
  top: 100px;
  height: 0px;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    top: 80px;
    height: auto;
  }
  li {
    white-space: break-spaces;
    margin: 15px 0;
    font-size: 13px;
    font-weight: 600;
    line-height: 26px;
    @media screen and (max-width: 500px) {
      font-size: 11px;
      line-height: 20px;
    }
  }
`;
const PersuitCard: React.FC<persuitCardProps> = ({
  title,
  content,
  imgUrl,
}) => {
  return (
    <Container>
      <CardImg $imgUrl={imgUrl}></CardImg>
      <Title>{title}</Title>
      <StyledUl>
        {content.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </StyledUl>
    </Container>
  );
};
export default PersuitCard;
