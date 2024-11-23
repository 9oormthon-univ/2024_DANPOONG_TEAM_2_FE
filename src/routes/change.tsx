import React, { useState } from "react";
import ChangeCard from "../component/portfolio/change_card";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Change: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([
    {
      storeId: 1,
      storeName: "민무네 찰옥수수",
      storePicture: "https://via.placeholder.com/150",
      isProjectCompleted: false,
      myFundingAmount: 10000,
    },
    {
      storeId: 2,
      storeName: "차로 하는 이야기 녹차담",
      storePicture: "https://via.placeholder.com/150",
      isProjectCompleted: true,
      myFundingAmount: 10000,
    },
  ]);

  const handleClick = (storeId: number, myFundingAmount: number) => {
    navigate("/change_finish", {
      state: { storeId, myFundingAmount },
    });
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Header>
        <BackButton onClick={() => navigate("/portfolio")}>{"<"}</BackButton>
        <Title>투자 관리</Title>
      </Header>
      {projects.map((project) => (
        <ChangeCard
          key={project.storeId}
          storeId={project.storeId}
          storeName={project.storeName}
          storePicture={project.storePicture}
          isProjectCompleted={project.isProjectCompleted}
          myFundingAmount={project.myFundingAmount}
          onClick={() => handleClick(project.storeId, project.myFundingAmount)}
        />
      ))}
    </div>
  );
};
const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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
export default Change;
