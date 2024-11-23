import styled from "styled-components";
import Maps from "../../component/map/Maps";
import { Search } from "./MapPage.style";
import SearchBar from "../../component/map/searchBar/SearchBar";
import FilterContainer from "../../component/map/filter/FilterContainer";
import ProjectListBS from "../../component/bottomSheet/ProjectListBS";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { useFilterStore } from "../../stores/useSelectedValues";

export default function MapPage() {
  const [Keyword, setKeyword] = useState("");
  const { selectedFilters } = useFilterStore();

  const [viewportRef, { height: viewportHeight }] = useMeasure();
  const dummyLocationKeyword = "경기도 용인시";

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
      <ProjectListBS
        viewport={`${viewportHeight}px`}
        title={dummyLocationKeyword}
      />
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
