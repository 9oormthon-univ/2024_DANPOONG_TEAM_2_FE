import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div<{ translateY: number }>`
  width: 90%;
  max-width: 360px;
  position: fixed;

  bottom: ${({ translateY }) =>
    `${15 - translateY}px`}; /* 드래그 시 아래로 이동 */
  background: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: ${({ translateY }) =>
    translateY === 0 ? "transform 0.3s ease, opacity 0.3s ease" : "none"};
`;

export const DragHandle = styled.div`
  width: 54px;
  height: 6px;
  background: #cdcfcf;
  border-radius: 3px;
  margin: 0 auto 10px auto; /* 상단 중앙 정렬 */
  cursor: grab;
`;

export const Title = styled.h2`
  color: black;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

export const AgreementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AgreementItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 체크박스와 버튼 간 간격 유지 */
  margin-bottom: 15px;
  color: black;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center; /* 체크박스와 텍스트 수직 정렬 */
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%; /* 원 모양 */
  background-color: ${({ checked }) => (checked ? "#00df82" : "#03624C")};
  border: 2px solid ${({ checked }) => (checked ? "#00df82" : "#ccc")};
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

export const AgreeButton = styled.button`
  width: 100%;
  background: #00df82;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #00df82;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const ViewButton = styled.button`
  background-color: #f2f3f3;
  color: #818787;
  width: 61px;
  height: 35px;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 13px;
  color: #333;
`;
