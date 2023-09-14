export interface SwiperCardProps {
  imgUrl: string;
  text: string;
  hasBtn: boolean;
  btnText?: string;
  btnUrl?: string;
}

export const SwiperCardDatas: SwiperCardProps[] = [
  {
    imgUrl: '../../../public/assets/image/HomeBanner1.png',
    text: '에이치디메디는\n의약품 부작용을 줄이는\n올바른 복용 습관을 책임집니다.',
    hasBtn: false,
  },
  {
    imgUrl: '../../../public/assets/image/HomeBanner2.png',
    text: '지역 약사와 환자를 이어\n건강한 지역 사회를 약속합니다',
    hasBtn: true,
    btnText: '서비스 보러가기',
    btnUrl: 'recruit',
  },
  {
    imgUrl: '../../../public/assets/image/HomeBanner3.png',
    text: '에이치디메디만의 혁신 기술로\n더 건강한 내일을 만듭니다',
    hasBtn: true,
    btnText: '자세히 보기',
    btnUrl: 'info',
  },
];
