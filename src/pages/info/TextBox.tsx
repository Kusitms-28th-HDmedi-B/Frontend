import { styled } from 'styled-components';
import Instagram from '/assets/icon/icon-instagram.svg';
import Naver from '/assets/icon/icon-naver.svg';
import Youtube from '/assets/icon/icon-youtube.svg';

const Container = styled.span`
  display: inline-block;
  width: 450px;
  height: 350px;
  /* background-color: #f9f4f4e8; */
  padding-left: 50px;
`;
const TextList = styled.ul`
  list-style-type: circle; //불렛위치 조정필요
  margin-bottom: 80px;
  li {
    margin: 30px 0px;
  }
`;

const IconContainer = styled.div`
  display: flex;

  gap: 20px;
`;

const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  flex-shrink: 0;

  border-radius: 50%;

  background-color: #d9d9d9;

  img {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }
`;

const TextBox = () => {
  return (
    <Container>
      <TextList>
        <li>본사 : 서울시 종로구 종로 6, 6층</li>
        <li>연구소 : 서울시 동대문구 회기로 85, 카이스트 7호관 7416호</li>
        <li>근무지 : 서울시 마포구 마포대로 122, 프론트원 6층</li>
        <li>02-6080-2216</li>
        <li>hdmedi@hdmedi.co.kr</li>
      </TextList>
      <IconContainer>
        <IconWrapper
          href="https://www.instagram.com/upp_hdmedi/"
          target="_blank"
        >
          <img src={Instagram} alt="insta" />
        </IconWrapper>
        {/* Todo: 네이버 링크 추가 */}
        <IconWrapper>
          <img src={Naver} alt="naver" />
        </IconWrapper>
        <IconWrapper
          href="https://www.youtube.com/@user-yo8bf6in2k"
          target="_blank"
        >
          <img src={Youtube} alt="youtube" />
        </IconWrapper>
      </IconContainer>
    </Container>
  );
};

export default TextBox;
