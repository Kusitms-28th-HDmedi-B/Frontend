import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { currHeaderAtom } from '../../recoil/atom';
import { useEffect } from 'react';

import banner from '../../../public/assets/image/ValueBannerEx.png';
import { bannerText } from './valueData';

const Container = styled.div`
  width: 100vw;
  margin-bottom: 100px;
`;
const Banner = styled.div`
  width: 100%;
  height: 700px;
  background: url(${banner}) no-repeat center/cover;

  text-align: center;
  line-height: 700px;
  font-size: 50px;
  font-weight: 700;
`;
const Value = () => {
  const setCurrHeader = useSetRecoilState(currHeaderAtom);
  useEffect(() => setCurrHeader('transparent'));
  return (
    <Container>
      <Banner>{bannerText}</Banner>
    </Container>
  );
};

export default Value;
