import { styled } from 'styled-components';
import { useEffect } from 'react';

const MapDiv = styled.div`
  display: inline-block; //나란히 배치하게
  border-radius: 15px;
  width: 734px;
  height: 400px;
  margin: 20px;
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
  marker; //임시..
};

const Map = () => {
  useEffect(() => {
    initMap(); // 네이버지도는 1회만!
  }, []);

  return <MapDiv id="map"></MapDiv>;
};

export default Map;
