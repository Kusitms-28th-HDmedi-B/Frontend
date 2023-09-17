import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../info';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Container = styled.div`
  //공통적용, 리팩터링
  width: 70%;
  margin: auto;
  padding: 106px 0 161px; //추가
  margin-bottom: 100px;
`;
const NoticeTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 30px 0;
`;
const NoticeDate = styled.div`
  color: #b4b4b4;
  /* font-size: 16px; */
  margin: 15px 0;
`;
const NoticeContent = styled.div`
  //pre로 변경
  margin: 30px 0;
  white-space: break-spaces;
  line-height: 24px;
`;
const BackBtn = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;
interface detailResponse {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}
const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailData, setDetailData] = useState<detailResponse>();

  useEffect(() => {
    //react-query로 수정
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://back.hdmedi.site/api/announcement/${id}`,
        );
        setDetailData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Container>
      <Title>공지사항</Title>
      <NoticeTitle>{detailData?.title}</NoticeTitle>
      <NoticeDate>{detailData?.createdAt}</NoticeDate>
      <hr />
      <NoticeContent>{detailData?.content}</NoticeContent>
      <BackBtn onClick={() => navigate('../')}>목록으로 돌아가기</BackBtn>
    </Container>
  );
};

export default Detail;
