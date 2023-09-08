import styled from 'styled-components';
import Announcement from './Announce';
import Faq from './Faq';

const Container = styled.div`
  //공통적용, 리팩터링
  width: 70%;
  margin: auto;
  margin-bottom: 100px;
`;

const Notice = () => {
  return (
    <Container>
      <Announcement></Announcement>
      <Faq></Faq>
    </Container>
  );
};

export default Notice;
