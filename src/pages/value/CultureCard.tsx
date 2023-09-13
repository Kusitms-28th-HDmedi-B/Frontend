import styled from 'styled-components';

interface curtureCardProps {
  text: string;
  imgUrl: string;
}
const Container = styled.div<{ $imgUrl: string }>`
  width: 30%;
  height: 400px;
  border-radius: 20px;
  background: url(${(props) => props.$imgUrl});

  display: flex;
  justify-content: center;
`;
const Text = styled.div`
  font-size: 26px;
  font-weight: 700;
  white-space: break-spaces;
  margin-top: 70px;
  text-align: center;
  
`;
const CurtureCard: React.FC<curtureCardProps> = ({ text, imgUrl }) => {
  return (
    <Container $imgUrl={imgUrl}>
      <Text>{text}</Text>
    </Container>
  );
};
export default CurtureCard;
