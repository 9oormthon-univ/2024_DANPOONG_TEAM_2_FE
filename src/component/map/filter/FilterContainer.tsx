import FilterBtn from "./FilterBtn";
import styled from "styled-components";

export default function FilterContainer() {
  const filterDummy = [
    { id: 0, content: "동물복지" },
    { id: 1, content: "지역생산" },
    { id: 2, content: "재생에너지" },
    { id: 3, content: "하암" },
    { id: 4, content: "졸리다" },
  ];
  return (
    <Container>
      {filterDummy.map((filter) => (
        <FilterBtn key={filter.id} value={filter.content} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  gap: 8px;
  white-space: nowrap;
  padding: 0 4%;

  &::-webkit-scrollbar {
    display: none;
  }
`;
