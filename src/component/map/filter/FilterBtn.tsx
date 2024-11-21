import styled from "styled-components";
import { useState } from "react";

export default function FilterBtn({ value }: { value: string }) {
  const [isSelected, setIsSelected] = useState<Boolean>(false);
  return (
    <Btn
      className={isSelected && "selected"}
      onClick={() => setIsSelected((prev) => !prev)}
    >
      {value}
    </Btn>
  );
}

const Btn = styled.div`
  width: max-content;
  height: 35px;

  border-radius: 66px;
  padding: 0.5rem 1.25rem;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

  color: #353f3f;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &.selected {
    background: #00df82;
    color: #fff;
    font-weight: 700;
    box-shadow: none;
  }

  cursor: pointer;
`;
