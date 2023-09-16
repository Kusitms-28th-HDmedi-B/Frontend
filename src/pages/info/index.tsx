import { styled } from 'styled-components';
import Map from './Map';
import TextBox from './TextBox';

const Container = styled.div`
  background-color: white;
  width: 70%;
  height: 100%;
  margin: auto;
  padding: 106px 0 161px; //추가
  margin-bottom: 100px;
`;
export const Title = styled.div`
  //재사용 요청
  font-size: 28px;
  font-weight: 700;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin: 40px 0;
`;
const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = () => {
  return (
    <Container>
      <Title>위치</Title>
      <ContentsContainer>
        <Map />
        <TextBox />
      </ContentsContainer>
    </Container>
  );
};

export default Info;
