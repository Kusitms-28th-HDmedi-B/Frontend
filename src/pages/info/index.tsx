import { styled } from 'styled-components';
import Map from './Map';
import TextBox from './TextBox';

const Container = styled.div`
  background-color: white;
  width: 80%;
  margin: auto;
  margin-bottom: 100px;
`;
export const Title = styled.div`
  //재사용 요청
  font-size: 36px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin: 40px 0;
`;
const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
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
