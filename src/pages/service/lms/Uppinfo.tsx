import styled from 'styled-components';
import info1 from '/assets/image/lms/lms-info1.png';
import info2 from '/assets/image/lms/lms-info2.png';
import info3 from '/assets/image/lms/lms-info3.png';
import info4 from '/assets/image/lms/lms-info4.png';
import info5 from '/assets/image/lms/lms-info5.png';
import infoBg1 from '/assets/image/lms/lms-info-bg-1.svg';
import infoBg2 from '/assets/image/lms/lms-info-bg-2.svg';
//이 페이지 코드 개쌉망했다 그냥
const Container = styled.div`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    span {
      background-size: cover;
      width: 500px;
      height: 300px;
      /* margin: 100px 50px 100px 150px; */
      display: inline-block;
    }
  }
  > div:nth-of-type(even) {
    background-color: white;
    span {
      margin-left: 150px;
    }
  }
  > div:nth-of-type(odd) {
    background-color: white;
    div {
      text-align: right;
    }
    ul {
      list-style-type: none;
      margin-right: -15px;
    }
    span {
      margin-right: 250px;
    }
  }
  > ul {
  }
  ul {
    list-style: disk;
    font-size: 20px;
    line-height: 35px;
    ul {
      margin-left: 20px;
      list-style: '- ';
      color: black;
    }
  }
`;
const Container1 = styled.div`
  background: url(${infoBg1}) no-repeat center left;

  background-size: cover;

  span {
    background: url(${info1}) no-repeat;
  }
`;
const Container2 = styled.div`
  background: url(${infoBg2}) no-repeat center right;

  background-size: cover;

  span {
    background: url(${info2}) no-repeat;
  }
`;
const Container3 = styled.div`
  background: url(${infoBg1}) no-repeat center left;

  background-size: cover;

  span {
    background: url(${info3}) no-repeat;
  }
`;
const Container4 = styled.div`
  background: url(${infoBg2}) no-repeat center right;

  background-size: cover;

  span {
    background: url(${info4}) no-repeat;
  }
`;
const Container5 = styled.div`
  background: url(${infoBg1}) no-repeat center left;

  background-size: cover;

  span {
    background: url(${info5}) no-repeat;
  }
`;
const TextContainer = styled.div``;
const Title = styled.div`
  display: inline-block;
  font-size: 40px;
  font-weight: 700;
  margin: 40px -20px;
`;

const Uppinfo = () => {
  return (
    <Container>
      <Container1>
        <span
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        ></span>
        <TextContainer
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <Title>비즈니스 사이트 생성</Title>
          <ul>
            <li>1. 기업 만의 비즈니스 사이트 생성</li>
          </ul>
        </TextContainer>
      </Container1>
      <Container2>
        <TextContainer
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <Title>사용자 관리</Title>
          <ul>
            <li>
              사용자 권한 구분
              <ul>
                <li>통합 관리자, 콘텐츠 관리자, 사용자 권한 구분</li>
              </ul>
            </li>
            <li>
              편리한 사용자 등록
              <ul>
                <li>링크로 간단한 회원 초대</li>
              </ul>
            </li>
          </ul>
        </TextContainer>
        <span
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        ></span>
      </Container2>
      <Container3>
        <span
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        ></span>
        <TextContainer
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <Title>콘텐츠 관리</Title>
          <ul>
            <li>1. 간편한 콘텐츠 업로드</li>
            <li>2. 사용자 대상 퀴즈 & 설문 가능</li>
          </ul>
        </TextContainer>
      </Container3>
      <Container4>
        <TextContainer
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <Title>사용자 콘텐츠 이용 관리</Title>
          <ul>
            <li>
              실시간 구독 및 이용 현황 확인
              <ul>
                <li>각 콘텐츠의 구독 및 이용 현황 실시간 확인</li>
                <li>퀴즈, 설문 결과 확인</li>
              </ul>
            </li>
            <li>
              수료증 발급
              <ul>
                <li>콘텐츠 수강 증명 수료증 다운 기능</li>
              </ul>
            </li>
          </ul>
        </TextContainer>
        <span
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        ></span>
      </Container4>
      <Container5>
        <span
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        ></span>
        <TextContainer
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <Title>시스템 관리</Title>{' '}
          <ul>
            <li>1. 공지사항, 팝업, 배너, FAQ 관리</li>
          </ul>
        </TextContainer>
      </Container5>
    </Container>
  );
};
export default Uppinfo;
