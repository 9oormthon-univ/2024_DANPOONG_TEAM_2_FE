import { Map, MapMarker } from "react-kakao-maps-sdk";
import { projectDetailDummy } from "../../moks/projectDetailDummy";
import { useNavigate } from "react-router-dom";
export default function Maps() {
  // 초기 지도 중심 : 카카오 판교 아지트
  const initial_lat = 37.39556485367976;
  const initial_lng = 127.1104141120098;
  const dummy = projectDetailDummy;
  const navigator = useNavigate();
  return (
    <>
      <Map
        center={{ lat: initial_lat, lng: initial_lng }}
        style={{ width: "100%", height: "100%" }}
      >
        {dummy.map((project) => {
          return (
            <MapMarker
              position={{
                lat: project.x,
                lng: project.y,
              }}
              image={{
                src: `${project.profileImg}`,
                size: { width: 39, height: 39 },
              }}
              onClick={() => navigator(`/map/${project.id}`)}
            ></MapMarker>
          );
        })}
      </Map>
    </>
  );
}
