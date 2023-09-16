export interface Function {
  imgSrc: string;
  customer: string;
  contents: {
    src: string;
    message: string;
    list?: string[];
  }[];
  reverse: boolean;
}

export const functionCardData: Function[] = [
  {
    imgSrc: '', // 상단 이미지
    customer: '약사',
    contents: [
      {
        src: '', // 이미지
        message: 'QCR 기능으로 처방전을 인식하여\n복약 안내문 자동 완성',
      },
      {
        src: '', // 이미지
        message: '환자의 의료 데이터 연동을 통해\n더 꼼꼼한 복약지도',
      },
      {
        src: '', // 이미지
        message: '환자의 의료데이터 공유를 통해\n더 섬세한 상담',
      },
    ],
    reverse: false,
  },
  {
    imgSrc: '', // 상단 이미지
    customer: '환자',
    contents: [
      {
        src: '', // 이미지
        message: '복약지도 원스톱 서비스',
        list: [
          '복약 안내문',
          '약 기록 / 알람',
          '의약품 안전성 검토',
          '약제비 영수증 / 보험 청구',
        ],
      },
      {
        src: '', // 이미지
        message: '건강기록 자동 기록 서비스',
      },
      {
        src: '', // 이미지
        message: '환자 주도적인\n개인건강관리 콘텐츠 제공',
      },
    ],
    reverse: true,
  },
];

interface Download {
  text: string;
  link: string;
}

export const downloadData: Download[] = [
  {
    text: '어플 설치하기\n(안드로이드용)',
    link: 'https://play.google.com/store/apps/details?id=kr.co.hdmedi.boedoc',
  },
  {
    text: '어플 설치하기\n(아이폰용)',
    link: 'https://apps.apple.com/kr/app/id1540501938',
  },
  {
    text: '의료인용\n웹페이지',
    link: '',
  },
];

interface Statistic {
  title: string;
  content: string;
}

export const statisticData: Statistic[] = [
  {
    title: '연간 의약품 소비량',
    content: '30조원',
  },
  {
    title: '의약품 부작용',
    content: '25만건',
  },
  {
    title: '사회 경제적 비용',
    content: '5300억원',
  },
];
