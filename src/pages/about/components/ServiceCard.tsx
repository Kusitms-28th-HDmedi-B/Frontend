import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AppData } from '../data';

const ServiceCard = () => {
  const navigate = useNavigate();

  const handleClick = useCallback((link: string): void => {
    navigate(link);
  }, []);

  return (
    <Container>
      <InnerContainer>
        {/* Todo: 누르면 서비스 소개 탭으로 이동하게 */}
        {AppData.map(({ title, subtitle, logo, link }) => (
          <AppCard onClick={() => handleClick(link)} data-aos="zoom-in">
            <TextContainer>
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
              <img src={logo} alt="logo" />
            </TextContainer>
          </AppCard>
        ))}
      </InnerContainer>
    </Container>
  );
};

export default ServiceCard;

const Container = styled.div`
  width: 100%;
  background: linear-gradient(0deg, #e8ebf0 0%, #e8ebf0 100%);
  padding: 150px 0;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 70%;
  margin: auto;
  padding: 77px 0;
`;

const AppCard = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;

  z-index: 3;

  width: 462px;
  height: 300px;
  flex-shrink: 0;

  border-radius: 20px;
  background: #fff;

  box-shadow: 2px 2px 4px 0 gray;
`;

const TextContainer = styled.div`
  padding: 50px;
  color: #1f64d1;

  img {
    width: 142.2px;
    height: 90px;
    flex-shrink: 0;
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px; /* 112.5% */
  margin-bottom: 23px;
`;

const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px; /* 150% */
`;
