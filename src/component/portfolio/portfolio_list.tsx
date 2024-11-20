import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface PortfolioListProps {
  mileage: number;
}

const PortfolioList: React.FC<PortfolioListProps> = ({ mileage }) => {
  const navigate = useNavigate();

  const handleCouponClick = () => {
    navigate("/coupon");
  };

  return (
    <Container>
      <Item>
        <Icon src="/assets/badge_icon.svg" alt="가치 뱃지" />
        <Label>가치 뱃지</Label>
      </Item>
      <Divider />
      <Item>
        <Label>
          <Value>💰{mileage.toLocaleString()} </Value>
        </Label>
      </Item>
      <Divider />
      <Item onClick={handleCouponClick}>
        <Icon src="/assets/coupon_icon.svg" alt="쿠폰" />
        <Label>쿠폰</Label>
      </Item>
    </Container>
  );
};

export default PortfolioList;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #353f3f;
  text-align: center;
`;

const Value = styled.span`
  color: #818787;
  font-size: 16px;
  font-weight: 600;
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: #e0e0e0;
`;
