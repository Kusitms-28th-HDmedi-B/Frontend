import { styled } from 'styled-components';
const Container = styled.span`
  display: inline-block;
  width: 300px;
  height: 350px;
  /* background-color: #f9f4f4e8; */
  padding-left: 50px;
`;
const TextList = styled.ul`
  list-style-type: square; //불렛위치 조정필요
  margin-bottom: 100px;
  li {
    margin: 30px 0px;
  }
`;
const SNS = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #d9d9d9;
  margin-right: 15px;
`;
const TextBox = () => {
  return (
    <Container>
      <TextList>
        <li>서울시 종로구 종로 6, 6층</li>
        <li>02-6080-2216</li>
        <li>hdmedi@hdmedi.co.kr</li>
      </TextList>
      <SNS></SNS>
      <SNS></SNS>
      <SNS></SNS>
    </Container>
  );
};

export default TextBox;
