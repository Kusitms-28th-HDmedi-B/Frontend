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

import SwiperCard from './SwiperCard';
import { SwiperCardDatas } from './bannerData';

const SwiperContainer = styled(Swiper)`
  /* background-color: red; */
  width: 100vw;
  height: 100vh;
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
        {SwiperCardDatas.map(({ imgUrl, text, hasBtn, btnText, btnUrl }) => (
          <SwiperSlide>
            <SwiperCard
              imgUrl={imgUrl}
              text={text}
              hasBtn={hasBtn}
              btnText={btnText}
              btnUrl={btnUrl}
            ></SwiperCard>
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </>
  );
};
export default Banner;
