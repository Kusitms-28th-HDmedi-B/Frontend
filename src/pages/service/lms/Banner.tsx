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
  top: 15%;
  left: 10%;
  width: 800px;
  height: 500px;
  background: url(${bannerNotebookImg});

  border: 1px solid red;
`;
const BannerLogo = styled.div`
  position: absolute;
  top: 20%;
  left: 55%;
  width: 500px;
  height: 100px;
  background: url(${bannerTextImg});
  border: 1px solid red;
`;
const BannerText = styled.div`
  position: absolute;
  top: 35%;
  left: 55%;
  border: 1px solid red;
  font-size: 50px;
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
