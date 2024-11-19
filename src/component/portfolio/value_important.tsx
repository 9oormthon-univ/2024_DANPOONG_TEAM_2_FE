import React from "react";
import styled from "styled-components";

interface ValueImportantProps {
  userName: string;
  topCategories: { category: string; ratio: number }[];
}

const categories = [
  { id: "animal", label: "🐶 동물 복지" },
  { id: "region", label: "🌍 지역 생산" },
  { id: "energy", label: "🌿 재생에너지" },
  { id: "culture", label: "🏛️ 문화 보존" },
  { id: "hire", label: "💪 취약계층 고용" },
  { id: "footprint", label: "♻️ 탄소발자국 절감" },
];

const ValueImportant: React.FC<ValueImportantProps> = ({
  userName,
  topCategories,
}) => {
  const topCategory = categories.find(
    (cat) => cat.id === topCategories[0].category
  );
  const secondCategory = categories.find(
    (cat) => cat.id === topCategories[1].category
  );

  return (
    <Card>
      <TitleUp>
        <Highlight>{userName}님</Highlight>은
      </TitleUp>
      <TitleDown>
        <HighlightLabel>{topCategory?.label}</HighlightLabel>를 선호하시네요.
      </TitleDown>
      <DonutChartContainer>
        <svg width="120" height="120" viewBox="0 0 36 36">
          <circle
            className="background"
            cx="18"
            cy="18"
            r="12"
            fill="none"
            stroke="#34806F"
            strokeWidth="8"
          />
          <circle
            className="foreground"
            cx="18"
            cy="18"
            r="12"
            fill="none"
            stroke="#03624C"
            strokeWidth="8"
            strokeDasharray={`${topCategories[0].ratio} ${
              100 - topCategories[0].ratio
            }`}
            strokeDashoffset="25"
          />
        </svg>
      </DonutChartContainer>
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
const DonutChartContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 180px;
  margin-top: 8px;
`;
