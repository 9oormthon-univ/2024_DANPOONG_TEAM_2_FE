import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Coupon {
  id: number;
  image: string;
}

const coupons: Coupon[] = [
  { id: 1, image: "/assets/5000.png" },
  { id: 2, image: "/assets/10000.png" },
  { id: 3, image: "/assets/50000.png" },
];

const CouponSelect: React.FC = () => {
  const [selectedCoupon, setSelectedCoupon] = useState<number | null>(null);
  const navigate = useNavigate();
  const handleSelect = (id: number) => {
    setSelectedCoupon(id);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate("/invest-list")}>{"<"}</BackButton>
        <Title>상품권 선택하기</Title>
      </Header>
      <Divider />
      {coupons.map((coupon) => (
        <CouponCard key={coupon.id} onClick={() => handleSelect(coupon.id)}>
          <CouponImage src={coupon.image} alt="쿠폰" />
          <CheckboxWrapper>
            <Checkbox
              type="radio"
              checked={selectedCoupon === coupon.id}
              onChange={() => handleSelect(coupon.id)}
            />
          </CheckboxWrapper>
        </CouponCard>
      ))}
    </Container>
  );
};

export default CouponSelect;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  margin-bottom: 5px;
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
  margin-left: 40px;
`;

const Divider = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  margin-top: -20px;
`;

const CouponCard = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  position: relative;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const CouponImage = styled.img`
  width: 275px;
  height: 175px;
  flex-shrink: 0;
  border-radius: 8px;
  margin-right: 10px;
`;

const CheckboxWrapper = styled.div`
  position: absolute;
  right: 10px;
`;

const Checkbox = styled.input`
  width: 21px;
  height: 21px;
  flex-shrink: 0;
  stroke-width: 4px;
  stroke: #d9d9d9;
  cursor: pointer;
`;
