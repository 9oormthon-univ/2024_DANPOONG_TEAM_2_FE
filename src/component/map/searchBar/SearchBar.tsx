import * as S from "./SearchBar.style";
import icon from "../../../assets/searchBar/searchIcon.svg";
import { useState, KeyboardEvent } from "react";

export interface propsType {
  searchKeyword: string;
}
export default function SearchBar({
  className,
  handleKeyword,
}: {
  className?: string;
  handleKeyword: Function;
}) {
  // 입력 폼 변화 감지하여 입력 값 관리
  const [Value, setValue] = useState("");

  // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
  const keywordChange = (e: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  // 엔터 입력할 경우에 입력 값을 state에 담아주는 함수
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitKeyword(e);
    }
  };

  // 제출한 검색어 state에 담아주는 함수
  const submitKeyword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (Value === "") {
      alert("검색어를 입력해주세요.");
    } else handleKeyword(Value);
  };

  return (
    <S.SearchBar className={className}>
      <S.Input
        placeholder="장소, 주소 검색"
        value={Value}
        onChange={keywordChange}
        onKeyDown={(e) => handleKeyPress(e)}
      ></S.Input>
      <S.SubmitBtn type="button" onClick={submitKeyword}>
        <S.Icon src={icon} />
      </S.SubmitBtn>
    </S.SearchBar>
  );
}
