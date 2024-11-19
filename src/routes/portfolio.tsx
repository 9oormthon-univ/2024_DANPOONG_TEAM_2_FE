import React from "react";
import PortfolioList from "../component/portfolio/portfolio_list";
import styled from "styled-components";

const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer>
      <Title>포트폴리오</Title>
      <PortfolioList mileage={1200} />
    </PortfolioContainer>
  );
};
const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: bold;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
`;
const PortfolioContainer = styled.div`
  display: absolute;
  margin-top: 20px;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  z-index: 1;
  background-color: white;
`;
export default Portfolio;
