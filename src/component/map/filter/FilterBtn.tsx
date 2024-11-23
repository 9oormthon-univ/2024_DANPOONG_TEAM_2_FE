import styled from "styled-components";
import { getValue } from "../../../constants/Values";
import { useFilterStore } from "../../../stores/useSelectedValues";
export default function FilterBtn({
  id,
  value,
}: {
  id: string;
  value: string;
}) {
  const { selectedFilters, toggleFilter } = useFilterStore();
  const isSelected = selectedFilters.includes(id);

  const valueDefinition = getValue(value);

  // 값이 없을 경우 기본 색상 지정
  const color = valueDefinition?.color || "#d3d3d3"; // 기본 회색
  const englishName = valueDefinition?.englishName || "";
  return (
    <Btn
      className={isSelected ? "selected" : ""}
      onClick={() => toggleFilter(englishName)}
      color={color}
    >
      {value}
    </Btn>
  );
}

const Btn = styled.div<{ color: string }>`
  width: max-content;
  height: 35px;

  border-radius: 66px;
  padding: 0.5rem 1.25rem;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #d3d3d3;
  color: #353f3f;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &.selected {
    background: ${({ color }) => color};
    color: #fff;
    font-weight: 700;
    box-shadow: none;
  }

  cursor: pointer;
`;
