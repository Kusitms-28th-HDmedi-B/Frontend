import { styled } from 'styled-components';
import { Title } from '../info';
import CheckBox from './CheckBox';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';

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
  const [categories, setCategories] = useRecoilState(recruitCategoriesAtom);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://hdmedi.site/api/career');
        setRecruitData(response.data);
        setMaxPage(Math.floor((response.data.length + 2) / 3));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
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
  // console.log('걸러진결과 : ', filteredData.length);
  // setMaxPage(Math.floor((filteredData.length + 2) / 3));
  return (
    <Container>
      <Title>채용 공고</Title>
      <ContentsContainer>
        <CheckBox />
        {recruitData.length > 0 && (
          <Recruits
            maxPage={Math.floor((filteredData.length + 2) / 3)}
            recruitData={filteredData}
          />
        )}
      </ContentsContainer>
    </Container>
  );
};

export default Recruit;
