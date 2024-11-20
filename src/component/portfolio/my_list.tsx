import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyList: React.FC = () => {
  const navigate = useNavigate();

  const handleInvestClick = () => {
    navigate("/invest-list");
  };
  return (
    <Card>
      <Image src="/assets/list_logo.png" alt="리스트" />
      <Title>MY 투자 내역</Title>
      <Button onClick={handleInvestClick}>자세히 보기</Button>
    </Card>
  );
};

export default MyList;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  margin-top: 10px;
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
  width: 51px;
  height: 34px;
  margin-bottom: 6px;
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
