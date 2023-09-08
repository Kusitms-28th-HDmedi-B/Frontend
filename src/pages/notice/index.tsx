import styled from 'styled-components';
import { Title } from '../info';
import Announcement from './Announce';

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
    </Container>
  );
};

export default Notice;
