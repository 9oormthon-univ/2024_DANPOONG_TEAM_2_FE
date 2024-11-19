// pages/Signup.tsx
import React, { useState } from "react";
import StepAgreement from "../../components/Signup/StepAgreement";
import StepMemberType from "../../components/Signup/StepMemberType";
import styled from "styled-components";

export const SignupContainer = styled.div`
   width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  
`;

const Signup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); // 현재 단계

  const goToNextStep = () => setCurrentStep((prev) => prev + 1);
  const goToPreviousStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <SignupContainer>
      {currentStep === 1 && <StepAgreement onNext={goToNextStep} />}
      {currentStep === 2 && (
        <StepMemberType onNext={goToNextStep} onBack={goToPreviousStep} />
      )}
      {/* 이후 단계 추가 */}
    </SignupContainer>
  );
};

export default Signup;
