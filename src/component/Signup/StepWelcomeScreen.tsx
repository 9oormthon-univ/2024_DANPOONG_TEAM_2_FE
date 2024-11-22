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
  position: relative;
  color: #333;
`;

const WelcomeScreenHeaderContainer = styled.div`
  width: 100%;
  height: 5%;
`;

const WelcomeScreenMainContainer = styled.div`
  width: 100%;
  height: 90%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeScreenBottomContainer = styled.div`
  width: 100%;
  height: 5%;
`;

export const PillarsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none; /* 클릭 이벤트 무시 */
`;

export const Pillar = styled.div<{ top: string; left: string; color: string; rotation: number }>`
  position: absolute;
  width: 10px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 5px; /* 원형 기둥 모양 */
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotate(${(props) => props.rotation}deg); /* 회전 적용 */
`;

const Logo = styled.img`
  justify-content: center;
  width: 120px;
  margin-bottom: 99px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  line-height: 42px;
  margin-bottom: 50px;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 600;
  line-height: 23px;
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
  // 랜덤한 위치와 색상을 가진 기둥 데이터 생성
  const pillars = [
    { top: "18%", left: "20%", color: "#FF66B3", rotation: 45 },
    { top: "25%", left: "70%", color: "#FFD400", rotation: 340 },
    { top: "31%", left: "90%", color: "#6E85FF", rotation: 310 },
    { top: "41%", left: "74%", color: "#00DF82", rotation: 110 },
    { top: "40%", left: "5%", color: "#FF5D5D", rotation: 130 },
  ];


  const navigate = useNavigate();
  useEffect(() => {
    confetti({
      particleCount: 500,
      spread: 360,
      origin: { x: 0.5, y: 0.5 },
      gravity: 0.7,
    });
  }, []);

  return (
    <StepWelcomeScreenContainer>
      <WelcomeScreenHeaderContainer></WelcomeScreenHeaderContainer>
      <WelcomeScreenMainContainer>
      <PillarsContainer>
        {pillars.map((pillar, index) => (
          <Pillar
            key={index}
            top={pillar.top}
            left={pillar.left}
            color={pillar.color}
            rotation={pillar.rotation} // 수정된 rotation 속성
          />
        ))}
      </PillarsContainer>
        <Logo src="/assets/moa_logo.png" alt="MOA Logo" />
        <Title>MOA 가입을 환영합니다!</Title>
        <Description>
          투자자 회원 가입이 완료되었습니다.
          <br />
          지금 관심 있는 사회적 기업에 투자해보세요!
        </Description>
      </WelcomeScreenMainContainer>
      <WelcomeScreenBottomContainer>
        <StartButton onClick={() => navigate("/")}>시작하기</StartButton>
      </WelcomeScreenBottomContainer>
    </StepWelcomeScreenContainer>
  );
};

export default StepWelcomeScreen;
