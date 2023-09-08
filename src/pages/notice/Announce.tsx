import styled from 'styled-components';
import { Title } from '../info';
import { useState } from 'react';
import PageBar from '../../components/common/PageBar';
const AnnouneUl = styled.ul`
  width: 100%;
  height: 250px;
`;
const AnnouneLi = styled.li`
  border-radius: 10px;
  padding: 10px 30px 10px 50px;
  margin: 10px 0;
  span {
    float: right;
  }
  &:hover {
    background-color: #f4f4f4;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const DateSpan = styled.span``;
const Announcement = () => {
  const [page, setPage] = useState(1);
  const datas = [
    '1공지사항입',
    '2공지사항입니다공지사항다공지사항다공지사항',
    '3공지사항입니다공지사항',
    '4공지사항입니다공지사항',
    '5공지사항입니다공지사항',
    '6공지사항입니다공지사항',
    '7공지사항입니다공지사항',
    '8공지사항입니다공지사항',
    '9공지사항입니다공지사항',
    '10공지사항입니다공지사항',
    '11공ㄴ지',
  ];
  return (
    <>
      <Title>공지사항</Title>
      <AnnouneUl>
        {datas.slice((page - 1) * 5, (page - 1) * 5 + 5).map((data, index) => (
          <AnnouneLi key={index}>
            <a href="https://www.naver.com/">{data}</a>
            <DateSpan>2023.9.5</DateSpan>
          </AnnouneLi>
        ))}
      </AnnouneUl>
      <PageBar page={page} maxPage={3} setPage={setPage}></PageBar>
    </>
  );
};
export default Announcement;
