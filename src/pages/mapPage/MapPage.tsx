import styled from "styled-components";
import Maps from "../../components/map/Maps";
import { Search } from "./MapPage.style";
import SearchBar from "../../components/map/searchBar/SearchBar";
import FilterContainer from "../../components/map/filter/FilterContainer";
import { useEffect, useState } from "react";

export default function MapPage() {
  const [searchVal, setSearchVal] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (searchVal) {
      // 지도 좌표 변경 및 api 호출 예정
      console.log("검색어 : ", searchVal);
    }
  }, [searchVal]);

  return (
    <Page>
      <Maps />
      <Search>
        <SearchBar handleSearchVal={setSearchVal} />
        <FilterContainer />
      </Search>
    </Page>
  );
}

const Page = styled.div`
  width: 360px;
  height: 640px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
