import { useSetRecoilState } from 'recoil';
import { currHeaderAtom } from '../../recoil/atom';
import { useEffect } from 'react';
import styled from 'styled-components';
import Banner from './Banner';

const Container = styled.div`
  width: 100vw;
`;
const Main = () => {
  const setCurrHeader = useSetRecoilState(currHeaderAtom);
  useEffect(() => setCurrHeader('transparent'));

  return (
    <Container>
      <Banner></Banner>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
      <div>Maasdasdin</div>
    </Container>
  );
};

export default Main;
