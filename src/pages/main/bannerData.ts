export interface SwiperCardProps {
  imgUrl: string;
  text: string;
  hasBtn: boolean;
  btnText?: string;
  btnUrl?: string;

  /**absolute 설정 후 좌표 커스텀 */
  textPosition?: { left?: string; top?: string; textAlign?: string };
  btnPosition?: { left?: string; top?: string };
}
export interface persuitCardProps {
  title: string;
  content: string[];
  imgUrl: string;
  titleColor: string;
}

export const SwiperCardDatas: SwiperCardProps[] = [
  {
    imgUrl: '/assets/image/main/HomeBanner1.png',
    text: '에이치디메디는\n의약품 부작용을 줄이는\n올바른 복용 습관을 책임집니다.',
    hasBtn: false,
  },
  {
    imgUrl: '/assets/image/main/HomeBanner2.png',
    text: '지역 약사와 환자를 이어\n건강한 지역 사회를 약속합니다.',
    hasBtn: true,
    btnText: '서비스 보러가기',
    btnUrl: 'recruit',
    textPosition: { left: '300px', top: '20px', textAlign: 'left' },
    btnPosition: { left: '300px', top: '400px' },
  },
  {
    imgUrl: '/assets/image/main/HomeBanner3.png',
    text: '에이치디메디만의 혁신 기술로\n더 건강한 내일을 만듭니다.',
    hasBtn: true,
    btnText: '자세히 보기',
    btnUrl: 'info',
  },
];
export const persuitDatas: persuitCardProps[] = [
  {
    title: '건강',
    content: [
      '모든 연령대의 모든 사람의\n건강한 삶을 보장하고 웰빙을 증진합니다',
      '도시와 인간 정착지를 포용적이고\n안전하며 회복력 있고 지속 가능하게 만듭니다',
      '실행 수단을 강화하고\n지속가능한 개발을 위한 글로벌 협력을 활성화합니다',
    ],
    imgUrl: '/assets/image/main/HomePersuit0.png',
    titleColor: '#097DF5',
  },
  {
    title: '기술',
    content: [
      '빅데이터를 통한 16만 의약품 통합 정보,\n10만 의료기관 통합 정보 API 구축',
      '인공지능을 통한 질병 예측 시스템 구축\n',
      '전자 복약지도, LMS/CMS SaaS 제공 ',
    ],
    imgUrl: '/assets/image/main/HomePersuit1.png',
    titleColor: '#000',
  },
  {
    title: '연결',
    content: [
      '모든 연령대의 모든 사람의\n건강한 삶을 보장하고 웰빙을 증진합니다',
      '도시와 인간 정착지를 포용적이고\n안전하며 회복력 있고 지속 가능하게 만듭니다',
      '실행 수단을 강화하고\n지속가능한 개발을 위한 글로벌 협력을 활성화합니다',
    ],
    imgUrl: '/assets/image/main/HomePersuit2.png',
    titleColor: '#097DF5',
  },
];
