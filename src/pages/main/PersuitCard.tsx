import styled from 'styled-components';
import { persuitCardProps } from './bannerData';

const Container = styled.div<{ $imgUrl: string }>`
  height: 400px;
  width: 400px;
  border-radius: 20px;
  font-weight: 600;
  background: url(${(props) => props.$imgUrl}) no-repeat;
  background-size: cover;
`;
const Title = styled.div`
  font-size: 34px;
`;
const StyledUl = styled.ul`
  li {
    white-space: break-spaces;
  }
`;
const PersuitCard: React.FC<persuitCardProps> = ({
  title,
  content,
  imgUrl,
}) => {
  return (
    <Container $imgUrl={imgUrl}>
      <Title>{title}</Title>
      <StyledUl>
        {content.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </StyledUl>
    </Container>
  );
};
export default PersuitCard;
