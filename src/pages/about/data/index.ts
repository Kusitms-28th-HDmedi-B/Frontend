interface MissionDataType {
  title: string;
  content: string;
  imgSrc: string;
  reverse: boolean;
  animation: string;
}

export const MissionData: MissionDataType[] = [
  {
    title: 'Mission',
    content:
      '자사는\n연 53만건의 의약품 부작용 문제를\n해결하는 미션을 가지고 있습니다',
    imgSrc: '/assets/image/about/about-image3.svg',
    reverse: false,
    animation: 'fade-up',
  },
  {
    title: 'Vision',
    content:
      '자사는\n복약지도를 통해\n연 4만건 의약품 부작용을 줄이며\n건강한 사회를 약속합니다.',
    imgSrc: '/assets/image/about/about-image4.svg',
    reverse: true,
    animation: 'fade-up',
  },
];

interface CardData {
  title: string;
  imgSrc: string;
  reverse: boolean;
  animation: string;
  backgroundUrl?: string | undefined;
  backgroundColor?: string;
}

export const WorthCardData: CardData[] = [
  {
    title: '건강',
    imgSrc: '/assets/image/about/about-image8.svg',
    reverse: true,
    animation: 'fade-right',
    backgroundUrl: '/assets/image/about/about-image5.svg',
    backgroundColor: '#ECEEF6',
  },
  {
    title: '기술',
    imgSrc: '/assets/image/about/about-image8.svg',
    reverse: false,
    animation: 'fade-left',
    backgroundUrl: '/assets/image/about/about-image6.svg',
    backgroundColor: '#10D192',
  },
  {
    title: '연결',
    imgSrc: '/assets/image/about/about-image10.svg',
    reverse: true,
    animation: 'fade-right',
    backgroundUrl: '/assets/image/about/about-image7.svg',
    backgroundColor: '#C7E2FF',
  },
];

export const StatisticData: CardData[] = [
  {
    title: '복약지도 생성 수',
    imgSrc: '',
    reverse: false,
    animation: 'fade-up',
  },
  {
    title: '서비스 이용자 수',
    imgSrc: '',
    reverse: false,
    animation: 'fade-up',
  },
  // {
  //   title: '약국 이용자 수\n의료진 수',
  //   imgSrc: '',
  //   reverse: false,
  //   animation: 'fade-up',
  // },
];

interface AppDataType {
  title: string;
  subtitle: string;
  imgSrc: string;
  logo?: string;
  link: string;
  backgroundUrl: string;
}

export const AppData: AppDataType[] = [
  {
    title: '어프',
    subtitle: '어디가 아프세요, 어프',
    imgSrc: '',
    logo: '/assets/logo/upp-logo.svg',
    link: '/service/upp',
    backgroundUrl: '/assets/image/about/about-image11.svg',
  },
  {
    title: '비대면 통합\nCMS LMS',
    subtitle: 'SaaS',
    imgSrc: '',
    logo: '/assets/logo/lms-logo.png',
    link: '/service/lms',
    backgroundUrl: '/assets/image/about/about-image11.svg',
  },
];
