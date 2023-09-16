import bannerImg from '/assets/image/lms/lms-banner.png';
import bannerNotebookImg from '/assets/image/lms/lms-banner-notebook.png';
import bannerTextImg from '/assets/image/lms/lms-banner-text.png';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url(${bannerImg}) no-repeat;
  background-size: cover;
`;
const BannerNotebook = styled.div`
  position: absolute;
  top: 11%;
  left: 0%;
  width: 750px;
  height: 500px;
  background: url(${bannerNotebookImg});
  background-size: cover;
`;
const BannerLogo = styled.div`
  position: absolute;
  top: 30%;
  left: 53%;
  width: 400px;
  height: 80px;
  background: url(${bannerTextImg});

  background-size: cover;
`;
const BannerText = styled.div`
  position: absolute;
  top: 45%;
  left: 53%;
  font-size: 46px;
  font-weight: 700;
  line-height: 64px;
`;
const Banner = () => {
  return (
    <Container>
      <BannerNotebook></BannerNotebook>
      <BannerLogo></BannerLogo>
      <BannerText>
        {'비대면 교육과 관리가 필요할 때,\nLMS/CMS 서비스 UPP!'}
      </BannerText>
    </Container>
  );
};

export default Banner;
