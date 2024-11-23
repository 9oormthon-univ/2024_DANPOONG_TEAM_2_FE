import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CouponCard from "../component/portfolio/coupon_card";
import token from "../component/token";

interface Coupon {
  couponId: number;
  amount: number;
  description: string;
  expirationDate: string;
  couponStatus: string;
}

const Coupon: React.FC = () => {
  const navigate = useNavigate();
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        console.log("Fetching coupons...");
        const response = await token.get("/api/members/coupons");
        console.log("API Response:", response.data);
        setCoupons(response.data.data.couponInfoResDtos);
      } catch (error) {
        console.error("Error fetching coupons:", error);
        setCoupons([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCoupons();
  }, []);

  if (loading) {
    return <CouponContainer>로딩 중...</CouponContainer>;
  }

  return (
    <CouponContainer>
      <Header>
        <BackButton onClick={() => navigate("/portfolio")}>{"<"}</BackButton>
        <Title>쿠폰 관리</Title>
      </Header>
      <Divider />
      <Subtitle>{coupons.length}장 보유</Subtitle>
      <CouponList>
        {coupons.map((coupon, index) => (
          <CouponCard
            key={index}
            amount={`${coupon.amount}원`}
            title={coupon.description}
            validity={coupon.expirationDate}
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
  margin-bottom: 23px;

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
  margin-left: 100px;
  margin-bottom: 20px;
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
