import React, { useState } from "react";
import styled from "styled-components";
import token from "../token";

interface GoalEditModalProps {
  onClose: () => void;
  onSubmit: (goal: string) => void;
}

const GoalEditModal: React.FC<GoalEditModalProps> = ({ onClose, onSubmit }) => {
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGoal(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await token.patch("/api/members/investment-goal", {
        investmentGoal: goal,
      });

      console.log("API Response:", response.data);
      alert("투자 목표가 성공적으로 수정되었습니다!");
      onSubmit(goal);
      onClose();
    } catch (error) {
      console.error("Error updating investment goal:", error);
      alert("투자 목표를 수정하는 데 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <Title>목표를 적어주세요!</Title>
        <TextArea
          value={goal}
          onChange={handleChange}
          placeholder="목표를 입력하세요"
          disabled={loading}
        />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "수정 중..." : "수정하기"}
        </Button>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default GoalEditModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: #ffffff;
  width: 320px;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-bottom: 18px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border: none;
  border-radius: 8px;
  background: #f5f5f5;
  padding: 10px;
  color: #000;
  font-family: Pretendard;
  line-height: 22px;
  letter-spacing: -0.408px;
  resize: none;
  outline: none;
  margin-bottom: 20px;

  &:focus {
    border: 2px solid #00c853;
    background: #ffffff;
  }

  &:disabled {
    background: #e0e0e0;
    cursor: not-allowed;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 15px;
  background: #00df82;
  color: white;
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #029a3b;
  }

  &:disabled {
    background: #d3d3d3;
    cursor: not-allowed;
  }
`;
