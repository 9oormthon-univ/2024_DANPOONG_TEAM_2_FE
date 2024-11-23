import React, { useState } from "react";
import styled from "styled-components";
import { StepIndicatorContainer, Step, NextButton } from "./StepCommonStyle";
import axios from "axios";
import { useAuth } from "../../AuthContext";

export const StepInterestContainer = styled.div`
  height: 100%;
  width: 100%;
  color: black;
`;

export const InterestHeaderContainer = styled.div`
  width: 100%;
  height: 5%;
`;

export const InterestMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  justify-content: flex-start;
  width: 100%;
  height: 85%;
`;

export const Title = styled.h2`
  width: 100%;
  text-align: start;
  font-size: 24px;
  line-height: 42px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const InterestList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const InterestItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-radius: 12px;
  border: 1px solid ${({ selected }) => (selected ? "#00df82" : "white")};
  background-color: ${({ selected }) => (selected ? "#f6fff8" : "#F2F3F3")};
  color: ${({ selected }) => (selected ? "#00df82" : "#333")};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    border-color: #00df82;
  }
`;

export const InterestBottomContainer = styled.div`
  width: 100%;
  height: 5%;
`;

export interface Props {
  onNext: () => void;
  currentStep: number;
  totalSteps: number;
}

const StepSocialValue: React.FC<Props> = ({ onNext, currentStep, totalSteps }) => {
  const { token } = useAuth(); // AuthContext에서 토큰 가져오기
  console.log("select페이지에서:",token);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // 관심 분야 Enum 값 (백엔드와 매칭)
  const interests = [
    { label: "🐶 동물 복지", value: "ANIMAL_FRIENDLY" },
    { label: "🌿 재생에너지", value: "RECYCLE_ENERGY" },
    { label: "🌏 지역 생산", value: "LOCAL_PRODUCT" },
    { label: "🏛️ 지역 문화 보존", value: "CULTURAL_PRESERVE" },
    { label: "💪🏻 취약계층 고용", value: "EMPLOY_VULNERABLE_CLASS" },
    { label: "👏🏻 다양성 포용", value: "ORGANIC" },
    { label: "👣 탄소발자국 인증", value: "CO2_FOOTPRINT" },
  ];

  // 관심 분야 선택/해제 토글
  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests((prev) => prev.filter((item) => item !== interest));
    } else {
      setSelectedInterests((prev) => [...prev, interest]);
    }
  };

  // 관심 분야 제출 핸들러
  const handleSubmit = async () => {
    if (!token) {
      console.error("토큰이 없습니다. 인증이 필요합니다.");
      return;
    }

    try {
      // 관심 분야를 백엔드에 저장
      const response = await axios.patch(
        `https://moa-api.duckdns.org/api/members/favoriteType`,
        { certifiedType: selectedInterests },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("관심 분야 저장 성공:", response.data);
      onNext(); // 다음 단계로 이동
    } catch (error) {
      console.error("관심 분야 저장 실패:", error);
    }
  };

  return (
    <StepInterestContainer>
      <InterestHeaderContainer></InterestHeaderContainer>
      <InterestMainContainer>
        <Title>당신의 관심 분야를 선택해주세요!</Title>
        <Subtitle>관심 사회적 가치 분야의 기업을 추천받을 수 있어요.</Subtitle>
        <InterestList>
          {interests.map((interest) => (
            <InterestItem
              key={interest.value}
              selected={selectedInterests.includes(interest.value)}
              onClick={() => toggleInterest(interest.value)}
            >
              {interest.label}
            </InterestItem>
          ))}
        </InterestList>
      </InterestMainContainer>
      <InterestBottomContainer>
        <StepIndicatorContainer>
          {Array.from({ length: totalSteps }, (_, index) => (
            <Step key={index} isActive={index + 1 === currentStep} />
          ))}
        </StepIndicatorContainer>
        <NextButton onClick={handleSubmit} disabled={selectedInterests.length === 0}>
          다음
        </NextButton>
      </InterestBottomContainer>
    </StepInterestContainer>
  );
};

export default StepSocialValue;
