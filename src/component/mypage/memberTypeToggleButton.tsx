import React, { useState } from "react";
import styled from "styled-components";

const MemberTypeToggleButton: React.FC = () => {
  const [active, setActive] = useState<"investor" | "company">("investor");

  return (
    <ToggleContainer>
      <ToggleOption
        isActive={active === "investor"}
        onClick={() => setActive("investor")}
      >
        투자자
      </ToggleOption>
      <ToggleOption
        isActive={active === "company"}
        onClick={() => setActive("company")}
      >
        업체
      </ToggleOption>
    </ToggleContainer>
  );
};

export default MemberTypeToggleButton;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e0e0e0; /* 기본 배경 색 (회색) */
  border-radius: 30px; /* 원형 형태 */
  overflow: hidden; /* 초과 영역 잘림 */
  width: 140px; /* 전체 너비 */
  height: 40px; /* 전체 높이 */
  position: relative;
`;

const ToggleOption = styled.div<{ isActive: boolean }>`
  flex: 1; /* 옵션 간 동일 비율 */
  display: flex;
  justify-content: center;
  align-items: center;
 position: relative;
  height: 100%;
  text-align: center;
  border-radius: 30px; /* 원형 내부의 옵션 */
  background-color: ${({ isActive }) => (isActive ? "#6BE285" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  z-index: 1; /* 글자를 배경보다 위로 설정 */
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;

  /* 선택된 옵션의 배경 확장 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ isActive }) => (isActive ? "100%" : "0%")};
    height: 100%;
    background-color: #6be285; /* 선택된 옵션 배경색 */
    border-radius: 30px;
    z-index: -1; /* 배경을 글자 뒤로 */
   
  }
`;
