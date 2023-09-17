import bannerImg from '/assets/image/lms/lms-banner.png';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url(${bannerImg}) no-repeat center center;
  background-size: cover;

  color: white;
  font-size: 40px;
  font-weight: 700;
  line-height: 64px;
`;

const BannerLms = styled.div`
  position: absolute;
  top: 37%;
  left: 70%;

  font-size: 78px;
`;
const BannerText = styled.div`
  position: absolute;
  top: 51%;
  left: 58%;
`;
const Banner = () => {
  return (
    <Container>
      {/* <BannerNotebook></BannerNotebook>
      <BannerLogo></BannerLogo> */}
      <BannerLms>LMS</BannerLms>
      <BannerText>
        {'비대면 교육과 관리가 필요할 때,\nLMS/CMS 서비스 UPP!'}
      </BannerText>
    </Container>
  );
};

export default Banner;
