import styled from 'styled-components';
import { AppData } from '../data';

const ServiceCard = () => {
  return (
    <Container>
      <InnerContainer>
        {/* Todo: 누르면 서비스 소개 탭으로 이동하게 */}
        {AppData.map(({ title, subtitle }) => (
          <AppCard>
            <TextContainer>
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
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
  background: #f1f1f1;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 70%;
  margin: auto;
  padding: 77px 0;
`;

const AppCard = styled.div`
  width: 407px;
  height: 407px;
  flex-shrink: 0;

  border-radius: 20px;
  background: #d9d9d9;

  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  padding: 50px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 36px; /* 112.5% */
  margin-bottom: 23px;
`;

const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px; /* 150% */
`;
