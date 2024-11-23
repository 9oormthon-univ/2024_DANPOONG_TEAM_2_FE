import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectLankCard from "./project_lank_card";
import token from "../token";

const categories = [
  { id: "ANIMAL_FRIENDLY", label: "🐶 동물 복지" },
  { id: "LOCAL_PRODUCT", label: "🌍 지역 생산" },
  { id: "RECYCLE_ENERGY", label: "🌿 재생에너지" },
  { id: "CULTURAL_PRESERVE", label: "🏛️ 문화 보존" },
  { id: "EMPLOY_VULNERABLE_CLASS", label: "💪 취약계층 고용" },
  { id: "CO2_FOOTPRINT", label: "♻️ 탄소발자국 절감" },
  { id: "ORGANIC", label: "🍀 유기농" },
];

interface Project {
  id: number;
  certifiedType: string[];
  name: string;
  profileImage: string;
  fundingTarget: number;
  fundingCurrent: number;
  fundedCount: number;
  likeCount: number;
  images: string[0];
}

const ProjectLank: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  console.log("보내는 selectedCategory", selectedCategory);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await token.post(
          "/api/store/list",
          {
            certifiedType:
              selectedCategory === "all" ? undefined : selectedCategory,
            page: 0,
            size: 10,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("API Response:", response.data);
        setProjects(response.data.data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [selectedCategory]);

  return (
    <Container>
      <CategoryList>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            isActive={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </CategoryButton>
        ))}
      </CategoryList>
      {loading ? (
        <LoadingMessage>로딩 중...</LoadingMessage>
      ) : (
        <ProjectGrid>
          {projects
            .filter((project) =>
              selectedCategory === "all"
                ? true
                : project.certifiedType.includes(selectedCategory)
            )
            .map((project) => (
              <ProjectLankCard
                key={project.id}
                tag={
                  project.certifiedType
                    .map((type) =>
                      categories.find(
                        (cat) => cat.id.toLowerCase() === type.toLowerCase()
                      )
                    )
                    .filter(Boolean)
                    .map((cat) => cat?.label)
                    .join(", ") || "기타"
                }
                category={project.name}
                title={project.images}
                likes={project.likeCount}
              />
            ))}
        </ProjectGrid>
      )}
    </Container>
  );
};

export default ProjectLank;

const Container = styled.div`
  padding: 10px;
`;

const CategoryList = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryButton = styled.button<{ isActive?: boolean }>`
  padding: 8px 16px;
  border: ${({ isActive }) =>
    isActive ? "1px solid #00c853" : "1px solid #ddd"};
  border-radius: 20px;
  background-color: ${({ isActive }) => (isActive ? "#00c853" : "#f0f0f0")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#353f3f")};
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: ${({ isActive }) =>
    isActive ? "0px 2px 6px rgba(0, 0, 0, 0.1)" : "none"};

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#00b344" : "#e0e0e0")};
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 16px;
  color: #818787;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-auto-flow: column;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 8px;
    background: #f0f0f0;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`;
