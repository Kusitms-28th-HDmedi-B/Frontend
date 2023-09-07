import styled from 'styled-components';

const Container = styled.div`
  background: #f2f2f2;
  width: 100%;
  border: 1px solid black;
`;
const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: auto;
  width: 80%; //고정?

  height: 152px;
`;
const Category = styled.div`
  // 카테고리 볼드
  display: flex;
  flex-direction: column;

  :first-child {
    font-weight: 600;
  }
`;
const CategoryList = styled.div`
  font-weight: 400;
  font-size: 16px;

  color: #000000;
`;
function Footer() {
  //헤더에도 사옹될거고, 각각 <Link>도 연결해야하니까 객체형태로 state로 리팩터링 해야함
  const categories = [
    ['회사 소개', '기업 소개', '기업 역사', '핵심 가치'],
    ['서비스', '비대면 복약지도', '비대면 통합 서비스'],
    ['기술', '기술 소개'],
    ['입사', '공고', '인재상', '복지'],
    ['컨택', '기업 위치', '컨택 주소', 'SNS'],
    ['뉴스', '기사, 컨텐츠 목록'],
  ];
  return (
    <Container>
      <CategoryBox>
        {categories.map((categoryText) => (
          <Category key={categoryText[0]}>
            {categoryText.map((list) => (
              <CategoryList key={list}>{list}</CategoryList>
            ))}
          </Category>
        ))}
      </CategoryBox>
    </Container>
  );
}
export default Footer;
