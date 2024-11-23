import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface InvestCardProps {
  storeId: number;
  fundingDate: string;
  storeName: string;
  amount: string;
  onClick: (storeId: number) => void;
}

const InvestCard: React.FC<InvestCardProps> = ({
  storeId,
  fundingDate,
  storeName,
  amount,
}) => {
  const navigate = useNavigate();

  const handleCheckDetails = (storeId: number) => {
    navigate(`/return/${storeId}`);
  };
  return (
    <CardContainer>
      <TopRow>
        <Date>{fundingDate}</Date>
        <Arrow onClick={() => handleCheckDetails(storeId)}>&gt;</Arrow>
      </TopRow>
      <BottomRow>
        <StoreName>{storeName}</StoreName>
        <Points>- {amount}</Points>
      </BottomRow>
    </CardContainer>
  );
};

export default InvestCard;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 8px;
  padding: 10px 16px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Date = styled.span`
  color: #03624c;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const StoreName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
  align-item: left;
`;

const Points = styled.div`
  color: #000;
  text-align: right;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
  text-align: right;
  margin-left: 120px;
`;

const Arrow = styled.button`
  width: 9px;
  font-size: 14px;
  color: #818787;
  flex-shrink: 0;
  margin-left: 267px;
`;
