import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FooterLogo from '/assets/logo/footer-logo.svg';
import {
  CategoryData,
  CompanyInfoData,
  ContactInfoData,
  IconData,
} from './data/FooterData';

function Footer() {
  //헤더에도 사옹될거고, 각각 <Link>도 연결해야하니까 객체형태로 state로 리팩터링 해야함
  return (
    <Body>
      <Container>
        {/* 정보구조도 */}
        <CategoryContainer>
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
        </CategoryContainer>

        {/* 회사 위치 및 연락처 */}
        <InfoContainer>
          <Desktop>
            <LogoWrapper>
              <img src={FooterLogo} alt="logo" />
            </LogoWrapper>
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
          </Desktop>

          <RightBox>
            <TermsContainer>
              <Terms>{'서비스 이용약관'}</Terms>
              <Terms>{'개인정보취급방지'}</Terms>
            </TermsContainer>

            {/* SNS 아이콘 */}
            <IconContainer>
              {IconData.map(({ href, imgSrc }) => (
                <IconWrapper href={href} target="_blank" key={href}>
                  <img src={imgSrc} alt="logo" />
                </IconWrapper>
              ))}
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
  padding: 60px 0 70px;
`;

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CategoryTitle = styled.div`
  font-weight: 600;
  margin-bottom: 33px;
  @media screen and (max-width: 500px) {
    margin-bottom: 15px;
  }
`;

const CategoryLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  z-index: 3;
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

  margin-top: 70px;
  /* gap: 75px; */

  @media screen and (max-width: 500px) {
    margin-top: 50px;
  }
`;

const Desktop = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
  img {
    width: 153.89px;
    height: 160px;
    flex-shrink: 0;
  }
`;

const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  pre {
    color: #575757;
  }

  @media screen and (min-width: 500px) {
    margin-left: 50px;
  }
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* margin-bottom: 56px; */
  margin-bottom: 22.71px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoText = styled.div`
  display: flex;
  > pre {
    &:first-child {
      width: 50px;
    }
  }
  gap: 34px;
`;

const RightBox = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const TermsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  left: -40px;
  gap: 20px;

  @media screen and (max-width: 500px) {
    left: 0;
  }
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

  z-index: 2;

  @media screen and (max-width: 500px) {
    justify-content: flex-start;
    margin-top: 20px;
  }
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
