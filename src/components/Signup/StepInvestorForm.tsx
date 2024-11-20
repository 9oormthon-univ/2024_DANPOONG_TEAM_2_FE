import React from "react";
import styled from "styled-components";
import { BackButton, StepIndicatorContainer, Step, NextButton } from "./StepCommonStyle";
import { useState } from "react";

export const StepInvestorFormContainer = styled.div`
  height: 100%;
  width: 100%;
  color: black;
`;

export const InvestorFormHeaderContainer = styled.div`
  width: 100%;
  height: 10%;
`;

export const InvestorFormMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  justify-content: flex-start;
  width: 100%;
  height: 70%;
  gap: 10px; /* 필드 간 간격 */
`;

export const Title = styled.h2`
  width: 100%;
  text-align: start;
  font-size: 24px;
  line-height: 42px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px; /* 레이블과 입력 필드 간 간격 */
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 14px;
  color: #333;
  background-color: #f7f7f7;
  &:focus {
    outline: none;
    border-color: #00df82;
    background-color: #ffffff;
  }
`;

export const InvestorFormBottomContainer = styled.div`
  width: 100%;
  height: 10%;
`;



export interface Props {
  onNext: () => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

const InvestorForm: React.FC<Props> = ({
  onNext,
  onBack,
  currentStep,
  totalSteps,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  // 모든 필드가 채워졌는지 확인
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.password.trim() !== "";

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <StepInvestorFormContainer>
      <InvestorFormHeaderContainer>
        <BackButton>
          <img onClick={onBack} src="/assets/backArrow.png" />
        </BackButton>
      </InvestorFormHeaderContainer>
      <InvestorFormMainContainer>
        <Title>회원 정보를 입력해주세요.</Title>
        <FormField>
          <Label>이름</Label>
          <Input
            placeholder="이름"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </FormField>
        <FormField>
          <Label>핸드폰 번호</Label>
          <Input
            placeholder="핸드폰 번호"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
        </FormField>
        <FormField>
          <Label>ID (E-Mail)</Label>
          <Input
            placeholder="ID (E-Mail)"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </FormField>
        <FormField>
          <Label>비밀번호</Label>
          <Input
            placeholder="비밀번호"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
        </FormField>
      </InvestorFormMainContainer>
      <InvestorFormBottomContainer>
        {/* Step Indicator */}
        <StepIndicatorContainer>
          {Array.from({ length: totalSteps }, (_, index) => (
            <Step key={index} isActive={index + 1 === currentStep} />
          ))}
        </StepIndicatorContainer>
        <NextButton onClick={onNext} disabled={!isFormValid}>
          다음
        </NextButton>
      </InvestorFormBottomContainer>
    </StepInvestorFormContainer>
  );
};

export default InvestorForm;
