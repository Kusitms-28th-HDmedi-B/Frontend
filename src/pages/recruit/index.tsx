import { styled } from 'styled-components';
import { Title } from '../info';
import CheckBox from './CheckBox';

const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Recruit = () => {
  return (
    <>
      <Title>채용 공고</Title>
      <ContentsContainer>
        <CheckBox />
      </ContentsContainer>
    </>
  );
};

export default Recruit;
