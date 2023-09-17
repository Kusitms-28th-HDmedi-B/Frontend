interface Technology {
  content: string;
  imgSrc: string;
  animation: string;
}

export const TechnologyData: Technology[] = [
  {
    content: 'MEGA DATA 기반\nAI 기술 도입',
    imgSrc: '/assets/image/technology/tech-image9.svg',
    animation: 'fade-right',
  },
  {
    content: 'AI 기술을 통한\n맞춤형 정보 제공',
    imgSrc: '/assets/image/technology/tech-image10.svg',
    animation: 'fade-left',
  },
];

export interface ICardText {
  textData: {
    title: string;
    subTitle: string;
    detail: string[];
  };
  url: string;
}

export const CardText: ICardText[] = [
  {
    textData: {
      title: '빅 데이터 시스템',
      subTitle: '',
      detail: ['6가지의 연계 수집 방법을 통한 신뢰성 있는 데이터 구축'],
    },
    url: '/assets/image/technology/tech-image3.svg',
  },
  {
    textData: {
      title: '클라우드 인프라',
      subTitle: '',
      detail: ['통합 DB 운영 관리', '시스템 운영 관리', '보안 취약점 관리'],
    },
    url: '/assets/image/technology/tech-image4.svg',
  },
  {
    textData: {
      title: '지능형 서비스',
      subTitle: '',
      detail: [
        '데이터 저장 분석 플랫폼',
        '지능형 분석 서비스 제공',
        '사용자 맞춤형 정보 제공',
      ],
    },
    url: '/assets/image/technology/tech-image5.svg',
  },
  {
    textData: {
      title: 'AI 솔루션',
      subTitle: '',
      detail: [
        '메가 데이터를 활용한 AI 솔루션',
        'AI 솔루션을 통한 사용자 맞춤형 정보 제공',
      ],
    },
    url: '/assets/image/technology/tech-image6.svg',
  },
];

export interface AppCardType {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  fontColor: string;
  logo: string;
  backgroundColor: string;
  backgroundUrl: string;
  marginTop: string;
}

export const AppCardData: AppCardType[] = [
  {
    id: 1,
    title: '',
    subtitle: '어디가 아프세요, 어프',
    link: '/service/upp',
    fontColor: '#1F64D1',
    logo: '/assets/logo/upp-logo.svg',
    backgroundColor: '#CBE5FF',
    backgroundUrl: '/assets/image/technology/tech-image1.svg',
    marginTop: '35px',
  },
  {
    id: 2,
    title: '',
    subtitle: '비대면 통합 CMS LMS\nSaaS',
    link: '/service/lms',
    fontColor: '#fff',
    logo: '/assets/logo/lms-logo.png',
    backgroundColor: '#293F98',
    backgroundUrl: '/assets/image/technology/tech-image2.svg',
    marginTop: '10px',
  },
];
