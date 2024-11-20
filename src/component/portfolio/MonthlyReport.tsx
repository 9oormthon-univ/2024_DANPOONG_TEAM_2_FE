import React from "react";
import styled from "styled-components";

interface MonthlyReportProps {
  onOpenPopup: () => void;
}
const MonthlyReport: React.FC<MonthlyReportProps> = ({ onOpenPopup }) => {
  return (
    <Card>
      <Image src="/assets/report.png" alt="레포트" />
      <Title>월간 투자 레포트</Title>
      <Button onClick={onOpenPopup}>자세히 보기</Button>
    </Card>
  );
};

export default MonthlyReport;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  margin-top: 10px;
  margin-left: 10px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 160px;
  height: 179px;
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 42px;
  height: 40px;
`;

const Title = styled.h3`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const Button = styled.button`
  width: 136px;
  height: 42px;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: #fafafa;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  color: #03624c;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #009f40;
  }
`;
