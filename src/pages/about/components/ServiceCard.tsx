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
        {AppData.map(
          ({ title, subtitle, logo, link, backgroundUrl, fontColor }) => (
            <AppCard backgroundUrl={backgroundUrl}>
              <TextContainer>
                {logo && <img src={logo} alt="logo" />}
                {title && (
                  <Title>
                    <pre style={{ color: `${fontColor}` }}>{title}</pre>
                  </Title>
                )}
                {subtitle && (
                  <SubTitle>
                    <pre>{subtitle}</pre>
                  </SubTitle>
                )}
              </TextContainer>
              <Button onClick={() => handleClick(link)}>
                <pre>{'서비스 보기'}</pre>
              </Button>
            </AppCard>
          ),
        )}
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

  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    padding: 40px 20px;
    gap: 60px;
  }
`;

interface AppCardType {
  backgroundUrl: string;
}

const AppCard = styled.div<AppCardType>`
  display: flex;
  flex-direction: column;

  position: relative;

  z-index: 3;

  width: 462px;
  height: 300px;
  flex-shrink: 0;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 227.92px;
  }

  border-radius: 20px;
  background: #fff;

  background-image: url(${({ backgroundUrl }) => backgroundUrl});
  background-size: cover;

  box-shadow: 2px 2px 4px 0 gray;
`;

const TextContainer = styled.div`
  display: flex;
  padding: 20px;

  color: #1f64d1;

  img {
    width: 142.2px;
    height: 90px;
    flex-shrink: 0;
  }

  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  padding: 20px 10px;
  pre {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px; /* 112.5% */
    @media screen and (max-width: 500px) {
      font-size: 14px;
      margin-bottom: 7px;
    }
  }
`;

const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px; /* 150% */

  margin-top: 35px;

  @media screen and (max-width: 500px) {
    font-size: 13.44px;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 216px;
  height: 55px;
  flex-shrink: 0;

  @media screen and (max-width: 500px) {
    width: 176.7px;
    height: 45px;
  }

  border-radius: 31px;
  background: #fff;
  border: 2px solid #0070ed;

  position: absolute;
  bottom: 20px;
  right: 20px;

  cursor: pointer;

  pre {
    text-align: center;
    font-weight: 700;
    line-height: 16px; /* 100% */
  }

  animation: float 3s ease-in-out infinite;
  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;
