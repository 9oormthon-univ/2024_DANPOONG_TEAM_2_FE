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
      <Date>{date}</Date>
      <Content>
        <Description>{description}</Description>
        <Points>-{points}P</Points>
      </Content>
      <Arrow>&gt;</Arrow>
    </CardContainer>
  );
};

export default InvestCard;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 8px;
  padding: 10px 16px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Date = styled.span`
  font-size: 12px;
  color: #818787;
  flex-shrink: 0;
`;

const Content = styled.div`
  flex: 1;
  margin-left: 16px;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #353f3f;
  margin-bottom: 4px;
`;

const Points = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #ff4d4f;
  text-align: right;
`;

const Arrow = styled.span`
  font-size: 14px;
  color: #818787;
  flex-shrink: 0;
  margin-left: 8px;
`;
