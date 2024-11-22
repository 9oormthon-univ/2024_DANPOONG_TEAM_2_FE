import { useEffect } from "react";
import * as S from "./FundingSuccess.style";
import { Pillar, PillarsContainer } from "../Signup/StepWelcomeScreen";
import completeIcon from "../../assets/completeIcon.svg";
import IProjectInfo from "../../types/ProjectnfoType";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";
const FundingSuccess = ({ data }: { data: IProjectInfo }) => {
  const navigate = useNavigate();

  const fundingAmount = () => {
    const amount = localStorage.getItem("successAmount");
    if (amount) {
      return parseInt(amount).toLocaleString("ko-KR");
    } else {
      throw new Error("Error : 펀딩 금액을 불러오지 못했습니다.");
    }
  };
  const removeStorage = () => {
    localStorage.removeItem("successAmount");
  };
  const comfirmFundingResult = () => {
    removeStorage();
    navigate("/");
  };

  const pillars = [
    { top: "6%", left: "20%", color: "#FF66B3", rotation: 45 },
    { top: "10%", left: "80%", color: "#FFD400", rotation: 340 },
    { top: "21%", left: "86%", color: "#6E85FF", rotation: 310 },
    { top: "31%", left: "78%", color: "#00DF82", rotation: 290 },
    { top: "30%", left: "5%", color: "#FF5D5D", rotation: 130 },
  ];

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
            rotation={pillar.rotation}
          />
        ))}
      </PillarsContainer>
      <S.Icon src={completeIcon} alt="펀딩 완료 아이콘" />
      <S.Name>{data.name}</S.Name>
      <S.Amount>{fundingAmount()}원</S.Amount>
      <S.GreetingContainer>
        <S.Profile
          src={data.profileImg}
          width="67px"
          height="67px"
          alt="프로젝트 이미지"
        />
        <S.TextContainer>
          <S.NameSub>{data.name}</S.NameSub>
          <S.Comment>💬정말 감사합니다! 믿고 맡겨주세요 :)</S.Comment>
        </S.TextContainer>
      </S.GreetingContainer>
      <S.BtnContainer>
        <S.ShowDetailBtn>상세내역</S.ShowDetailBtn>
        <S.ConfirmBtn onClick={comfirmFundingResult}>확인</S.ConfirmBtn>
      </S.BtnContainer>
    </S.Page>
  );
};
export default FundingSuccess;
