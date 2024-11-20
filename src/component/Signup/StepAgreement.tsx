// components/Signup/StepAgreement.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BackButton, StyledCheckbox } from "./StepCommonStyle";

export const StepAgreeMentContainer = styled.div`
  height: 100%;
  width: 100%;
  color: black;
`;

export const AgreeMentHeaderContainer = styled.div`
  width: 100%;
  height: 10%;
`;

export const AgreeMentBottomContainer = styled.div`
  width: 100%;
  height: 5%;
`;

export const AgreeMentMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  justify-content: center; /* 수직 가운데 정렬 */
  width: 100%;
  height: 80%;
`;

export const Title = styled.h2`
  width: 220px;
  height: 84px;
  text-align: start;
  font-size: 28px;
  line-height: 42px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const AllCheckButtonContainer = styled.div`
  display: flex;
  height: 59px;
  border-radius: 12px;
  padding: 20px 10px;
  align-items: center;
  background-color: #f2f3f3;
  color: black;
`;

export const CheckboxList = styled.ul`
  list-style: none;
  margin-top: 20px; /* 제목과의 간격 추가 */
  padding: 0;
`;

export const CheckboxItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 0px 10px;
  width: 90%;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 13px;
  color: #333;
`;

export const ViewButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;



export const StepIndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Step = styled.div<{ isActive: boolean }>`
  width: ${({ isActive }) => (isActive ? "67px" : "17px")};
  height: 10px;
  border-radius: 5px;
  background-color: ${({ isActive }) => (isActive ? "#00df82" : "#ccc")};
  margin: 0 5px;
  transition: background-color 0.3s ease;
`;

export const AgreeButton = styled.button`
  width: 359px;
  height: 100%;
  padding: 10px;
  background-color: #00df82;
  color: white;
  border-radius: 0px;
  font-size: 16px;
  cursor: pointer;
  align-self: center; /* 중앙 배치 */
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

interface Props {
  onNext: () => void;
  currentStep: number;
  totalSteps: number;
}
const StepAgreement: React.FC<Props> = ({
  onNext,
  currentStep,
  totalSteps,
}) => {
  const [agreements, setAgreements] = useState({
    all: false,
    age: false,
    terms: false,
    personalInfo: false,
    optionalInfo: false,
  });

  const navigate = useNavigate();

  const allRequiredAgreed =
    agreements.age && agreements.terms && agreements.personalInfo;

  const handleCheckboxChange = (key: keyof typeof agreements) => {
    if (key === "all") {
      const newAllState = !agreements.all;
      setAgreements({
        all: newAllState,
        age: newAllState,
        terms: newAllState,
        personalInfo: newAllState,
        optionalInfo: newAllState,
      });
    } else {
      setAgreements((prev) => {
        const updatedState = { ...prev, [key]: !prev[key] };
        const isAllChecked =
          updatedState.age &&
          updatedState.terms &&
          updatedState.personalInfo &&
          updatedState.optionalInfo;
        return { ...updatedState, all: isAllChecked };
      });
    }
  };

  return (
    <StepAgreeMentContainer>
      <AgreeMentHeaderContainer>
        <BackButton>
          <img onClick={() => navigate("/login")} src="/assets/backArrow.png" />
        </BackButton>
      </AgreeMentHeaderContainer>
      <AgreeMentMainContainer>
        <Title>서비스 이용약관에 동의해주세요.</Title>
        <AllCheckButtonContainer>
          <StyledCheckbox
            checked={agreements.all}
            onClick={() => handleCheckboxChange("all")}
          />
          네, 모두 동의합니다.
        </AllCheckButtonContainer>
        <CheckboxList>
          <CheckboxItem>
            <LeftContainer>
              <StyledCheckbox
                checked={agreements.age}
                onClick={() => handleCheckboxChange("age")}
              />
              <Text>[필수] 만 14세 이상입니다.</Text>
            </LeftContainer>
          </CheckboxItem>
          <CheckboxItem>
            <LeftContainer>
              <StyledCheckbox
                checked={agreements.terms}
                onClick={() => handleCheckboxChange("terms")}
              />
              <Text>[필수] 서비스 이용약관 동의</Text>
            </LeftContainer>
          </CheckboxItem>
          <CheckboxItem>
            <LeftContainer>
              <StyledCheckbox
                checked={agreements.personalInfo}
                onClick={() => handleCheckboxChange("personalInfo")}
              />
              <Text>[필수] 개인정보 수집 및 이용 동의</Text>
            </LeftContainer>
            <ViewButton>보기</ViewButton>
          </CheckboxItem>
          <CheckboxItem>
            <LeftContainer>
              <StyledCheckbox
                checked={agreements.optionalInfo}
                onClick={() => handleCheckboxChange("optionalInfo")}
              />
              <Text>[선택] 선택정보 수집 및 이용 동의</Text>
            </LeftContainer>
            <ViewButton>보기</ViewButton>
          </CheckboxItem>
        </CheckboxList>
      </AgreeMentMainContainer>
      <AgreeMentBottomContainer>
        <StepIndicatorContainer>
          {Array.from({ length: totalSteps }, (_, index) => (
            <Step key={index} isActive={index + 1 === currentStep} />
          ))}
        </StepIndicatorContainer>
        <AgreeButton onClick={onNext} disabled={!allRequiredAgreed}>
          다음
        </AgreeButton>
      </AgreeMentBottomContainer>
    </StepAgreeMentContainer>
  );
};

export default StepAgreement;
