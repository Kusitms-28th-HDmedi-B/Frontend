import styled from 'styled-components';
import { Title } from '../info';
import { useState } from 'react';
import PageBar from '../../components/common/PageBar';
import { Link } from 'react-router-dom';
const AnnouneUl = styled.ul`
  width: 100%;
  height: 250px;
`;
const AnnouneLi = styled.li`
  border-radius: 10px;
  padding: 10px 30px 10px 50px;
  margin: 10px 0;

  &:hover {
    background-color: #f4f4f4;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  div {
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
const DateSpan = styled.span`
  float: right;
`;
interface INotice {
  id: number;
  title: string;
}
const Announcement = () => {
  const [page, setPage] = useState(1);
  const datas: INotice[] = [
    { id: 1, title: '1공지사항입' },
    {
      id: 2,
      title:
        '2공지사항입니다공지사항다공지2공지사항입니다공지사항다공지사항다공지사사항다공지사항2공지사항입니다공지사항다공지사항다공지사2공지사항입니다공지사항다공지사항다공지사',
    },
    { id: 3, title: '3공지사항입니다공지사항' },
    { id: 4, title: '4공지사항입니다공지사항' },
    { id: 5, title: '5공지사항입니다공지사항' },
    { id: 6, title: '6공지사항입니다공지사항' },
    { id: 7, title: '7공지사항입니다공지사항' },
    { id: 8, title: '8공지사항입니다공지사항' },
    { id: 9, title: '9공지사항입니다공지사항' },
    { id: 10, title: '10공지사항입니다공지사항' },
    { id: 11, title: '11공ㄴ지' },
  ];

  return (
    <>
      <Title>공지사항</Title>
      <AnnouneUl>
        {datas.slice((page - 1) * 5, (page - 1) * 5 + 5).map((data, index) => (
          <AnnouneLi key={index}>
            <StyledLink to={`./${data.id}`}>
              <div>{data.title}</div>
            </StyledLink>
            <DateSpan>2023.9.5</DateSpan>
          </AnnouneLi>
        ))}
      </AnnouneUl>
      <PageBar page={page} maxPage={3} setPage={setPage}></PageBar>
    </>
  );
};
export default Announcement;
