import styled from 'styled-components';
import gif from '/assets/image/main/graph.gif';
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 120vh;
  background-color: #1a1f27;
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 100vw;
  }
`;
const TextContainer = styled.div`
  top: 200px;
  left: 300px;
  position: absolute;
  display: flex;
  flex-direction: column;
  color: white;
  margin: auto;
  @media screen and (max-width: 500px) {
    top: 20px;
    left: 50px;
  }
`;
const TextTitle = styled.div`
  font-size: 35px;
  font-weight: 400;
  margin: 30px 0;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    font-weight: 400;
    margin: 20px 0;
  }
`;
const TextContent = styled.div`
  font-size: 85px;
  font-weight: 700;
  margin-bottom: 50px;
  @media screen and (max-width: 500px) {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;
const Gif = styled.div`
  top: 200px;
  left: 15%;
  position: absolute;
  background: url(${gif}) no-repeat;
  background-size: cover;
  width: 70%;
  height: 500px;
  @media screen and (max-width: 500px) {
    top: 150px;
    left: 12%;

    font-size: 30px;
    font-weight: 700;
    width: 70%;
    height: 120px;
  }
`;
const Graph = () => {
  return (
    <Container>
      <TextContainer>
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <TextTitle>누적 서비스 이용자수</TextTitle>
          <TextContent>5만건</TextContent>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <TextTitle>복약지도 생성수</TextTitle>
          <TextContent>4만건</TextContent>
        </div>
      </TextContainer>
      <Gif
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
        data-aos-delay="1000"
      ></Gif>
    </Container>
  );
};

export default Graph;
