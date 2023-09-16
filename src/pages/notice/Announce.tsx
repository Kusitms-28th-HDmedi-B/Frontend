import styled from 'styled-components';
import { Title } from '../info';
import { useEffect, useState } from 'react';
import PageBar from '../../components/common/PageBar';
import { Link } from 'react-router-dom';
import Axios from '../../apis';
import { useQuery } from 'react-query';
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
    display: inline-block;
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
const DateSpan = styled.span`
  float: right;
`;
// interface INotice {
//   id: number;
//   title: string;
// }
// interface NoticeResponse {
//   maxpage: number;
//   data: [
//     {
//       id: number;
//       title: string;
//       content: string;
//       createdAt: string;
//     },
//   ];
// }
const fetchNotice = () => Axios.get('/api/announcement');

const Announcement = () => {
  const { data, isLoading } = useQuery(['api', 'notice'], fetchNotice, {
    staleTime: 10 * 5000,
    cacheTime: 10 * 5000 + 50,
  });
  console.log(data, isLoading);
  const [page, setPage] = useState(0);
  const [nowPages, setNowPages] = useState<number[]>([0, 1, 2]);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    setMaxPage(Math.floor((data?.data.data.length + 4) / 5) - 1); //이
  }, [data]);
  return (
    <>
      <Title>공지사항</Title>
      <AnnouneUl>
        {data?.data.data
          .slice(page * 5, page * 5 + 5)
          .map((notice: any, index: number) => (
            <AnnouneLi key={index}>
              <StyledLink to={`./${notice.id}`}>
                <div>{notice.title}</div>
              </StyledLink>
              <DateSpan>{notice.createdAt}</DateSpan>
            </AnnouneLi>
          ))}
      </AnnouneUl>
      <PageBar
        page={page}
        maxPage={maxPage}
        setPage={setPage}
        nowPages={nowPages}
        setNowPages={setNowPages}
      ></PageBar>
    </>
  );
};
export default Announcement;
