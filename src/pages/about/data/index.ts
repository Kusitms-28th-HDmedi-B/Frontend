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
    imgSrc: '',
    reverse: false,
    animation: 'fade-up',
  },
  {
    title: 'Vision',
    content:
      '자사는\n복약지도를 통해\n연 4만건 의약품 부작용을 줄이며\n건강한 사회를 약속합니다.',
    imgSrc: '',
    reverse: true,
    animation: 'fade-up',
  },
];

interface CardData {
  title: string;
  imgSrc: string;
  reverse: boolean;
  animation: string;
}

export const WorthCardData: CardData[] = [
  {
    title: '건강',
    imgSrc: '',
    reverse: false,
    animation: 'fade-right',
  },
  {
    title: '기술',
    imgSrc: '',
    reverse: true,
    animation: 'fade-left',
  },
  {
    title: '연결',
    imgSrc: '',
    reverse: false,
    animation: 'fade-right',
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
  {
    title: '약국 이용자 수\n의료진 수',
    imgSrc: '',
    reverse: false,
    animation: 'fade-up',
  },
];

interface AppDataType {
  title: string;
  subtitle: string;
  imgSrc: string;
}

export const AppData: AppDataType[] = [
  {
    title: '어프',
    subtitle: '어디가 아프세요, 어프',
    imgSrc: '',
  },
  {
    title: '비대면 통합\nCMS LMS',
    subtitle: 'SaaS',
    imgSrc: '',
  },
];
