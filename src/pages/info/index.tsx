import { styled } from 'styled-components';
import { useEffect } from 'react';

const Container = styled.div`
  background-color: white;
  width: 80%;
  margin: auto;
`;
const Title = styled.div`
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Map = styled.div`
  width: 400px;
  height: 400px;
`;

const TextBox = styled.div`
  width: 100px;
  height: 100px;
`;

// window 타입 정의 추가
declare global {
  interface Window {
    naver: any;
  }
}

const initMap = () => {
  const map = new window.naver.maps.Map('map', {
    //지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
    center: new window.naver.maps.LatLng(37.56981765163963, 126.97805713023197),
    zoom: 15,
  });

  const marker = new window.naver.maps.Marker({
    position: new window.naver.maps.LatLng(
      37.56981765163963,
      126.97805713023197,
    ),
    map: map,
  });
};

const Info = () => {
  useEffect(() => {
    initMap(); // 네이버지도는 1회만!
  }, []);

  return (
    <Container>
      <Title>위치</Title>
      <Map id="map"></Map>
      <TextBox></TextBox>
    </Container>
  );
};

export default Info;
