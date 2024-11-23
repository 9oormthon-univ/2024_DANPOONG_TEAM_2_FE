import React, { useEffect, useState } from "react";
import PortfolioList from "../component/portfolio/portfolio_list";
import styled from "styled-components";
import MonthlyReport from "../component/portfolio/MonthlyReport";
import PremiumPopup from "../component/portfolio/premium_popup";
import ValueImportant from "../component/portfolio/value_important";
import MyList from "../component/portfolio/my_list";
import InvestPurpose from "../component/portfolio/invest_purpose";
import token from "../component/token";

interface UserData {
  nickname: string;
  totalMileageAmount: number;
  favoriteCertifiedType: string;
  investmentGoal: string;
}

const Portfolio: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await token.get("/api/members");
        console.log("API Response:", response.data);
        setUserData(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("사용자 데이터를 가져오는 데 실패했습니다.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
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
      <InvestPurpose goal={userData?.investmentGoal || "알 수 없음"} />
      <PortfolioList mileage={userData?.totalMileageAmount || 0} />
      <HorizontalContainer>
        <MonthlyReport onOpenPopup={openPopup} />
        <MyList />
      </HorizontalContainer>
      {isPopupVisible && <PremiumPopup onClose={closePopup} />}
      <ValueImportant
        nickname={userData?.nickname || "알 수 없음"}
        favoriteCertifiedType={userData?.favoriteCertifiedType || "알 수 없음"}
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
  gap: 10px;
  margin-top: 10px;
`;

export default Portfolio;
