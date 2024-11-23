import { useEffect, useState } from "react";
import * as S from "./FundingSuccessPage.style";
import {
  Pillar,
  PillarsContainer,
} from "../../component/Signup/StepWelcomeScreen";
import completeIcon from "../../assets/completeIcon.svg";
import confetti from "canvas-confetti";
import getStoreInfo from "../../apis/getStoreInfo";
import { useNavigate } from "react-router-dom";
import IProjectInfo from "../../types/ProjectnfoType";

const FundingSuccessPage = () => {
  const [data, setData] = useState<IProjectInfo>();
  const id = localStorage.getItem("fundingTarget")!;
  console.log("상점 아이디", id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStoreInfo(parseInt(id, 10));
        if (response) {
          console.log(response.data);
          setData(response.data); // API 응답 데이터를 상태에 저장
        }
      } catch (error) {
        console.error("Failed to fetch store info:", error);
      }
    };
    fetchData();
  }, []);
  const navigate = useNavigate();

  const fundingAmount = () => {
    const amount = localStorage.getItem("fundingAmount");
    console.log(amount);
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
      <S.Name>{data?.name}</S.Name>
      <S.Amount>{fundingAmount()}원</S.Amount>
      <S.GreetingContainer>
        <S.Profile
          src={
            data?.profileImg
              ? data.profileImg
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          width="67px"
          height="67px"
          alt="프로젝트 이미지"
        />
        <S.TextContainer>
          <S.NameSub>{data?.name}</S.NameSub>
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
export default FundingSuccessPage;
