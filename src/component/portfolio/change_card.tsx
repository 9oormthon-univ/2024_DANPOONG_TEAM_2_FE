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
      <HorizontalContainer>
        <ImageContainer>
          <Image src={storePicture} alt={`${storeName} 이미지`} />
        </ImageContainer>
        <Details>
          <ProjectStatus>
            {isProjectCompleted ? "완료된 프로젝트" : "진행 중인 프로젝트"}
          </ProjectStatus>
          <StoreName>{storeName}</StoreName>
          <HorizontalContainer>
            <FundingTitle>나의 펀딩 금액</FundingTitle>
            <FundingAmount> {myFundingAmount.toLocaleString()}원</FundingAmount>
          </HorizontalContainer>
        </Details>
      </HorizontalContainer>
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
  width: 330px;
  height: 210px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  margin: 16px;
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1px;
  margin-top: 15px;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  background-color: #f0f0f0;
  margin-right: 30px;
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
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: ${({ children }) =>
    children === "완료된 프로젝트" ? "#818787" : "#03624C"};
  font-weight: bold;
  margin-bottom: 8px;
`;

const StoreName = styled.h3`
  color: #030f0f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.408px;
`;

const FundingTitle = styled.p`
  color: #030f0f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.408px;
`;
const FundingAmount = styled.p`
  color: #030f0f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.408px;
`;

const ActionButton = styled.button<{ completed: boolean }>`
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ completed }) => (completed ? "#36c787" : "#ccc")};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
  font-size: 16px;
  margin-top: 10px;
  cursor: ${({ completed }) => (completed ? "pointer" : "not-allowed")};
  pointer-events: ${({ completed }) => (completed ? "auto" : "none")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ completed }) => (completed ? "#2ca06f" : "#ccc")};
  }
`;
