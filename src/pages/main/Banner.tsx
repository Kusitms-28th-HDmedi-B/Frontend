import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';

import img1 from '../../../public/assets/image/HomeBanner2.png';
import img2 from '../../../public/assets/image/HomeBanner2.png';
import img3 from '../../../public/assets/image/HomeBanner3.png';

const SwiperContainer = styled(Swiper)`
  /* background-color: red; */
  width: 100vw;
  height: 100vh;
`;
const SwiperCard = styled.div<{ imgUrl: string }>`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.imgUrl}) no-repeat;
  background-size: cover;
`;
const Banner = () => {
  return (
    <>
      <SwiperContainer
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperCard imgUrl={img1}>나는신이다</SwiperCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard imgUrl={img2}></SwiperCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard imgUrl={img3}></SwiperCard>
        </SwiperSlide>
      </SwiperContainer>
    </>
  );
};
export default Banner;
