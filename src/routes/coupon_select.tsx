import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import token from "../component/token";

interface Coupon {
  image: string;
  myFundingAmount: number;
}

const coupons: Coupon[] = [
  { image: "/assets/5000.png", myFundingAmount: 5000 },
  { image: "/assets/10000.png", myFundingAmount: 10000 },
  { image: "/assets/50000.png", myFundingAmount: 50000 },
];

const CouponSelect: React.FC = () => {
  const [selectedCoupon, setSelectedCoupon] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (myFundingAmount: number) => {
    setSelectedCoupon(myFundingAmount);
  };
  const handleConfirm = async () => {
    const selectedCouponData = coupons.find(
      (coupon) => coupon.myFundingAmount === selectedCoupon
    );

    if (!selectedCouponData) {
      alert("상품권을 선택하세요.");
      return;
    }

    try {
      setLoading(true);
      console.log("Sending voucherAmount:", selectedCoupon);
      const response = await token.post("/api/vouchers/exchange-voucher", {
        voucherAmount: selectedCoupon,
      });

      console.log("API Response:", response.data);

      navigate("/change_finish", {
        state: { myFundingAmount: selectedCouponData.myFundingAmount },
      });
    } catch (error) {
      console.error("Error exchanging voucher:", error);
      alert("상품권 교환에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
        <Title>상품권 선택하기</Title>
      </Header>
      <Divider />
      {coupons.map((coupon) => (
        <CouponCard
          key={coupon.myFundingAmount}
          onClick={() => handleSelect(coupon.myFundingAmount)}
        >
          <CouponImage src={coupon.image} alt="쿠폰" />
          <CheckboxWrapper>
            <Checkbox
              type="radio"
              checked={selectedCoupon === coupon.myFundingAmount}
              onChange={() => handleSelect(coupon.myFundingAmount)}
            />
          </CheckboxWrapper>
        </CouponCard>
      ))}
      <ConfirmButton onClick={handleConfirm} disabled={loading}>
        {loading ? "처리 중..." : "확인"}
      </ConfirmButton>
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
  margin-left: 80px;
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

const ConfirmButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #36c787;
  border: none;
  border-radius: 50px;
  background: #00df82;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background-color: #2ca06f;
  }
`;
