import React, { useState } from "react";
import styled from "styled-components";

const ProjectWhere: React.FC = () => {
  const dummyData = [
    { name: "기업 프로젝트 명 1", description: "어필 한 마디 1" },
    { name: "기업 프로젝트 명 2", description: "어필 한 마디 2" },
    { name: "기업 프로젝트 명 3", description: "어필 한 마디 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePaginationClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Container>
      <Slider currentIndex={currentIndex}>
        {dummyData.map((project, index) => (
          <Card key={index}>
            <CardImg />
            <Content>
              <Title>{project.name}</Title>
              <Description>{project.description}</Description>
            </Content>
          </Card>
        ))}
      </Slider>
      <Pagination>
        {dummyData.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </Pagination>
    </Container>
  );
};

export default ProjectWhere;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: #f2f3f3;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Card = styled.div`
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const CardImg = styled.div`
  width: 60px;
  height: 60px;
  background-color: #d9d9d9;
  border-radius: 8px;
  margin-right: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #353f3f;
  margin: 0;
`;

const Description = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #818787;
  margin: 4px 0 0;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const Dot = styled.div<{ active?: boolean }>`
  width: 8px;
  height: 8px;
  margin: 0 4px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#353f3f" : "#d3d3d3")};
  cursor: pointer;
`;
const Slider = styled.div<{ currentIndex: number }>`
  display: flex;
  width: 100%;
  gap: 5px;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => -props.currentIndex * 100}%);
`;
