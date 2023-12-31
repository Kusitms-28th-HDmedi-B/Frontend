import styled from 'styled-components';
import Announcement from './Announce';
import Faq from './Faq';
import { useEffect } from 'react';

const Container = styled.div`
  //공통적용, 리팩터링
  width: 70%;
  margin: auto;
  padding: 106px 0 161px; //추가
  margin-bottom: 100px;
`;

const Notice = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container>
      <Announcement></Announcement>
      <Faq></Faq>
    </Container>
  );
};

export default Notice;
