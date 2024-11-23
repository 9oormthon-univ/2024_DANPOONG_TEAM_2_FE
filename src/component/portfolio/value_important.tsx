import React from "react";
import styled from "styled-components";

interface ValueImportantProps {
  nickname: string;
  favoriteCertifiedType: string;
}

const categories = [
  { id: "ANIMAL_FRIENDLY", label: "🐶 동물 복지" },
  { id: "LOCAL_PRODUCT", label: "🌍 지역 생산" },
  { id: "RECYCLE_ENERGY", label: "🌿 재생에너지" },
  { id: "CULTURAL_PRESERVE", label: "🏛️ 문화 보존" },
  { id: "EMPLOY_VULNERABLE_CLASS", label: "💪 취약계층 고용" },
  { id: "CO2_FOOTPRINT", label: "♻️ 탄소발자국 절감" },
  { id: "ORGANIC", label: "🍀 유기농" },
];

const ValueImportant: React.FC<ValueImportantProps> = ({
  nickname,
  favoriteCertifiedType,
}) => {
  const topCategory = categories.find(
    (category) => category.id === favoriteCertifiedType
  );
  return (
    <Card>
      <TitleUp>
        <Highlight>{nickname}님</Highlight>은
      </TitleUp>
      <TitleDown>
        <HighlightLabel>{topCategory?.label}</HighlightLabel>를 선호하시네요.
      </TitleDown>
      <DonutChartContainer src="assets/graph.png" />
    </Card>
  );
};

export default ValueImportant;

const Card = styled.div`
  width: 330px;
  flex-shrink: 0;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  padding: 20px;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
`;

const TitleUp = styled.h3`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  letter-spacing: -0.408px;
  margin-left: 220px;
`;
const TitleDown = styled.h3`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  letter-spacing: -0.408px;
  margin-top: -10px;
  margin-left: 109px;
`;

const Highlight = styled.span`
  color: #00c853;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.408px;
`;
const HighlightLabel = styled.span`
  color: #03624c;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.408px;
`;
const DonutChartContainer = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 180px;
  margin-top: 8px;
`;
