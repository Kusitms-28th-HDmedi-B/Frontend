import styled from 'styled-components';

interface curtureCardProps {
  text: string;
  imgUrl: string;
  color: string;
  delay: number;
}
const Container = styled.div<{ $imgUrl: string }>`
  width: 20vw;
  height: 25vw;
  border-radius: 20px;
  background: url(${(props) => props.$imgUrl}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`;
const Text = styled.div<{ color: string }>`
  font-size: 26px;
  font-weight: 700;
  white-space: break-spaces;
  margin-top: 70px;
  text-align: center;
  color: ${(props) => props.color};
`;
const CurtureCard: React.FC<curtureCardProps> = ({
  text,
  imgUrl,
  color,
  delay,
}) => {
  return (
    <Container
      $imgUrl={imgUrl}
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
      data-aos-delay={delay}
    >
      <Text color={color}>{text}</Text>
    </Container>
  );
};
export default CurtureCard;
