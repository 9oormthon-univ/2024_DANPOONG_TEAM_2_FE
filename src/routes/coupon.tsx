import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CouponCard from "../component/portfolio/coupon_card";

const Coupon: React.FC = () => {
  const navigate = useNavigate();

  const dummyData = [
    {
      amount: "10,000원",
      title: "신규 회원 무료 펀딩 쿠폰",
      validity: "2024.11.23~2024.11.24",
    },
    {
      amount: "5,000원",
      title: "재가입 감사 쿠폰",
      validity: "2024.11.25~2024.11.30",
    },
  ];

  return (
    <CouponContainer>
      <Header>
        <BackButton onClick={() => navigate("/portfolio")}>{"<"}</BackButton>
        <Title>쿠폰 관리</Title>
      </Header>
      <Divider />
      <Subtitle>{dummyData.length}장 보유</Subtitle>
      <CouponList>
        {dummyData.map((coupon, index) => (
          <CouponCard
            key={index}
            amount={coupon.amount}
            title={coupon.title}
            validity={coupon.validity}
          />
        ))}
      </CouponList>
    </CouponContainer>
  );
};

export default Coupon;

const CouponContainer = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: #00c853;
  }
`;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-left: 60px;
`;

const Divider = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  margin-top: -18px;
`;

const Subtitle = styled.span`
  color: #6f7d7d;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const CouponList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;
