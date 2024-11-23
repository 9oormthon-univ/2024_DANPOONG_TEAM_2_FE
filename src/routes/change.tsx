import React, { useEffect, useState } from "react";
import ChangeCard from "../component/portfolio/change_card";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import token from "../component/token";

interface Project {
  storeId: number;
  storeName: string;
  storePicture: string;
  isProjectCompleted: boolean;
  myFundingAmount: number;
}

const Change: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await token.get("/api/fundings/my");
        console.log("API Response:", response.data);

        const projectData = response.data.data.myFundingInfoResDtos.map(
          (item: any) => ({
            storeId: item.storeId,
            storeName: item.storeName,
            storePicture: item.storePicture,
            isProjectCompleted: item.isProjectCompleted,
            myFundingAmount: item.myFundingAmount,
          })
        );
        setProjects(projectData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("프로젝트 데이터를 가져오는 데 실패했습니다.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  const handleClick = () => {
    navigate("/coupon_select");
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Header>
        <BackButton onClick={() => navigate("/portfolio")}>{"<"}</BackButton>
        <Title>교환하기</Title>
      </Header>
      {projects.map((project) => (
        <ChangeCard
          key={project.storeId}
          storeId={project.storeId}
          storeName={project.storeName}
          storePicture={project.storePicture}
          isProjectCompleted={project.isProjectCompleted}
          myFundingAmount={project.myFundingAmount}
          onClick={() => handleClick()}
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
