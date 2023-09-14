import styled from 'styled-components';
import { SwiperCardProps } from './bannerData';
import { useNavigate } from 'react-router-dom';

const Container = styled.div<{ imgUrl: string }>`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.imgUrl}) no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
const Text = styled.div`
  font-size: 46px;
  font-weight: 700;
  white-space: break-spaces;
  margin: 180px 0 90px 0;
  line-height: 60px;
  text-align: center;
`;
const Btn = styled.div`
  width: 240px;
  height: 60px;
  border-radius: 30px;
  background-color: #fff;
  font-weight: 700;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
`;
const SwiperCard: React.FC<SwiperCardProps> = ({
  imgUrl,
  text,
  hasBtn,
  btnText,
  btnUrl,
}) => {
  const navigate = useNavigate();
  return (
    <Container imgUrl={imgUrl}>
      <Text>{text}</Text>
      {hasBtn === true ? (
        <Btn onClick={() => navigate(btnUrl as string)}>{btnText}</Btn>
      ) : null}
    </Container>
  );
};
export default SwiperCard;
