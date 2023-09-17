import styled from 'styled-components';
import { SwiperCardProps } from './bannerData';
import { useNavigate } from 'react-router-dom';

const Container = styled.div<{ $imgUrl: string }>`
  position: relative;

  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.$imgUrl}) no-repeat center center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 80vw;
    background: url(${(props) => props.$imgUrl}) no-repeat right ;
    background-size: cover;
    font-size: 22px;
  }
`;
const Text = styled.div<{ textPosition: SwiperCardProps['textPosition'] }>`
  width: 100%;
  font-size: 44px;
  font-weight: 700;
  white-space: break-spaces;
  margin: 180px 0 90px 0;
  line-height: 64px;

  //데스크탑
  @media screen and (min-width: 500px) {
    position: absolute;
    text-align: ${(props) =>
      props.textPosition?.textAlign ? props.textPosition?.textAlign : 'center'};
    top: ${(props) =>
      props.textPosition?.top ? props.textPosition?.top : '0%'};
    left: ${(props) =>
      props.textPosition?.left ? props.textPosition?.left : '0%'};
  }

  //모바일
  @media screen and (max-width: 500px) {
    position: static;
    text-align: center;
    font-size: 20px;
    line-height: 35px;
    margin: 30px 0 20px 0;
  }
`;
const Btn = styled.div<{ btnPosition: SwiperCardProps['btnPosition'] }>`
  position: absolute;

  width: 240px;
  height: 60px;
  border-radius: 30px;
  background-color: #fff;
  font-weight: 700;
  text-align: center;
  line-height: 60px;
  border: 2px solid #005fed;
  /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 그림자 스타일 지정 */

  cursor: pointer;
  //데스크탑
  @media screen and (min-width: 500px) {
    position: absolute;
    top: ${(props) => (props.btnPosition?.top ? props.btnPosition?.top : '0%')};
    left: ${(props) =>
      props.btnPosition?.left ? props.btnPosition?.left : '0%'};
  }

  //모바일
  @media screen and (max-width: 500px) {
    position: static;
    text-align: center;
    width: 130px;
    height: 40px;
    border-radius: 20px;
    font-size: 12px;
    line-height: 40px;
    margin: 20px;
  }
`;
const SwiperCard: React.FC<SwiperCardProps> = ({
  imgUrl,
  text,
  hasBtn,
  btnText,
  btnUrl,
  textPosition,
  btnPosition,
}) => {
  const navigate = useNavigate();
  return (
    <Container $imgUrl={imgUrl}>
      <Text textPosition={textPosition}>{text}</Text>
      {hasBtn === true ? (
        <Btn
          btnPosition={btnPosition}
          onClick={() => navigate(btnUrl as string)}
        >
          {btnText}
        </Btn>
      ) : null}
    </Container>
  );
};
export default SwiperCard;
