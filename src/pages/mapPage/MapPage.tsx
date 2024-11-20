import styled from "styled-components";
import Maps from "../../components/map/Maps";
import { Search } from "./MapPage.style";
import SearchBar from "../../components/map/searchBar/SearchBar";
import FilterContainer from "../../components/map/filter/FilterContainer";
import ProjectListBS from "../../components/bottomSheet/ProjectListBS";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export default function MapPage() {
  const [searchVal, setSearchVal] = useState<string | undefined>(undefined);
  const [viewportRef, { height: viewportHeight }] = useMeasure();
  const dummyLocationKeyword = "경기도 용인시";
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);

  useEffect(() => {
    if (searchVal) {
      // 지도 좌표 변경 및 api 호출 예정
      console.log("검색어 : ", searchVal);
    }
  }, [searchVal]);

  return (
    <Page ref={viewportRef}>
      <Maps draggable={!isBottomSheetOpen} />
      <Search>
        <SearchBar handleSearchVal={setSearchVal} />
        <FilterContainer />
      </Search>
      <ProjectListBS
        viewport={`${viewportHeight}px`}
        title={dummyLocationKeyword}
        setIsBottomSheetOpen={setIsBottomSheetOpen}
      />
    </Page>
  );
}

const Page = styled.div`
  width: 360px;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
