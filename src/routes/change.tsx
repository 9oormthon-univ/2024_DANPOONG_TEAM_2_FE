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
    return <Container>로딩 중...</Container>;
  }

  if (error) {
    return <Container>{error}</Container>;
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
        <Title>교환하기</Title>
      </Header>
      <ScrollableContent>
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
      </ScrollableContent>
    </Container>
  );
};

export default Change;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  align-items: stretch;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  flex-shrink: 0;
  background: white;
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

const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  background: #f9f9f9;
`;
