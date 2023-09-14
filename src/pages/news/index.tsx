import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from '../../apis';

import PageBar from '../../components/common/PageBar';
import { useQuery } from 'react-query';

interface NewsType {
  id: number;
  title: string;
  source: string;
  link: string;
  publishedAt: string;
}

const News = () => {
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(-1);

  const fetchNews = () =>
    Axios.get('/api/news', {
      params: {
        page,
      },
    });

  const { data, isLoading } = useQuery(['api', 'news', page], fetchNews, {
    staleTime: 10 * 5000,
    cacheTime: 10 * 5000 + 50,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const newsData = data?.data;

  useEffect(() => {
    if (isLoading) return;
    setMaxPage(newsData?.maxpage);
  }, [data]);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <Container>
      <Title>
        <pre>뉴스</pre>
      </Title>
      {newsData && maxPage !== -1 && (
        <>
          <ArticleContainer>
            {newsData?.data.map(
              ({ id, title, source, link, publishedAt }: NewsType) => (
                <Article key={id}>
                  <ArticleSource>
                    <pre>{source}</pre>
                  </ArticleSource>
                  <ArticleMain>
                    <ArticleTitle>
                      <a href={link} target="_blank">
                        {title}
                      </a>
                    </ArticleTitle>
                    <ArticleDate>
                      <pre>{publishedAt}</pre>
                    </ArticleDate>
                  </ArticleMain>
                </Article>
              ),
            )}
          </ArticleContainer>
          <PageBar page={page} setPage={setPage} maxPage={maxPage} />
        </>
      )}
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
