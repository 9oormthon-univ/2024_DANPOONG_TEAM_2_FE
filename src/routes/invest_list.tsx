import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MileageHeader from "../component/portfolio/mileage_header";
import { useNavigate } from "react-router-dom";
import InvestCard from "../component/portfolio/invest_card";
import token from "../component/token";

interface FundingHistory {
  storeId: number;
  fundingDate: string;
  storeName: string;
  amount: number;
}

interface ResponseData {
  data: {
    totalMileageAmount: number;
    historyInfoResDtos: FundingHistory[];
    investmentGoal: string;
  };
}

const InvestList: React.FC = () => {
  const [mileage, setMileage] = useState<number>(0);
  const [fundingHistory, setFundingHistory] = useState<FundingHistory[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchFundingHistory = async () => {
      try {
        console.log("Fetching funding history...");
        const response = await token.get<ResponseData>(
          "/api/members/my-punding-history"
        );
        console.log("API Response:", response.data);

        setMileage(response.data.data.totalMileageAmount ?? 0);
        setFundingHistory(
          Array.isArray(response.data.data.historyInfoResDtos)
            ? response.data.data.historyInfoResDtos
            : []
        );
      } catch (error) {
        console.error("Error fetching funding history:", error);
        setMileage(0);
        setFundingHistory([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFundingHistory();
  }, []);

  if (loading) {
    return <Container>로딩 중...</Container>;
  }
  const handleCardClick = (storeId: number) => {
    navigate(`/return/${storeId}`);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate("/portfolio")}>{"<"}</BackButton>
        <Title>투자 관리</Title>
      </Header>
      <Divider />
      <MileageHeader mileage={mileage} />
      <ScrollableArea>
        {fundingHistory.map((item, index) => (
          <InvestCard
            key={index}
            fundingDate={item.fundingDate}
            storeName={item.storeName}
            amount={`${item.amount}원`}
            storeId={item.storeId}
            onClick={handleCardClick}
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
  margin-bottom: 40px;
  margin-top: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  margin-right: 5px;
  margin-left: 10px;
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
  margin-left: 120px;
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
