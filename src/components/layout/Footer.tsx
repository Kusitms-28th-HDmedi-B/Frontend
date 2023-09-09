import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FooterLogo from '../../assets/logo/footer-logo.svg';
import { CategoryData, CompanyInfoData, ContactInfoData } from './FooterData';

function Footer() {
  //헤더에도 사옹될거고, 각각 <Link>도 연결해야하니까 객체형태로 state로 리팩터링 해야함
  return (
    <Body>
      <Container>
        {/* 정보구조도도 */}
        <CategoryConatiner>
          {CategoryData.map(({ title, depth }) => (
            <Category>
              <CategoryTitle>{title}</CategoryTitle>
              <CategoryLinkContainer>
                {depth.map(({ name, url }) => (
                  <CategoryLink>
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
              {CompanyInfoData.map(({ theme, content }) => (
                <InfoText>
                  <pre>{theme}</pre>
                  <pre>{content}</pre>
                </InfoText>
              ))}
            </LocationInfo>
            <ContactInfo>
              {ContactInfoData.map(({ theme, content }) => (
                <InfoText>
                  <pre>{theme}</pre>
                  <pre>{content}</pre>
                </InfoText>
              ))}
            </ContactInfo>
          </InfoTextContainer>
        </InfoContainer>

        {/* 아래 점 4개 */}
        <IconContainer>
          <IconWrapper></IconWrapper>
          <IconWrapper></IconWrapper>
          <IconWrapper></IconWrapper>
          <IconWrapper></IconWrapper>
        </IconContainer>
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
  justify-content: flex-start;

  margin-top: 110px;
  gap: 75px;

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

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;

  margin-top: 90px;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  border-radius: 50%;

  background-color: #d9d9d9;
`;
