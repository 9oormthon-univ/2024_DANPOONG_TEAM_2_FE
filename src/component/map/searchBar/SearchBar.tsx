import * as S from "./SearchBar.style";
import icon from "../../../assets/searchBar/searchIcon.svg";
import { useState, KeyboardEvent } from "react";

export default function SearchBar({
  className,
  handleSearchVal,
}: {
  className?: string;
  handleSearchVal: Function;
}) {
  const [searchVal, setSearchVal] = useState<string>("");

  const submitSearchVal = () => {
    if (searchVal) {
      if (searchVal === "") return;
      else handleSearchVal(searchVal);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitSearchVal();
    }
  };

  return (
    <S.SearchBar className={className}>
      <S.Input
        placeholder="장소, 주소 검색"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
      ></S.Input>
      <S.SubmitBtn type="button" onClick={submitSearchVal}>
        <S.Icon src={icon} />
      </S.SubmitBtn>
    </S.SearchBar>
  );
}
