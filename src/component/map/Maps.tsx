import { Map, MapMarker } from "react-kakao-maps-sdk";
export default function Maps() {
  // 초기 지도 중심 : 카카오 판교 아지트
  const initial_lat = 37.39556485367976;
  const initial_lng = 127.1104141120098;

  return (
    <>
      <Map
        center={{ lat: initial_lat, lng: initial_lng }}
        style={{ width: "100%", height: "100%" }}
      >
        <MapMarker
          position={{ lat: initial_lat, lng: initial_lng }}
        ></MapMarker>
      </Map>
    </>
  );
}
