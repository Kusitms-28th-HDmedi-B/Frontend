interface DepthType {
  name: string;
  url: string;
}

interface CategoryType {
  title: string;
  depth: DepthType[];
}

export const CategoryData: CategoryType[] = [
  {
    title: '회사 소개',
    depth: [
      {
        name: '회사 소개',
        url: '/',
      },
    ],
  },
  {
    title: '서비스',
    depth: [
      {
        name: '비대면 복약지도',
        url: '/',
      },
      {
        name: '비대면 통합 서비스',
        url: '/',
      },
    ],
  },
  {
    title: '기술',
    depth: [
      {
        name: '기술 소개',
        url: '/',
      },
    ],
  },
  {
    title: '입사',
    depth: [
      {
        name: '인재상',
        url: '/',
      },
      {
        name: '채용 공고',
        url: '/',
      },
    ],
  },
  {
    title: '컨택',
    depth: [
      {
        name: '회사 정보',
        url: '/info',
      },
      {
        name: '공지사항',
        url: '/notice',
      },
      {
        name: '문의하기',
        url: '/ask',
      },
    ],
  },
  {
    title: '뉴스',
    depth: [
      {
        name: '기사 목록',
        url: '/news',
      },
    ],
  },
];

interface Info {
  theme: string;
  content: string;
}

export const CompanyInfoData: Info[] = [
  {
    theme: '본사',
    content: '서울시 종로구 종로 6, 6층',
  },
  {
    theme: '연구소',
    content: '서울시 동대문구 회기로 85, 카이스트 7호관 7461호',
  },
  {
    theme: '근무지',
    content: '서울시 마포구 마포대로 122, 프론트원 6층',
  },
];

export const ContactInfoData: Info[] = [
  {
    theme: 'Tel.',
    content: '02-6080-2216',
  },
  {
    theme: 'E-mail.',
    content: 'hdmedi@hdmedi.co.kr',
  },
];
