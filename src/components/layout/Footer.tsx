import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FooterLogo from '/assets/logo/footer-logo.svg';
import {
  CategoryData,
  CompanyInfoData,
  ContactInfoData,
} from './data/FooterData';
import Instagram from '/assets/icon/icon-instagram.svg';
import Naver from '/assets/icon/icon-naver.svg';
import Youtube from '/assets/icon/icon-youtube.svg';

function Footer() {
  //헤더에도 사옹될거고, 각각 <Link>도 연결해야하니까 객체형태로 state로 리팩터링 해야함
  return (
    <Body>
      <Container>
        {/* 정보구조도도 */}
        <CategoryConatiner>
          {CategoryData.map(({ title, depth }, index) => (
            <Category key={index}>
              <CategoryTitle>{title}</CategoryTitle>
              <CategoryLinkContainer>
                {depth.map(({ name, url }, index) => (
                  <CategoryLink key={index}>
                    <Link to={url}>{name}</Link>
                  </CategoryLink>
                ))}
              </CategoryLinkContainer>
            </Category>
          ))}
        </CategoryConatiner>

        {/* 회사 위치 및 연락처 */}
        <InfoContainer>
          <img src={FooterLogo} alt="logo" />
          <InfoTextContainer>
            <LocationInfo>
              {CompanyInfoData.map(({ theme, content }, index) => (
                <InfoText key={index}>
                  <pre>{theme}</pre>
                  <pre>{content}</pre>
                </InfoText>
              ))}
            </LocationInfo>
            <ContactInfo>
              {ContactInfoData.map(({ theme, content }, index) => (
                <InfoText key={index}>
                  <pre>{theme}</pre>
                  <pre>{content}</pre>
                </InfoText>
              ))}
            </ContactInfo>
          </InfoTextContainer>

          <RightBox>
            <TermsContainer>
              <Terms>{'서비스 이용약관'}</Terms>
              <Terms>{'개인정보취급방지'}</Terms>
            </TermsContainer>

            {/* SNS 아이콘 */}
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
          </RightBox>
        </InfoContainer>
      </Container>
    </Body>
  );
}
export default Footer;

const Body = styled.div`
  background: #f2f2f2;
  width: 100%;
`;

const Container = styled.div`
  width: 70%;
  margin: auto;
  padding: 95px 0 70px;
`;

const CategoryConatiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CategoryTitle = styled.div`
  font-weight: 600;
  margin-bottom: 33px;
`;

const CategoryLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CategoryLink = styled.div`
  a {
    color: #616161;
    font-weight: 600;
    text-decoration: none;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 110px;
  /* gap: 75px; */

  img {
    width: 188px;
    height: 195.457px;
    flex-shrink: 0;
  }
`;

const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  pre {
    color: #575757;
  }
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 56px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoText = styled.div`
  display: flex;
  &:first-child {
    width: 50px;
  }
  gap: 34px;
`;

const RightBox = styled.div`
  display: flex;
`;

const TermsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  left: -40px;
  gap: 20px;
`;

const Terms = styled.a`
  color: #616161;
  font-weight: 600;
  line-height: normal;

  text-decoration: none;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 16px;
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
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;
