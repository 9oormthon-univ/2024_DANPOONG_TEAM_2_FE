import React, { useState } from "react";
import styled from "styled-components";
import token from "../token";

interface ChangeCardProps {
  storeId: number;
  storeName: string;
  storePicture: string;
  isProjectCompleted: boolean;
  myFundingAmount: number;
  onClick: () => void;
}

const ChangeCard: React.FC<ChangeCardProps> = ({
  storeId,
  storeName,
  storePicture,
  isProjectCompleted,
  myFundingAmount,
}) => {
  const [loading, setLoading] = useState(false);
  const [isReturned, setIsReturned] = useState(false);

  const handleReturnClick = async (storeId: number) => {
    if (isReturned) return;

    try {
      setLoading(true);
      console.log("리턴 요청 중:", storeId);

      const response = await token.post("/api/vouchers/return-mileage", {
        storeId,
      });

      console.log("리턴 성공:", response.data);
      alert("마일리지가 성공적으로 리턴되었습니다!");
      setIsReturned(true);
    } catch (error: any) {
      console.error("리턴 요청 실패:", error);

      if (error.response?.data?.message === "이미 환급된 마일리지입니다.") {
        setIsReturned(true);
      } else {
        alert("리턴 요청에 실패했습니다. 다시 시도해주세요.");
      }
    } finally {
      setLoading(false);
    }
  };

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
        isReturned={isReturned}
        onClick={() => handleReturnClick(storeId)}
      >
        {loading ? "처리 중..." : isReturned ? "리턴 완료" : "리턴 받기"}
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
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const FundingTitle = styled.p`
  color: #030f0f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-right: 10px;
  letter-spacing: -0.408px;
`;

const FundingAmount = styled.p`
  color: #030f0f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const ActionButton = styled.button<{ isReturned: boolean }>`
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ isReturned }) => (isReturned ? "#d9d9d9" : "#36c787")};
  color: ${({ isReturned }) => (isReturned ? "#000" : "#fff")};
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
  cursor: ${({ isReturned }) => (isReturned ? "not-allowed" : "pointer")};
  pointer-events: ${({ isReturned }) => (isReturned ? "none" : "auto")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ isReturned }) =>
      isReturned ? "#d9d9d9" : "#2ca06f"};
  }
`;
