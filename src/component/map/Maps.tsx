import { useState, useEffect, useRef } from "react";
import { propsType } from "./searchBar/SearchBar";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";
import markerIcon from "../../assets/map/markerIcon.svg";

// head에 작성한 Kakao API 불러오기
const { kakao } = window as any;

const Maps = (props: propsType) => {
  const navigator = useNavigate();
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const mapRef = useRef<kakao.maps.Map>(null);

  // 초기 지도 중심 : 카카오 판교 아지트
  const initial_lat = 37.39556485367976;
  const initial_lng = 127.1104141120098;

  // 검색어가 바뀔 때마다 재렌더링되도록 useEffect 사용
  useEffect(() => {
    if (!map) return;

    // 장소 검색 객체
    const ps = new kakao.maps.services.Places();

    // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    searchPlaces();

    function searchPlaces() {
      let keyword = props.searchKeyword;

      if (!keyword.trim()) {
        console.log("키워드를 입력해주세요!");
        return;
      }

      // 장소검색 객체를 통해 키워드로 장소검색을 요청
      ps.keywordSearch(keyword, placesSearchCB);
    }

    // 장소검색이 완료됐을 때 호출되는 콜백함수
    function placesSearchCB(data: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        displayPlaces(data);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다.");
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("검색 결과 중 오류가 발생했습니다.");
        return;
      }
    }

    // 검색 결과 목록과 마커를 표출하는 함수
    function displayPlaces(places: any[]) {
      const bounds = new kakao.maps.LatLngBounds();
      // 기존 마커 제거
      removeMarker();

      const newMarkers = places.map((place, i) => {
        const position = new kakao.maps.LatLng(place.y, place.x);

        // 마커를 생성
        const marker = addMarker(position, i, place.place_name);

        // 지도 범위를 확장
        bounds.extend(position);

        // 마커에 마우스 이벤트 추가
        kakao.maps.event.addListener(marker, "mouseover", function () {
          displayInfowindow(marker, place.place_name);
        });

        kakao.maps.event.addListener(marker, "mouseout", function () {
          infowindow.close();
        });

        return marker;
      });

      // 새로운 마커를 상태로 설정
      setMarkers(newMarkers);

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정
      map?.setBounds(bounds);
    }

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수
    function addMarker(position: any, idx: number, title: string) {
      const markerImage = new kakao.maps.MarkerImage(
        markerIcon,
        new kakao.maps.Size(14, 14)
      );

      const marker = new kakao.maps.Marker({
        position,
        image: markerImage,
      });

      marker.setMap(map); // 지도 위에 마커를 표시
      return marker;
    }

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarker() {
      markers.forEach((marker) => marker.setMap(null)); // 지도에서 제거
      setMarkers([]); // 상태 초기화
    }

    // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수
    // 인포윈도우에 장소명을 표시
    function displayInfowindow(marker: any, title: string) {
      const content = `<div style="padding:5px;z-index:1;">${title}</div>`;
      infowindow.setContent(content);
      infowindow.open(map, marker);
    }
  }, [props.searchKeyword, map]);

  return (
    <Map
      ref={mapRef}
      onCreate={setMap}
      center={{ lat: initial_lat, lng: initial_lng }}
      style={{ width: "100%", height: "100%" }}
    >
      {markers.map((marker, index) => (
        <MapMarker
          key={index}
          image={{ src: markerIcon, size: { width: 13, height: 13 } }}
          position={{
            lat: marker.getPosition().getLat(),
            lng: marker.getPosition().getLng(),
          }}
          onClick={() => navigator(`/map/${index}`)}
        />
      ))}
    </Map>
  );
};

export default Maps;
