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

const TextBox = styled.div`
  width: 100px;
  height: 100px;
`;
const Info = () => {
  useEffect(() => {
    let map = null;
    let marker = null;
    const initMap = () => {
      map = new window.naver.maps.Map('map', {
        //지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
        center: new window.naver.maps.LatLng(
          37.56981765163963,
          126.97805713023197,
        ),
        zoom: 15,
      });

      marker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          37.56981765163963,
          126.97805713023197,
        ), //Marker 추가, 좌표에 마커가 찍힌다.
        map: map,
      });
    };
    initMap();
  }, []);

  const mapStyle = {
    width: '45vw',
    height: '22vw',
  };
  return (
    <Container>
      <Title>위치</Title>
      {/* <Map></Map> */}
      <div id="map" style={mapStyle} />
      <TextBox></TextBox>
    </Container>
  );
};

export default Info;
