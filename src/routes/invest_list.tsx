import React from "react";
import styled from "styled-components";
import MileageHeader from "../component/portfolio/mileage_header";
import { useNavigate } from "react-router-dom";
import InvestCard from "../component/portfolio/invest_card";

const InvestList: React.FC = () => {
  const dummyMileage = 1000;
  const dummyData = [
    { date: "11.23", description: "강원도 민우네 찰옥수수", points: "5,000" },
    { date: "10.16", description: "차로 하는 이야기 녹차담", points: "10,000" },
    { date: "10.15", description: "차로 하는 이야기 녹차담", points: "10,000" },
    { date: "10.14", description: "강원도 민우네 찰옥수수", points: "8,000" },
    { date: "10.13", description: "강원도 민우네 찰옥수수", points: "12,000" },
    {
      date: "10.12",
      description: "시장떡볶이 프렌차이즈",
      points: "6,500",
    },
  ];
  const navigate = useNavigate();
  const handleCheckDetails = () => {
    navigate("/return_check");
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate("/portfolio")}>{"<"}</BackButton>
        <Title>투자 관리</Title>
      </Header>
      <Divider />
      <MileageHeader
        mileage={dummyMileage}
        onCheckDetails={handleCheckDetails}
      />
      <ScrollableArea>
        {dummyData.map((item, index) => (
          <InvestCard
            key={index}
            date={item.date}
            description={item.description}
            points={item.points}
          />
        ))}
      </ScrollableArea>
    </Container>
  );
};

export default InvestList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
  background: #f9f9f9;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 5px;
  &:hover {
    color: #00c853;
  }
`;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-left: 75px;
`;

const Divider = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  margin-top: -20px;
`;

const ScrollableArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f9f9f9;
  }
`;
