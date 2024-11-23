import React from "react";
import styled from "styled-components";

interface ChangeCardProps {
  storeId: number;
  storeName: string;
  storePicture: string;
  isProjectCompleted: boolean;
  myFundingAmount: number;
  onClick: (storeId: number) => void;
}

const ChangeCard: React.FC<ChangeCardProps> = ({
  storeId,
  storeName,
  storePicture,
  isProjectCompleted,
  myFundingAmount,
  onClick,
}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={storePicture} alt={`${storeName} 이미지`} />
      </ImageContainer>
      <Details>
        <ProjectStatus>
          {isProjectCompleted ? "완료된 프로젝트" : "진행 중인 프로젝트"}
        </ProjectStatus>
        <StoreName>{storeName}</StoreName>
        <FundingAmount>
          나의 펀딩 금액 {myFundingAmount.toLocaleString()}원
        </FundingAmount>
      </Details>
      <ActionButton
        completed={isProjectCompleted}
        onClick={() => onClick(storeId)}
      >
        {isProjectCompleted ? "리턴 받기" : "진행 중"}
      </ActionButton>
    </CardContainer>
  );
};

export default ChangeCard;

const CardContainer = styled.div`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  margin: 16px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  width: 100%;
  margin: 16px 0;
  text-align: center;
`;

const ProjectStatus = styled.p`
  font-size: 14px;
  color: ${({ children }) =>
    children === "완료된 프로젝트" ? "#36c787" : "#03624c"};
  font-weight: bold;
  margin-bottom: 8px;
`;

const StoreName = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 4px;
`;

const FundingAmount = styled.p`
  font-size: 14px;
  color: #666;
`;

const ActionButton = styled.button<{ completed: boolean }>`
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ completed }) => (completed ? "#36c787" : "#ccc")};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: ${({ completed }) => (completed ? "pointer" : "not-allowed")};
  pointer-events: ${({ completed }) => (completed ? "auto" : "none")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ completed }) => (completed ? "#2ca06f" : "#ccc")};
  }
`;
