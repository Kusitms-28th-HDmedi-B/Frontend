import { styled } from 'styled-components';
import { Title } from '../info';
import CheckBox from './CheckBox';
import { useState } from 'react';
import arrow from './arrow-icon.svg';
import arrowHover from './arrow-icon-hover.svg';
import PageBar from '../../components/common/PageBar';

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
interface IRecruit {
  category: 'HR' | 'IT' | 'MARKETING' | 'ACCOUNT';
  title: string;
  url: string;
}
const Recruit = () => {
  const datas: IRecruit[] = [
    {
      category: 'HR',
      title:
        '1[HR] [신입/경력] 2023 전국 대규모 공개채용 초봉 1억 시작 내집마련의 꿈 내집마련의 꿈v 내집마련의 꿈  ',
      url: 'https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwiJ-o2216KBAxXJk1YBHdEUDpwQPAgJ',
    },
    {
      category: 'IT',
      title: '2[IT] SW엔지니어 모집 공고 당신도 이재용이 될 수 있습니다',
      url: 'https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwiJ-o2216KBAxXJk1YBHdEUDpwQPAgJ',
    },
    {
      category: 'MARKETING',
      title: '3[마케팅] 마케팅 전문가 제2의 스티브잡스 모집 공고',
      url: 'https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwiJ-o2216KBAxXJk1YBHdEUDpwQPAgJ',
    },
    {
      category: 'ACCOUNT',
      title: '4[회계] 니 돈을 내 돈처럼 사용하라, 회삿돈으로 비트코인 가능',
      url: 'https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwiJ-o2216KBAxXJk1YBHdEUDpwQPAgJ',
    },
    {
      category: 'HR',
      title:
        '5[HR] [신입/경력] 2023 전국 대규모 공개채용 초봉 1억 시작 내집마련의 꿈 내집마련의 꿈v 내집마련의 꿈  ',
      url: 'https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwiJ-o2216KBAxXJk1YBHdEUDpwQPAgJ',
    },
    {
      category: 'HR',
      title: '6[IT] SW엔지니어 모집 공고 당신도 이재용이 될 수 있습니다',
      url: 'https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwiJ-o2216KBAxXJk1YBHdEUDpwQPAgJ',
    },
    {
      category: 'HR',
      title: '7[마케팅] 마케팅 전문가 제2의 스티브잡스 모집 공고',
      url: 'https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwiJ-o2216KBAxXJk1YBHdEUDpwQPAgJ',
    },
    {
      category: 'HR',
      title: '8[회계] 니 돈을 내 돈처럼 사용하라, 회삿돈으로 비트코인 가능',
      url: 'https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwiJ-o2216KBAxXJk1YBHdEUDpwQPAgJ',
    },
  ];
  const [page, setPage] = useState(1);
  // const pageBarProps = { maxPage: 2, page: 0, setPage: setPage };c
  console.log('rerendeR1');
  return (
    <Container>
      <Title>채용 공고</Title>
      <ContentsContainer>
        <CheckBox />
        <RecruitsContainer>
          <ul>
            {datas.slice((page - 1) * 3, (page - 1) * 3 + 3).map((data) => (
              <>
                <ReCruitsList>
                  <div>{data.title} </div>

                  <a href="https://www.google.com/search?q=%EB%88%84%EB%A5%B4%EC%A7%80%EB%A7%88%EC%84%B8%EC%9A%94&sca_esv=563581542&sxsrf=AB5stBhMvU3_WwzJPw3Bjxaq5XAFQ3inwA%3A1694137070377&ei=7nr6ZJ3bFvPT1e8P-bin2As&ved=0ahUKEwidip-y8JmBAxXzafUHHXncCbsQ4dUDCA8&uact=5&oq=%EB%88%84%EB%A5%B4%EC%A7%80%EB%A7%88%EC%84%B8%EC%9A%94&gs_lp=Egxnd3Mtd2l6LXNlcnAiEuuIhOultOyngOuniOyEuOyalDIFEAAYgAQyCRAAGAUYHhjxBEjjJlCpDljmJHAReACQAQWYAYEBoAH3D6oBBDEuMTe4AQPIAQD4AQGoAgrCAgcQIxjqAhgnwgIIEAAYgAQYsQPCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGIMBwgIFEC4YgATCAgQQABgDwgIKEAAYgAQYFBiHAsICBxAjGIoFGCfCAhEQLhiABBixAxiDARjHARjRA8ICCBAuGIAEGNQCwgIUEC4YgAQYlwUY3AQY3gQY4ATYAQHCAgcQABgNGIAEwgIGEAAYHhgNwgIIEAAYHhgNGA_CAgoQABgNGIAEGLEDwgINEAAYDRiABBixAxiDAcICDRAuGA0YgAQYsQMYgwHCAgcQLhgNGIAEwgIGEAAYAxgNwgINEC4YDRiABBjHARivAcICCBAAGAUYHhgP4gMEGAAgQYgGAboGBggBEAEYFA&sclient=gws-wiz-serp">
                    <span></span>
                  </a>
                </ReCruitsList>

                <hr></hr>
              </>
            ))}
          </ul>
          <PageBar maxPage={3} page={page} setPage={setPage}></PageBar>
        </RecruitsContainer>
      </ContentsContainer>
    </Container>
  );
};

export default Recruit;
