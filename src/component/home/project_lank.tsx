import React, { useState } from "react";
import styled from "styled-components";
import ProjectLankCard from "./project_lank_card";

const categories = [
  { id: "animal", label: "🐶 동물 복지" },
  { id: "region", label: "🌍 지역 생산" },
  { id: "energy", label: "🌿 재생에너지" },
  { id: "culture", label: "🏛️ 문화 보존" },
  { id: "hire", label: "💪 취약계층 고용" },
  { id: "footprint", label: "♻️ 탄소발자국 절감" },
];

const dummyProjects = [
  {
    id: 1,
    category: "animal",
    title: "프로젝트명",
    company: "업체명",
    likes: 142,
  },
  {
    id: 2,
    category: "region",
    title: "프로젝트명",
    company: "업체명",
    likes: 98,
  },
  {
    id: 3,
    category: "energy",
    title: "프로젝트명",
    company: "업체명",
    likes: 75,
  },
  {
    id: 4,
    category: "culture",
    title: "프로젝트명",
    company: "업체명",
    likes: 64,
  },
  {
    id: 5,
    category: "hire",
    title: "프로젝트명",
    company: "업체명",
    likes: 82,
  },
  {
    id: 6,
    category: "footprint",
    title: "프로젝트명",
    company: "업체명",
    likes: 55,
  },
  {
    id: 7,
    category: "animal",
    title: "프로젝트명",
    company: "업체명",
    likes: 142,
  },
  {
    id: 8,
    category: "region",
    title: "프로젝트명",
    company: "업체명",
    likes: 98,
  },
];

const ProjectLank: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? dummyProjects
      : dummyProjects.filter(
          (project) => project.category === selectedCategory
        );
  return (
    <Container>
      <CategoryList>
        <CategoryButton
          isActive={selectedCategory === "all"}
          onClick={() => setSelectedCategory("all")}
        >
          전체
        </CategoryButton>
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
      <ProjectGrid>
        {filteredProjects.map((project) => (
          <ProjectLankCard
            key={project.id}
            tag={
              categories.find((cat) => cat.id === project.category)?.label || ""
            }
            category={project.company}
            title={project.title}
            likes={project.likes}
          />
        ))}
      </ProjectGrid>
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
