import styled from 'styled-components';
import img1 from '../../../public/assets/image/HomeBanner2.png';
// import img2 from '../../../public/assets/image/HomeBanner2.png'
// import img3 from '../../../public/assets/image/HomeBanner3.png'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  background: url(${img1}) no-repeat;
  background-size: cover;
`;

const Banner = () => {
  return <Container></Container>;
};

export default Banner;
