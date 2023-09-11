import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../info';
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
`;
const BackBtn = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
`;

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const text = `안녕하세요 에이치디메디 입니다.
  나는 잘 지내
끼니도 거르지 않았어
그저 시간이 멈춰있어
굳이 잊으려 하지도 않아 그래
네가 맞았어 죽을 것 같이 아팠지만
나름대로 잘 지내게 돼
허전함이 날 조금 괴롭히는 것만 빼면 말야
참 보고 싶어
길을 걸을 때, 나를 감싸주던
따스했던 네 맘이 그리워
발을 맞추며 설레어하던
사랑했던 우리가 그리워
난 oh
그때가 그리워
참 보고 싶어
먹구름이 날 찾아와
어둡게 하고
괜찮던 맘을 괜시리 아프게 할 때면
너를 잊어야 할까 oh
길을 걸을 때, 나를 감싸주던
따스했던 네 맘이 그리워
발을 맞추며 설레어하던
사랑했던 우리가 그리워
난 oh 그때가 그리워
참 보고 싶어
시들어 버린 꽃
찢겨져 버린 맘
 이거 근데 개행은 어떻게 나타내지? 백엔드만세안녕하세요 에이치디메디 입니다.
 나는 잘 지내
끼니도 거르지 않았어
그저 시간이 멈춰있어
굳이 잊으려 하지도 않아 그래
네가 맞았어 죽을 것 같이 아팠지만
나름대로 잘 지내게 돼
허전함이 날 조금 괴롭히는 것만 빼면 말야
참 보고 싶어
길을 걸을 때, 나를 감싸주던
따스했던 네 맘이 그리워
발을 맞추며 설레어하던
사랑했던 우리가 그리워
난 oh
그때가 그리워
참 보고 싶어
먹구름이 날 찾아와
어둡게 하고
괜찮던 맘을 괜시리 아프게 할 때면
너를 잊어야 할까 oh
길을 걸을 때, 나를 감싸주던
따스했던 네 맘이 그리워
발을 맞추며 설레어하던
사랑했던 우리가 그리워
난 oh 그때가 그리워
참 보고 싶어
시들어 버린 꽃
찢겨져 버린 맘
이거 근데 개행은 어떻게 나타내지? 백엔드만세안녕하세요 에이치디메디 입니다.
나는 잘 지내
끼니도 거르지 않았어
그저 시간이 멈춰있어
굳이 잊으려 하지도 않아 그래
네가 맞았어 죽을 것 같이 아팠지만
나름대로 잘 지내게 돼
허전함이 날 조금 괴롭히는 것만 빼면 말야
참 보고 싶어
길을 걸을 때, 나를 감싸주던
따스했던 네 맘이 그리워
발을 맞추며 설레어하던
사랑했던 우리가 그리워
난 oh
그때가 그리워
참 보고 싶어
먹구름이 날 찾아와
어둡게 하고
괜찮던 맘을 괜시리 아프게 할 때면
너를 잊어야 할까 oh
길을 걸을 때, 나를 감싸주던
따스했던 네 맘이 그리워
발을 맞추며 설레어하던
사랑했던 우리가 그리워
난 oh 그때가 그리워
참 보고 싶어
시들어 버린 꽃
찢겨져 버린 맘
이거 근데 개행은 어떻게 나타내지? 백엔드만세  `;
  return (
    <Container>
      <Title>공지사항</Title>
      <NoticeTitle>2023년 클라우드 바우처 공급기업 등록 {id} 번!!</NoticeTitle>
      <NoticeDate>2023.9.5</NoticeDate>
      <hr />
      <NoticeContent>{text}</NoticeContent>
      <BackBtn onClick={() => navigate('../')}>목록으로 돌아가기</BackBtn>
    </Container>
  );
};

export default Detail;
