import styled from "styled-components";
import Maps from "../../component/map/Maps";
import { Search } from "./MapPage.style";
import SearchBar from "../../component/map/searchBar/SearchBar";
import FilterContainer from "../../component/map/filter/FilterContainer";
import ProjectListBS from "../../component/bottomSheet/ProjectListBS";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { useFilterStore } from "../../stores/useSelectedValues";
import { useMarkerStore } from "../../stores/useMarkerStore";

export default function MapPage() {
  const [Keyword, setKeyword] = useState("");
  const { selectedFilters } = useFilterStore();
  const { globalMarkers } = useMarkerStore();
  useEffect(() => {
    console.log("globalMarkers", globalMarkers);
  }, [globalMarkers]);

  const [viewportRef, { height: viewportHeight }] = useMeasure();

  useEffect(() => {
    if (Keyword) {
      // 지도 좌표 변경 및 api 호출 예정
      console.log("검색어 : ", Keyword);
    }
  }, [Keyword]);

  return (
    <Page ref={viewportRef}>
      <Maps searchKeyword={Keyword} selectedFilters={selectedFilters} />
      <Search>
        <SearchBar handleKeyword={setKeyword} />
        <FilterContainer />
      </Search>
      {globalMarkers && globalMarkers.length > 0 ? (
        <ProjectListBS viewport={`${viewportHeight}px`} title={Keyword} />
      ) : null}
    </Page>
  );
}

const Page = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
