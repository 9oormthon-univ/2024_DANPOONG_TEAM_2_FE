import styled from "styled-components";

export const BackButton = styled.div`
  width: 100%;
  padding: 20px 20px;

  img {
    cursor: pointer;
    width: 22px;
    height: 16px;
  }
`;

export const StepIndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Step = styled.div<{ isActive: boolean }>`
  width: ${({ isActive }) => (isActive ? "67px" : "17px")};
  height: 10px;
  border-radius: 5px;
  background-color: ${({ isActive }) => (isActive ? "#00df82" : "#ccc")};
  margin: 0 5px;
  transition: background-color 0.3s ease;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%; /* 원 모양 */
  background-color: ${({ checked }) => (checked ? "#00df82" : "#ccc")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 10px;

  &::after {
    content: "✔"; /* 항상 ✔ 표시 */
    color: #ffffff; /* 체크 여부에 따라 색상 변경 */
    font-size: 10px;
    font-weight: lighter;
  }
`;


export const NextButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: #00df82;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  border-radius: 0px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;