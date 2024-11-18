import React from "react";
import styled from "styled-components";

const ProjectRecommend: React.FC = () => {
  const dummyData = {
    tag: "동물 복지",
    category: "요식업",
    title: "지역 특산물 활용 요리",
    likes: 75,
  };

  return (
    <Card>
      <ImageContainer>
        <Tag>{dummyData.tag}</Tag>
        <Image />
      </ImageContainer>
      <Content>
        <Category>{dummyData.category}</Category>
        <Title>{dummyData.title}</Title>
        <Details>
          <Likes>★ {dummyData.likes}</Likes>
          <Button>상세 보기</Button>
        </Details>
      </Content>
    </Card>
  );
};

export default ProjectRecommend;

const Card = styled.div`
  width: 300px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: Arial, sans-serif;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  border-radius: 12px 12px 0px 0px;
  background-color: #f2f2f2;
`;

const Tag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #00c853;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 8px;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
  border-radius: 8px;
`;

const Content = styled.div`
  padding: 16px;
`;

const Category = styled.div`
  font-size: 12px;
  color: #757575;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin: 0;
  margin-bottom: 16px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Likes = styled.div`
  font-size: 14px;
  color: #757575;
`;

const Button = styled.button`
  padding: 6px 12px;
  background-color: #eeeeee;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  color: #333333;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;
