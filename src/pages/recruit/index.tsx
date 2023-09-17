import { styled } from 'styled-components';
import { Title } from '../info';
import CheckBox from './CheckBox';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';

import Recruits from './Recruits';
import { recruitCategoriesAtom } from '../../recoil/atom';

const Container = styled.div`
  width: 70%;
  margin: auto;
  margin-bottom: 100px;
  padding: 106px 0 161px; //추가
`;
const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between; // 왼쪽에 붙여야 함
  align-items: start;
  font-size: 20px;
  width: 100%; //? 부모기준이니가 100프로
  height: 300px;
`;
const NoRecruit = styled.div`
  width: 70%;
  height: 100px;
  /* background-color: red; */
  text-align: center;
  line-height: 100px;
  font-size: 28px;
  font-weight: 700;
`;
export interface RecruitResponse {
  id: number;
  title: string;
  url: string;
  category: string;
}
// interface RecruitsProps {
//   recruitData: RecruitResponse[];
//   maxPage: number;
// }

const Recruit = () => {
  const [recruitData, setRecruitData] = useState<RecruitResponse[]>([]);
  const [maxPage, setMaxPage] = useState(1);
  const [nowPages, setNowPages] = useState<number[]>([]);
  const categories = useRecoilValue(recruitCategoriesAtom);
  maxPage;
  const numOfPage = 3;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://back.hdmedi.site/api/career');
        setRecruitData(response.data);
        setMaxPage(Math.floor((response.data.length + 2) / 3));
        setNowPages(
          maxPage + 1 >= numOfPage
            ? Array(numOfPage)
                .fill(0)
                .map((_, index) => index)
            : Array(maxPage + 1)
                .fill(0)
                .map((_, index) => index),
        );
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredData: RecruitResponse[] = [];
  recruitData.forEach((val) => {
    // const LOGIC = [
    //   ['HR', 0],
    //   ['MARKETING', 1],
    //   ['IT', 2],
    //   ['ACCOUNTING', 3],
    // ];
    // console.log(val);
    if (val.category === 'HR' && categories[0] === true) {
      filteredData.push(val);
    } else if (val.category === 'MARKETING' && categories[1] === true) {
      filteredData.push(val);
    } else if (val.category === 'ACCOUNTING' && categories[2] === true) {
      filteredData.push(val);
    } else if (val.category === 'IT' && categories[3] === true) {
      filteredData.push(val);
    }
  });

  // setMaxPage(Math.floor((filteredData.length + 2) / 3));

  return (
    <Container>
      <Title>채용 공고</Title>
      <ContentsContainer>
        <CheckBox />
        {recruitData.length > 0 && filteredData.length > 0 ? (
          <Recruits
            maxPage={Math.floor((filteredData.length + 2) / 3) - 1}
            nowPages={nowPages}
            recruitData={filteredData}
          />
        ) : (
          <NoRecruit>현재 채용중이 아닙니다😭</NoRecruit>
        )}
      </ContentsContainer>
    </Container>
  );
};

export default Recruit;
