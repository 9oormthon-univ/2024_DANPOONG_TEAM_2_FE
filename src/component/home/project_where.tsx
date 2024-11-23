import React, { useState } from "react";
import styled from "styled-components";

const ProjectWhere: React.FC = () => {
  const dummyData = [
    {
      name: "차로 하는 이야기, 녹차담",
      description: "하동에서 전하는 초록빛 소리로 일상에 쉼을",
      image: "assets/tea_image.png",
    },
    {
      name: "새김 백자 공방 프로젝트",
      description: "백자에 새기는 나만의 이야기, 맞춤 제작 새김 백자",
      image: "assets/bottle_image.png",
    },
    {
      name: "Bind of AHN ",
      description: "안동 전통 직조로 만든 소품으로 가득한 패션 편집샵",
      image: "assets/shoes_image.png",
    },
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
            <CardImg src={project.image} alt={project.name} />
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

const CardImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin-right: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: #353f3f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const Description = styled.p`
  color: #353f3f;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.408px;
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
