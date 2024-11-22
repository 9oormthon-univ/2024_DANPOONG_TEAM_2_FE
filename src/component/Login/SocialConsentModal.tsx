import React, { useState } from "react";
import {
   ModalOverlay,
   ModalContainer,
   DragHandle,
   Title,
   AgreementList,
   AgreementItem,
   LeftContainer,
   StyledCheckbox,
   AgreeButton,
   ViewButton,
   Text,
 } from "./SocialConsentModalStyle";

interface Props {
  onClose: () => void;
  onAgree: () => void;
}
// 동의 모달 컴포넌트

// 타입 정의
type AgreementKeys = "age" | "terms" | "personalInfo" | "optionalInfo";

const ConsentModal: React.FC<Props> = ({ onClose, onAgree }) => {
  const [agreements, setAgreements] = useState<Record<AgreementKeys, boolean>>({
    age: false,
    terms: false,
    personalInfo: false,
    optionalInfo: false,
  } as const);
  const [translateY, setTranslateY] = useState(0); // 모달 이동 거리
  const [startY, setStartY] = useState<number | null>(null); // 터치/마우스 시작 위치
  const [isDragging, setIsDragging] = useState(false); // 드래그 중 여부
  const allAgreed = Object.values(agreements).every(Boolean);

  const handleCheckboxChange = (key: keyof typeof agreements)=> {
    setAgreements((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // 드래그 시작 (터치/마우스 공통)
  const handleStart = (startPosition: number) => {
    setStartY(startPosition);
    setIsDragging(true);
  };

  // 드래그 이동 (터치/마우스 공통)
  const handleMove = (currentPosition: number) => {
    if (startY !== null && isDragging) {
      const deltaY = currentPosition - startY; // 이동 거리 계산
      if (deltaY > 0) {
        setTranslateY(deltaY); // 모달 아래로 이동
      }
    }
  };

  // 드래그 종료 (터치/마우스 공통)
  const handleEnd = () => {
    if (translateY > 100) {
      // 이동 거리가 100px 이상이면 모달 닫기
      onClose();
    } else {
      // 이동 거리가 작으면 원래 위치로 복귀
      setTranslateY(0);
    }
    setStartY(null);
    setIsDragging(false);
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) =>
    handleStart(e.touches[0].clientY);
  const handleTouchMove = (e: React.TouchEvent) =>
    handleMove(e.touches[0].clientY);
  const handleTouchEnd = () => handleEnd();

  // 마우스 이벤트 핸들러
  const handleMouseDown = (e: React.MouseEvent) => handleStart(e.clientY);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientY);
  const handleMouseUp = () => handleEnd();

  return (
    <ModalOverlay
      onMouseMove={isDragging ? handleMouseMove : undefined} // 드래그 중에만 이동 처리
      onMouseUp={isDragging ? handleMouseUp : undefined} // 드래그 종료 처리
    >
      <ModalContainer
        translateY={translateY}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown} // 마우스 드래그 시작
      >
        <DragHandle />
        <Title>소셜 로그인 서비스 이용 필수 동의</Title>
        <AgreementList>
          <AgreementItem>
            <LeftContainer>
              <StyledCheckbox
                checked={agreements.age}
                onClick={() => handleCheckboxChange("age")}
              />
              <Text>[필수] 만 14세 이상입니다.</Text>
            </LeftContainer>
          </AgreementItem>
          <AgreementItem>
            <LeftContainer>
              <StyledCheckbox
                checked={agreements.terms}
                onClick={() => handleCheckboxChange("terms")}
              />
              <Text>[필수] 서비스 이용약관 동의</Text>
            </LeftContainer>
          </AgreementItem>
          <AgreementItem>
            <LeftContainer>
              <StyledCheckbox
                checked={agreements.personalInfo}
                onClick={() => handleCheckboxChange("personalInfo")}
              />
              <Text>[필수] 개인정보 수집 및 이용 동의</Text>
            </LeftContainer>
            <ViewButton>보기</ViewButton>
          </AgreementItem>
          <AgreementItem>
            <LeftContainer>
              <StyledCheckbox
                checked={agreements.optionalInfo}
                onClick={() => handleCheckboxChange("optionalInfo")}
              />
              <Text>[필수] 선택정보 수집 및 이용 동의</Text>
            </LeftContainer>
            <ViewButton>보기</ViewButton>
          </AgreementItem>
        </AgreementList>
        <AgreeButton onClick={onAgree} disabled={!allAgreed}>
          네, 모두 동의합니다.
        </AgreeButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ConsentModal;
