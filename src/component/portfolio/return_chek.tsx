import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ReturnCheckModalProps {
  onClose: () => void;
}

const ReturnCheckModal: React.FC<ReturnCheckModalProps> = ({ onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const navigate = useNavigate();
  const handleCouponClick = () => {
    navigate("/coupon_select");
  };
  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <FlagImage src="/assets/flag.png" alt="flag" />
          <Title>다음 중 무엇으로 리턴 받을까요?</Title>
        </ModalHeader>
        <ButtonContainer>
          <OptionButton>마일리지로 받을래요.</OptionButton>
          <OptionButton onClick={handleCouponClick}>
            바로 상품권 교환할래요.
          </OptionButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ReturnCheckModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  width: 70%;
  max-width: 360px;
  text-align: center;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const FlagImage = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OptionButton = styled.button`
  background: #f5f5f5;
  border: none;
  border-radius: 8px;
  padding: 12px;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
  background: none;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #e0e0e0;
  }
`;
