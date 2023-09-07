import { styled } from 'styled-components';
import Map from './Map';

const Container = styled.div`
  background-color: white;
  width: 80%;
  margin: auto;
`;
const Title = styled.div`
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  width: 100px;
  height: 100px;
`;

const Info = () => {
  return (
    <Container>
      <Title>위치</Title>
      <Map />
      <TextBox></TextBox>
    </Container>
  );
};

export default Info;
