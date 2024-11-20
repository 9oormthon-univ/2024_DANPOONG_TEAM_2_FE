import React, { useState } from "react";
import styled from "styled-components";
import { BackButton, StepIndicatorContainer, Step, NextButton } from "./StepCommonStyle";

export const StepInterestContainer = styled.div`
  height: 100%;
  width: 100%;
  color: black;
`;

export const InterestHeaderContainer = styled.div`
  width: 100%; 
  height: 10%;
  
`;

export const InterestMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  margin-bottom: 50px;
  justify-content: flex-start;
  width: 100%;
  height: 75%;
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
  margin-bottom: 20px;
`;

export const InterestList = styled.div`
width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const InterestItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 145px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid ${({ selected }) => (selected ? "#00df82" : "#ccc")};
  background-color: ${({ selected }) => (selected ? "#f6fff8" : "white")};
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
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

const StepSocialValue: React.FC<Props> = ({ onNext, onBack, currentStep, totalSteps }) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    "🐶 동물 복지",
    "🌿 재생에너지",
    "🌏 지역 생산",
    "🏛️ 지역 문화 보존",
    "💪🏻 취약계층 고용",
    "👏🏻 다양성 포용",
    "👣 탄소발자국 인증",
  ];

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests((prev) => prev.filter((item) => item !== interest));
    } else {
      setSelectedInterests((prev) => [...prev, interest]);
    }
  };

  return (
    <StepInterestContainer>
      <InterestHeaderContainer>
        <BackButton>
          <img onClick={onBack} src="/assets/backArrow.png" />
        </BackButton>
      </InterestHeaderContainer>
      <InterestMainContainer>
        <Title>당신의 관심 분야를 선택해주세요!</Title>
        <Subtitle>관심 사회적 가치 분야의 기업을 추천받을 수 있어요.</Subtitle>
        <InterestList>
          {interests.map((interest) => (
            <InterestItem
              key={interest}
              selected={selectedInterests.includes(interest)}
              onClick={() => toggleInterest(interest)}
            >
              {interest}
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
        <NextButton onClick={onNext} disabled={selectedInterests.length === 0}>
          다음
        </NextButton>
      </InterestBottomContainer>
    </StepInterestContainer>
  );
};

export default StepSocialValue;
