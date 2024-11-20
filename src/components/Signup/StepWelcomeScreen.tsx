import React, { useEffect } from "react";
import styled from "styled-components";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
const StepWelcomeScreenContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #333;
`;

const WelcomeScreenHeaderContainer = styled.div`
  width: 100%;
  height: 10%;
`;

const WelcomeScreenMainContainer = styled.div`
  width: 100%;
  height: 80%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeScreenBottomContainer = styled.div`
  width: 100%;
  height: 10%;
`;

const Logo = styled.img`
  justify-content: center;
  width: 120px;
  margin-bottom: 99px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
`;

const StartButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 0px;
  background-color: #00df82;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #00c774;
  }
`;

export interface Props {
  onNext: () => void;
  currentStep: number;
  totalSteps: number;
}

const StepWelcomeScreen: React.FC<Props> = () => {
    const navigate = useNavigate();
  useEffect(() => {
      confetti({
        particleCount: 500,
        spread: 360,
        origin: { x: 0.5, y: 0.5 },
        gravity: 0.7
      });
  }, []);

  return (
    <StepWelcomeScreenContainer>
      <WelcomeScreenHeaderContainer></WelcomeScreenHeaderContainer>
      <WelcomeScreenMainContainer>
        <Logo src="/assets/moa_logo.png" alt="MOA Logo" />
        <Title>MOA 가입을 환영합니다!</Title>
        <Description>
          투자자 회원 가입이 완료되었습니다.
          <br />
          지금 관심 있는 사회적 기업에 투자해보세요!
        </Description>
      </WelcomeScreenMainContainer>
      <WelcomeScreenBottomContainer>
        <StartButton onClick={() => navigate('/')}>시작하기</StartButton>
      </WelcomeScreenBottomContainer>
    </StepWelcomeScreenContainer>
  );
};

export default StepWelcomeScreen;
