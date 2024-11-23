import FilterBtn from "./FilterBtn";
import styled from "styled-components";
import { values } from "../../../constants/Values";

export default function FilterContainer() {
  return (
    <Container>
      {Object.values(values).map((value) => (
        <FilterBtn
          key={value.englishName}
          id={value.englishName}
          value={value.name}
        />
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
