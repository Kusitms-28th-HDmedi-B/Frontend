import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import arrow from './arrow-icon.svg';
import arrowHover from './arrow-icon-hover.svg';
import PageBar from '../../components/common/PageBar';
import { RecruitResponse } from '.';
const RecruitsContainer = styled.div`
  /* margin-left: 5%; */
  width: 70%; //길이에 따라 달라지지 않으려면 고정, 모바일 수정 필요
  height: 100%;
  ul {
    height: 200px;
    margin: auto;
  }
`;
const ReCruitsList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  margin: 25px 0;
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
}

const Recruits: React.FC<RecruitsProps> = ({ recruitData, maxPage }) => {
  const [page, setPage] = useState(1);

  return (
    <RecruitsContainer>
      <ul>
        {recruitData
          .slice((page - 1) * 3, (page - 1) * 3 + 3)
          .map((data, index) => (
            <div key={index}>
              <ReCruitsList>
                <div>{data.title} </div>
                <Link to={data.url}>
                  <span></span>
                </Link>
              </ReCruitsList>

              <hr></hr>
            </div>
          ))}
      </ul>
      <PageBar maxPage={maxPage} page={page} setPage={setPage}></PageBar>
    </RecruitsContainer>
  );
};
export default Recruits;