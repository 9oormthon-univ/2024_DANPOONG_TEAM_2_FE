import React, { useState } from "react";
import PortfolioList from "../component/portfolio/portfolio_list";
import styled from "styled-components";
import MonthlyReport from "../component/portfolio/MonthlyReport";
import PremiumPopup from "../component/portfolio/premium_popup";
import ValueImportant from "../component/portfolio/value_important";
import MyList from "../component/portfolio/my_list";
import InvestPurpose from "../component/portfolio/invest_purpose";

const Portfolio: React.FC = () => {
  const dummyData = {
    userName: "모아",
    topCategories: [
      { category: "region", ratio: 80 },
      { category: "energy", ratio: 20 },
    ],
    purpose: "투자 그래프 끌어~올려~!",
  };
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <PortfolioContainer>
      <Header>
        <LogoContainer src="/assets/logo.svg" alt="Logo" />
      </Header>
      <Title>포트폴리오</Title>
      <InvestPurpose purpose={dummyData.purpose} />
      <PortfolioList mileage={1200} />
      <HorizontalContainer>
        <MonthlyReport onOpenPopup={openPopup} />
        <MyList />
      </HorizontalContainer>
      {isPopupVisible && <PremiumPopup onClose={closePopup} />}
      <ValueImportant
        userName={dummyData.userName}
        topCategories={dummyData.topCategories}
      />
    </PortfolioContainer>
  );
};
const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 10;
  padding: 10px 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.img`
  width: 76px;
  height: 26px;
`;
const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: bold;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 100vh;
  z-index: 1;
  background-color: white;
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1px;
  margin-top: 20px;
`;

export default Portfolio;
