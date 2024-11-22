import styled from "styled-components";
import Maps from "../../component/map/Maps";
import { Search } from "./MapPage.style";
import SearchBar from "../../component/map/searchBar/SearchBar";
import FilterContainer from "../../component/map/filter/FilterContainer";
import ProjectListBS from "../../component/bottomSheet/ProjectListBS";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export default function MapPage() {
  const [searchVal, setSearchVal] = useState<string | undefined>(undefined);
  const [viewportRef, { height: viewportHeight }] = useMeasure();
  const dummyLocationKeyword = "경기도 용인시";

  useEffect(() => {
    if (searchVal) {
      // 지도 좌표 변경 및 api 호출 예정
      console.log("검색어 : ", searchVal);
    }
  }, [searchVal]);

  return (
    <Page ref={viewportRef}>
      <Maps />
      <Search>
        <SearchBar handleSearchVal={setSearchVal} />
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
