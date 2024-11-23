import React, { useState } from "react";
import styled from "styled-components";
import GoalEditModal from "./goal_edit";

interface InvestPurposeProps {
  goal: string;
  onGoalUpdate: (newGoal: string) => void;
}

const InvestPurpose: React.FC<InvestPurposeProps> = ({
  goal,
  onGoalUpdate,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleGoalSubmit = (newGoal: string) => {
    onGoalUpdate(newGoal);
    handleModalClose();
  };

  return (
    <>
      <Card>
        <TitleContainer>
          <Title>⛳ 투자 목표</Title>
        </TitleContainer>
        <Purpose>{goal}</Purpose>
        <EditButton onClick={handleEdit}>편집하기</EditButton>
      </Card>
      {isModalOpen && (
        <GoalEditModal onClose={handleModalClose} onSubmit={handleGoalSubmit} />
      )}
    </>
  );
};

export default InvestPurpose;

const Card = styled.div`
  background-color: #03624c;
  border-radius: 12px;
  width: 100%;
  height: 140px;
  flex-shrink: 0;
  padding: 20px;
  color: white;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-top: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  color: #fafafa;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-bottom: 23px;
`;

const Purpose = styled.p`
  color: #fafafa;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  color: #fafafa;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.408px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 248px;
`;
