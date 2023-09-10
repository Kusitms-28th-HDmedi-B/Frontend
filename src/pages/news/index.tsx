import { useState, useEffect } from 'react';
import styled from 'styled-components';

import PageBar from '../../components/common/PageBar';

interface newsType {
  source: string;
  title: string;
  date: string;
  url: string;
}

const mockupData: newsType[] = [
  {
    source: 'M메디 소비자뉴스',
    title: `1. 삼평원 '보건 의료 빅 데이터 창업경진대회' 최우수상에 일점사 탈로스`,
    date: '2023.09.05',
    url: 'https://www.google.com',
  },
  {
    source: 'M메디 소비자뉴스',
    title: `2. 삼평원 '보건 의료 빅 데이터 창업경진대회' 최우수상에 일점사 탈로스`,
    date: '2023.09.05',
    url: 'https://www.google.com',
  },
  {
    source: 'M메디 소비자뉴스',
    title: `3. 삼평원 '보건 의료 빅 데이터 창업경진대회' 최우수상에 일점사 탈로스`,
    date: '2023.09.05',
    url: 'https://www.google.com',
  },
  {
    source: 'M메디 소비자뉴스',
    title: `4. 삼평원 '보건 의료 빅 데이터 창업경진대회' 최우수상에 일점사 탈로스`,
    date: '2023.09.05',
    url: 'https://www.google.com',
  },
  {
    source: 'M메디 소비자뉴스',
    title: `5. 삼평원 '보건 의료 빅 데이터 창업경진대회' 최우수상에 일점사 탈로스`,
    date: '2023.09.05',
    url: 'https://www.google.com',
  },
  {
    source: 'M메디 소비자뉴스',
    title: `6. 삼평원 '보건 의료 빅 데이터 창업경진대회' 최우수상에 일점사 탈로스`,
    date: '2023.09.05',
    url: 'https://www.google.com',
  },
  {
    source: 'M메디 소비자뉴스',
    title: `7. 삼평원 '보건 의료 빅 데이터 창업경진대회' 최우수상에 일점사 탈로스`,
    date: '2023.09.05',
    url: 'https://www.google.com',
  },
  {
    source: 'M메디 소비자뉴스',
    title: `8. 삼평원 '보건 의료 빅 데이터 창업경진대회' 최우수상에 일점사 탈로스`,
    date: '2023.09.05',
    url: 'https://www.google.com',
  },
  {
    source: 'M메디 소비자뉴스',
    title: `9.삼평원 '보건 의료 빅 데이터 창업경진대회' 최우수상에 일점사 탈로스`,
    date: '2023.09.05',
    url: 'https://www.google.com',
  },
  {
    source: 'M메디 소비자뉴스',
    title: `10. 삼평원 '보건 의료 빅 데이터 창업경진대회' 최우수상에 일점사 탈로스`,
    date: '2023.09.05',
    url: 'https://www.google.com',
  },
];

const News = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <Container>
      <Title>
        <pre>뉴스</pre>
      </Title>
      <ArticleContainer>
        {mockupData
          .slice((page - 1) * 7, (page - 1) * 7 + 7)
          .map(({ source, title, date, url }, idx: number) => (
            <Article key={idx}>
              <ArticleSource>
                <pre>{source}</pre>
              </ArticleSource>
              <ArticleMain>
                <ArticleTitle>
                  <a href={url} target="_blank">
                    {title}
                  </a>
                </ArticleTitle>
                <ArticleDate>
                  <pre>{date}</pre>
                </ArticleDate>
              </ArticleMain>
            </Article>
          ))}
      </ArticleContainer>
      <PageBar
        page={page}
        setPage={setPage}
        maxPage={Math.ceil(mockupData.length / 7)}
      />
    </Container>
  );
};

export default News;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 70%;
  margin: auto;
  padding: 106px 0 161px;
`;

const Title = styled.div`
  align-self: flex-start;
  margin-bottom: 51px;

  pre {
    color: #000;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 86px; /* 238.889% */
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 34px;
  margin-bottom: 116px;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  flex-shrink: 0;

  gap: 19px;
  border-bottom: 1px solid #d8d8d8;
`;

const ArticleSource = styled.div`
  pre {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
  }
`;

const ArticleMain = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 34px;
`;

const ArticleTitle = styled.div`
  width: 538px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  a {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 80% */
    text-decoration: none;
  }
`;

const ArticleDate = styled.div`
  pre {
    color: #000;
    text-align: right;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 80% */
  }
`;
