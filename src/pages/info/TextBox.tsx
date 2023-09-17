import { styled } from 'styled-components';
import Instagram from '/assets/icon/icon-instagram.svg';
import Naver from '/assets/icon/icon-naver.svg';
import Youtube from '/assets/icon/icon-youtube.svg';
import { IconData } from '../../components/layout/data/FooterData';

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
        <li>Tel : 02-6080-2216</li>
        <li>E-mail : hdmedi@hdmedi.co.kr</li>
      </TextList>
      {/* SNS 아이콘 */}
      <IconContainer>
        {IconData.map(({ href, imgSrc }) => (
          <IconWrapper href={href} target="_blank" key={href}>
            <img src={imgSrc} alt="logo" />
          </IconWrapper>
        ))}
      </IconContainer>
    </Container>
  );
};

export default TextBox;
