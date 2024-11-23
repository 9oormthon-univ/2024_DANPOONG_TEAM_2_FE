import React, { useState } from "react";
import styled from "styled-components";
import StepSocialValue from "./StepSocialValue";
import StepWelcomeScreen from "./StepWelcomeScreen";
import { StyledCheckbox, StepIndicatorContainer, Step } from "./StepCommonStyle";
import axios from "axios";
import { useAuth } from "../../AuthContext";

export const StepMemberTypeContainer = styled.div`
  height: 100%;
  width: 100%;
  color: black;
`;

export const MemberTypeHeaderContainer = styled.div`
  width: 100%;
  height: 5%;
`;

export const MemberTypeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  justify-content: flex-start;

  height: 85%;
`;

export const MemberTypeBottomContainer = styled.div`
  width: 100%;
  height: 5%;
`;

const Title = styled.h2`
  width: 100%;
  height: 42px;
  font-size: 24px;
  line-height: 42px;
  font-weight: 600;
  margin-bottom: 100px;
`;

const MemberTypeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MemberTypeItem = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding: 25px;
  border: 1px solid ${({ selected }) => (selected ? "#00df82" : "#ccc")};
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? "#f6fff8" : "white")};
  cursor: pointer;
  &:hover {
    border-color: #00df82;
  }
`;

const MemberTypeLeft = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;
const MemberTypeRight = styled.div`
  font-weight: 600;
`;

const MemberTypeDescription = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  margin-top: 10px;
  color: #666;
  line-height: 20px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: #00df82;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  border-radius: 0px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const StepMemberType: React.FC= () => {
  const [currentStep, setCurrentStep] = useState<number>(1); // 현재 단계
  const totalSteps = 3; // 총 단계 수
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const { token } = useAuth(); // AuthContext에서 토큰 가져오기

  const handleSelection = (type: string) => {
    setSelectedType(type); // 로컬 상태 업데이트
  };

    // 회원 유형 보내고, 사회적 가치 선택하는 단계로 이동
    const handleNext = async () => {
      if (currentStep === 1) {
        if (!token) {
          console.error("토큰이 없습니다. 인증이 필요합니다.");
          return;
        }
        if (!selectedType) return;
        try {
          // 회원 유형 업데이트 API 호출
          await axios.patch(
            `https://moa-api.duckdns.org/api/members/type`,
            { memberType: selectedType },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setCurrentStep((prev) => prev + 1); // 다음 단계로 이동
        } catch (error) {
          console.error("Error updating member type:", error);
        }
      } else if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1);
      }
    };

 
    return (
      <>
        {currentStep === 1 && (
          <StepMemberTypeContainer>
            <MemberTypeHeaderContainer></MemberTypeHeaderContainer>
            <MemberTypeMainContainer>
              <Title>회원 유형을 선택해주세요.</Title>
              <MemberTypeList>
                {/* 투자자 */}
                <MemberTypeItem
                  selected={selectedType === "investor"}
                  onClick={() => handleSelection("investor")}
                >
                  <MemberTypeLeft>
                    <StyledCheckbox checked={selectedType === "investor"} />
                  </MemberTypeLeft>
                  <MemberTypeRight>
                    💰 투자자예요.
                    <MemberTypeDescription>
                      회원가입 기념으로 투자 쿠폰을 드리고 있어요!
                    </MemberTypeDescription>
                  </MemberTypeRight>
                </MemberTypeItem>
                {/* 기업 */}
                <MemberTypeItem
                  selected={selectedType === "business"}
                  onClick={() => handleSelection("business")}
                >
                  <MemberTypeLeft>
                    <StyledCheckbox checked={selectedType === "business"} />
                  </MemberTypeLeft>
                  <MemberTypeRight>
                    🏢 기업이에요.
                    <MemberTypeDescription>
                      프로젝트를 등록하고 목표를 달성해보세요!
                    </MemberTypeDescription>
                  </MemberTypeRight>
                </MemberTypeItem>
              </MemberTypeList>
            </MemberTypeMainContainer>
            <MemberTypeBottomContainer>
              <StepIndicatorContainer>
                {Array.from({ length: totalSteps }, (_, index) => (
                  <Step key={index} isActive={index + 1 === currentStep} />
                ))}
              </StepIndicatorContainer>
              <SubmitButton onClick={handleNext} disabled={!selectedType}>
                다음
              </SubmitButton>
            </MemberTypeBottomContainer>
          </StepMemberTypeContainer>
        )}
  
        {currentStep === 2 && (
          <StepSocialValue
            onNext={handleNext}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        )}
  
        {currentStep === 3 && (
          <StepWelcomeScreen
          />
        )}
      </>
    );
  };
  
  export default StepMemberType;