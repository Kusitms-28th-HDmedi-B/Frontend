import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const NewsTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin: 200px 0 80px 0;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin: 100px 0 50px 0;
  }
`;
const FlexContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  a,
  + a {
    text-decoration: none;
    color: inherit;
  }
  margin-bottom: 50px;
`;
const NewsCard = styled.div`
  width: 320px;
  margin: 10px;
  @media screen and (max-width: 500px) {
    width: 220px;
  }
`;
const NewsCardImg = styled.span<{ $imgUrl: string }>`
  width: 100%;
  height: 230px;
  border-radius: 20px;
  background: url(${(props) => props.$imgUrl}) no-repeat;
  background-size: cover;
  background-color: red;
  display: inline-block;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 170px;
  }
`;
const NewsCardDate = styled.div`
  color: #797979;
  line-height: 34px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    line-height: 26px;
  }
`;
const NewsCardTitle = styled.div`
  height: 70px;
  font-size: 22px;
  font-weight: 600;
  text-overflow: ellipsis;
  line-height: 30px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
const NewsMore = styled.div`
  width: 240px;
  height: 60px;
  border-radius: 30px;
  border: 2px solid #64a1e4;
  margin: auto;

  font-weight: 700;
  text-align: center;
  line-height: 60px;
  box-shadow: 2px 2px 4px rgba(71, 91, 221, 0.2); /* 그림자 스타일 지정 */

  margin-bottom: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
    height: 50px;
    border-radius: 25px;
    line-height: 50px;
  }
`;
interface NewsResponse {
  maxpage: number;
  data: [
    {
      id: number;
      title: string;
      source: string;
      link: string;
      publishedAt: string;
      image: string;
    },
  ];
}
const NewsContainer = () => {
  const [newsData, setNewsData] = useState<NewsResponse>();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://back.hdmedi.site/api/news');
        setNewsData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <NewsTitle>NEWS</NewsTitle>
      <FlexContainer>
        {newsData?.data.slice(0, 3).map((data, index) => (
          <Link to={data.link} key={index}>
            <NewsCard>
              <NewsCardImg $imgUrl={data.image}></NewsCardImg>
              <NewsCardDate>{data.publishedAt}</NewsCardDate>
              <NewsCardTitle>
                {data.title.length > 40
                  ? data.title.slice(0, 37) + '...'
                  : data.title}
              </NewsCardTitle>
            </NewsCard>
          </Link>
        ))}
      </FlexContainer>
      <Link to={'/news'}>
        <NewsMore>뉴스 더보기</NewsMore>
      </Link>
    </>
  );
};

export default NewsContainer;
