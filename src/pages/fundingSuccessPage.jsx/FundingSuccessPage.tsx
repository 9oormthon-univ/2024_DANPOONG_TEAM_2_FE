import { useEffect } from "react";
import * as S from "./FundingSuccessPage.style";
import {
  Pillar,
  PillarsContainer,
} from "../../component/Signup/StepWelcomeScreen";
import completeIcon from "../../assets/completeIcon.svg";
import profileImg from "../../../public/assets/sample_farmer.png";

import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
const FundingSuccessPage = () => {
  const pillars = [
    { top: "6%", left: "20%", color: "#FF66B3", rotation: 45 },
    { top: "10%", left: "80%", color: "#FFD400", rotation: 340 },
    { top: "21%", left: "86%", color: "#6E85FF", rotation: 310 },
    { top: "31%", left: "78%", color: "#00DF82", rotation: 290 },
    { top: "30%", left: "5%", color: "#FF5D5D", rotation: 130 },
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
    <S.Page>
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
      <S.Icon src={completeIcon} alt="펀딩 완료 아이콘" />
      <S.Name>민우네 찰옥수수수수수퍼노바</S.Name>
      <S.Amount>5555,000원</S.Amount>
      <S.GreetingContainer>
        <S.Profile
          src={profileImg}
          width="67px"
          height="67px"
          alt="프로젝트 이미지"
        />
        <S.TextContainer>
          <S.NameSub>민우네 찰옥수수</S.NameSub>
          <S.Comment>💬정말 감사합니다! 믿고 맡겨주세요 :)</S.Comment>
        </S.TextContainer>
      </S.GreetingContainer>
      <S.BtnContainer>
        <S.ShowDetailBtn>상세내역</S.ShowDetailBtn>
        <S.ConfirmBtn onClick={() => navigate("/")}>확인</S.ConfirmBtn>
      </S.BtnContainer>
    </S.Page>
  );
};
export default FundingSuccessPage;
