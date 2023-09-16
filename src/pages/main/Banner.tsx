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

import arrowLeft from '../../../public/assets/icon/arrow-left.svg';
import arrowRight from '../../../public/assets/icon/arrow-right.svg';

const SwiperContainer = styled(Swiper)`
  /* background-color: red; */
  width: 100vw;
  height: 100vh;

  .swiper-button-prev {
    top: calc(100% - 112px);
    left: calc(50% - 270px);
    width: 50px;
    height: 50px;
    border-radius: 27px;
    background: url(${arrowLeft}) no-repeat;
    background-color: white;
    background-size: 18% auto;
    background-position: center;
    z-index: 120;
  }

  .swiper-button-next {
    top: calc(100% - 112px);
    left: calc(50% + 270px - 50px); //동그라미 크기만큼
    width: 50px;
    height: 50px;
    border-radius: 27px;
    background: url(${arrowRight}) no-repeat;
    background-color: white;
    background-size: 18% auto;
    background-position: center;
    z-index: 120;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
  //pagination bar에 적용하는 스타일 -활성화된 bullet

  .swiper-pagination {
    margin-bottom: calc(100px - 10px);
  }
  //pagination bar에 적용하는 스타일 - 전체 bullet
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    margin: 0 50px !important;
    text-align: center;
    line-height: 20px;
    font-size: 18px;
    color: #a5a5a5;
    opacity: 1;
    background: transparent;
    transition: background 0.3s ease;

    &:hover {
      color: #000;
    }
  }
  .swiper-pagination-bullet-active {
    color: #000;
  }
`;

const Banner = () => {
  return (
    <>
      <SwiperContainer
        loop={true}
        spaceBetween={0}
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}">${index + 1}</span>`;
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {SwiperCardDatas.map(
          ({ imgUrl, text, hasBtn, btnText, btnUrl }, index) => (
            <SwiperSlide key={index}>
              <SwiperCard
                imgUrl={imgUrl}
                text={text}
                hasBtn={hasBtn}
                btnText={btnText}
                btnUrl={btnUrl}
              ></SwiperCard>
            </SwiperSlide>
          ),
        )}
      </SwiperContainer>
    </>
  );
};
export default Banner;
