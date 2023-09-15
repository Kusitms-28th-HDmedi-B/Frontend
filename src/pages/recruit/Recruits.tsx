import styled from 'styled-components';

import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import arrow from './arrow-icon.svg';
import arrowHover from './arrow-icon-hover.svg';
import PageBar from '../../components/common/PageBar';
import { RecruitResponse } from '.';
import { useRecoilValue } from 'recoil';
import { recruitCategoriesAtom } from '../../recoil/atom';
const RecruitsContainer = styled.div`
  /* margin-left: 5%; */
  width: 70%; //길이에 따라 달라지지 않으려면 고정, 모바일 수정 필요
  height: 100%;
  ul {
    height: 200px;
    margin: auto;
    margin-bottom: 50px;
  }
  ul > div > a {
    text-decoration: none;
    color: inherit;
    li {
      &:hover {
        background-color: #f4f4f4;
      }
    }
  }
`;
const ReCruitsList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  margin: 15px 0;
  padding: 15px 0;
  border-radius: 10px;
  /* background-color: red; */

  a span {
    width: 16px;
    height: 16px;
    cursor: pointer;
    background: url(${arrow}) left top no-repeat;
    background-size: cover;
    display: inline-block;
    position: relative;
    &:hover {
      background: url(${arrowHover}) left top no-repeat;
      background-size: cover;
    }
  }
  div {
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
interface RecruitsProps {
  recruitData: RecruitResponse[];
  maxPage: number;
  nowPages: number[];
}

const Recruits: React.FC<RecruitsProps> = ({
  recruitData,
  maxPage,
  nowPages,
}) => {
  const [page, setPage] = useState(0);
  const [NO_USE, setNowPages] = useState<number[]>([]);
  const categories = useRecoilValue(recruitCategoriesAtom);
  useEffect(() => { //categories가 변경되면 page를 0으로!
    setPage(0);
  }, [categories]);

  NO_USE;
  return (
    <RecruitsContainer>
      <ul>
        {recruitData.slice(page * 3, page * 3 + 3).map((data, index) => (
          <div key={index}>
            <Link to={data.url}>
              <ReCruitsList>
                <div>{data.title} </div>
                <Link to={data.url}>
                  <span></span>
                </Link>
              </ReCruitsList>
            </Link>
            <hr></hr>
          </div>
        ))}
      </ul>
      <PageBar
        maxPage={maxPage}
        page={page}
        setPage={setPage}
        nowPages={nowPages}
        setNowPages={setNowPages}
      ></PageBar>
    </RecruitsContainer>
  );
};
export default Recruits;
