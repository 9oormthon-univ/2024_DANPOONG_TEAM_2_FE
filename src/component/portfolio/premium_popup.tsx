import React from "react";
import styled from "styled-components";

interface PremiumPopupProps {
  onClose: () => void;
}

const PremiumPopup: React.FC<PremiumPopupProps> = ({ onClose }) => {
  return (
    <PopupOverlay>
      <Popup>
        <BadgeImage src="/assets/badge_popup.png" alt="뱃지" />
        <PopupTitle>앗!</PopupTitle>
        <PopupMessage>
          월간 레포트는 프리미엄 구독자 전용이에요.
          <br />
          구독하고 인사이트 얻어가세요! ⭐
        </PopupMessage>
        <SubscribeButton>MOA와 똑똑한 투자하기</SubscribeButton>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Popup>
    </PopupOverlay>
  );
};

export default PremiumPopup;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Popup = styled.div`
  background-color: #ffffff;
  width: 320px;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const BadgeImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
`;

const PopupTitle = styled.h3`
  color: #353f3f;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const PopupMessage = styled.p`
  color: #353f3f;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const SubscribeButton = styled.button`
  width: 262px;
  height: 45px;
  flex-shrink: 0;
  border: none;
  border-radius: 20px;
  background-color: #00c853;
  color: white;
  color: #ffffff;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background-color: #009f40;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #818787;

  &:hover {
    color: #353f3f;
  }
`;
