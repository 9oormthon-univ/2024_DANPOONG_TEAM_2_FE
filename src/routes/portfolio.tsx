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
  const [loading, setLoading] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
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

  const handleGoalUpdate = async (newGoal: string) => {
    try {
      console.log("Updating investment goal:", newGoal);
      await token.patch("/api/members/investment-goal", {
        investmentGoal: newGoal,
      });
      if (userData) {
        setUserData({ ...userData, investmentGoal: newGoal });
      }
      alert("투자 목표가 성공적으로 수정되었습니다!");
    } catch (error) {
      console.error("Error updating investment goal:", error);
      alert("투자 목표를 수정하는 데 실패했습니다.");
    }
  };

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  if (loading) {
    return <PortfolioContainer>로딩 중...</PortfolioContainer>;
  }

  if (error) {
    return <PortfolioContainer>{error}</PortfolioContainer>;
  }

  return (
    <PortfolioContainer>
      <Header>
        <LogoContainer src="/assets/logo.svg" alt="Logo" />
      </Header>
      <Title>포트폴리오</Title>
      <InvestPurpose
        goal={userData?.investmentGoal || "알 수 없음"}
        onGoalUpdate={handleGoalUpdate}
      />
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

export default Portfolio;

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
