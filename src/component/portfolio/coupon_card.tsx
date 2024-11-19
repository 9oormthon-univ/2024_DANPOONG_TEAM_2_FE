import React from "react";
import styled from "styled-components";

interface CouponCardProps {
  amount: string;
  title: string;
  validity: string;
}

const CouponCard: React.FC<CouponCardProps> = ({ amount, title, validity }) => {
  return (
    <Card>
      <IconContainer>
        <Icon src="/assets/coupon_icon.svg" alt="쿠폰 아이콘" />
      </IconContainer>
      <Content>
        <Amount>{amount}</Amount>
        <Title>{title}</Title>
        <Validity>사용기한 : {validity}</Validity>
      </Content>
    </Card>
  );
};

export default CouponCard;

const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
`;

const IconContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #e8f8ef;
  border-radius: 8px;
  margin-right: 16px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Amount = styled.div`
  color: #00c853;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
`;

const Title = styled.div`
  color: #353f3f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

const Validity = styled.div`
  color: #818787;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 4px;
`;
