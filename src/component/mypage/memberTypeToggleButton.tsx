import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  memberType: "INVESTOR" | "BUSINESS";
  onChange: (newType: "INVESTOR" | "BUSINESS") => void;
}
const MemberTypeToggleButton: React.FC<Props> = ({ memberType, onChange }) => {
  const [active, setActive] = useState<"INVESTOR" | "BUSINESS">(memberType); // 초기 상태를 부모 값으로 설정

  // 부모에서 전달된 memberType 값을 초기화하거나 변경 시 동기화
  useEffect(() => {
    if (memberType) { // memberType 값이 유효할 때만 상태 동기화
      setActive(memberType);
    }
  }, [memberType]);
  

  const handleToggle = (newType: "INVESTOR" | "BUSINESS") => {
    setActive(newType); // 내부 상태 업데이트
    onChange(newType); // 부모로 변경 사항 전달
  };
  

  return (
    <ToggleContainer>
      <ToggleOption
        isActive={active === "INVESTOR"}
        onClick={() => handleToggle("INVESTOR")}
      >
        투자자
      </ToggleOption>
      <ToggleOption
        isActive={active === "BUSINESS"}
        onClick={() => handleToggle("BUSINESS")}
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
  justify-self: flex-end;
  justify-content: space-between;
  background-color: #e0e0e0; /* 기본 배경 색 (회색) */
  border-radius: 30px; /* 원형 형태 */
  overflow: hidden; /* 초과 영역 잘림 */
  width: 132px; /* 전체 너비 */
  height: 36px; /* 전체 높이 */
  position: relative;
  margin-bottom: 42px;
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
  font-size: 13px;
  cursor: pointer;
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
