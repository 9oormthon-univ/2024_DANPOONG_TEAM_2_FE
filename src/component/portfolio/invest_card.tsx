import React from "react";
import styled from "styled-components";

interface InvestCardProps {
  date: string;
  description: string;
  points: string;
}

const InvestCard: React.FC<InvestCardProps> = ({
  date,
  description,
  points,
}) => {
  return (
    <CardContainer>
      <TopRow>
        <Date>{date}</Date>
        <Arrow>&gt;</Arrow>
      </TopRow>
      <BottomRow>
        <Description>{description}</Description>
        <Points>-{points}P</Points>
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

const Description = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
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

const Arrow = styled.span`
  width: 9px;
  font-size: 14px;
  color: #818787;
  flex-shrink: 0;
  margin-left: 267px;
`;
