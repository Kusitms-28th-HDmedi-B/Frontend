import styled from 'styled-components';
import { persuitCardProps } from './bannerData';

const Container = styled.div`
  position: relative;
  height: 350px;
  width: 350px;
  border-radius: 20px;
  padding: 30px;
  font-weight: 600;
  overflow: hidden;
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
`;
const Title = styled.div<{ $titleColor: string }>`
  position: absolute; //부모인 CardContainer에 겹치게 하기 위한 설정

  color: ${(props) => props.$titleColor};
  font-weight: 700;

  font-size: 30px;
  margin-bottom: 30px;
`;
const StyledUl = styled.ul`
  position: absolute; //부모인 CardContainer에 겹치게 하기 위한 설정
  top: 100px;
  height: 0px;
  overflow: hidden;
  li {
    white-space: break-spaces;
    margin: 10px 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
  }
`;
const PersuitCard: React.FC<persuitCardProps> = ({
  title,
  content,
  imgUrl,
  titleColor,
}) => {
  return (
    <Container>
      <CardImg $imgUrl={imgUrl}></CardImg>
      <Title $titleColor={titleColor}>{title}</Title>
      <StyledUl>
        {content.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </StyledUl>
    </Container>
  );
};
export default PersuitCard;