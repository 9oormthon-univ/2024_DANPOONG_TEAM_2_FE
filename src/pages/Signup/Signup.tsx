import React, { useState } from "react";
import StepAgreement from "../../components/Signup/StepAgreement";
import StepMemberType from "../../components/Signup/StepMemberType";
import styled from "styled-components";
import InvestorForm from "../../components/Signup/StepInvestorForm";
import StepSocialValue from "../../components/Signup/StepSocialValue";
import StepWelcomeScreen from "../../components/Signup/StepWelcomeScreen";

export const SignupContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Signup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); // 현재 단계
  const totalSteps = 5; // 총 단계 수
  const [selectedType, setSelectedType] = useState<string | null>(null); // Investor or Business

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <SignupContainer>
      {/* Step 1: 동의 단계 */}
      {currentStep === 1 && (
        <StepAgreement
          onNext={goToNextStep}
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      )}

      {/* Step 2: 회원 유형 선택 */}
      {currentStep === 2 && (
        <StepMemberType
          onNext={goToNextStep}
          setSelectedType={setSelectedType}
        />
      )}

      {/* Step 3: 투자자 폼 선택 */}
      {currentStep === 3 && selectedType === "investor" && (
        <InvestorForm
          onNext={goToNextStep}
          onBack={goToPreviousStep}
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      )}
    
      {/* Step 4: 투자자 선택 후 -> 사회적가치 선택 */}
      {currentStep === 4 && selectedType === "investor" && (
        <StepSocialValue
          onNext={goToNextStep}
          onBack={goToPreviousStep}
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      )}

      {/* Step 5: 투자자 선택 후 -> 사회적가치 선택 */}
      {currentStep === 5 && selectedType === "investor" && (
        <StepWelcomeScreen
          onNext={goToNextStep}
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      )}
    </SignupContainer>
  );
};

export default Signup;
