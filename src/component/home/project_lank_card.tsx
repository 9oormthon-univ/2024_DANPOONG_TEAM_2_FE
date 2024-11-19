import React from "react";
import styled from "styled-components";

interface ProjectLankCardProps {
  tag: string;
  category: string;
  title: string;
  likes: number;
}

const ProjectLankCard: React.FC<ProjectLankCardProps> = ({
  tag,
  category,
  title,
  likes,
}) => {
  return (
    <Card>
      <ImageContainer>
        <Tag>{tag}</Tag>
        <Image />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Category>{category}</Category>
        <Likes>⭐ {likes}</Likes>
      </Content>
    </Card>
  );
};

export default ProjectLankCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: Pretendard, sans-serif;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
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
  border-radius: 16px;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const Content = styled.div`
  padding: 16px;
  height: 100px;
`;

const Title = styled.h3`
  color: #353f3f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-right: 95px;
`;

const Category = styled.p`
  color: #cdcfcf;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.408px;
  margin-right: 125px;
`;

const Likes = styled.div`
  color: #9f9f9f;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.408px;
  margin-top: 30px;
  margin-left: 110px;
`;
