import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const NewsTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin: 200px 0;
`;
const FlexContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: inherit;
  }
  margin-bottom: 200px;
`;
const NewsCard = styled.div`
  width: 360px;
  margin: 10px;
  border-radius: 1px solid red;
`;
const NewsCardImg = styled.span<{ $imgUrl: string }>`
  width: 360px;
  height: 230px;
  border-radius: 20px;
  background: url(${(props) => props.$imgUrl}) no-repeat;
  background-size: cover;
  background-color: red;
  display: inline-block;
`;
const NewsCardDate = styled.div`
  color: #797979;
  line-height: 34px;
`;
const NewsCardTitle = styled.div`
  height: 70px;
  font-size: 22px;
  font-weight: 600;
  text-overflow: ellipsis;
  line-height: 30px;
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
                {data.title.length > 30
                  ? data.title.slice(0, 25) + '..자세히보기'
                  : data.title}
              </NewsCardTitle>
            </NewsCard>
          </Link>
        ))}
      </FlexContainer>
    </>
  );
};

export default NewsContainer;
