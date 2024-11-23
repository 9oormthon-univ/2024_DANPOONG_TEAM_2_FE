import React from "react";
import styled from "styled-components";
import { BackgroundOverlay } from "../bottomSheet/BottomSheet.style";

interface ProjectRecommendProps {
  tag: string;
  category: string;
  title: string;
  likes: number;
}

const ProjectRecommend: React.FC<ProjectRecommendProps> = ({
  tag,
  category,
  title,
  likes,
}) => {
  const Data = {
    tag: tag,
    category: category,
    title: title,
    likes: likes,
    image: "https://i.imgur.com/mznW94d.png",
  };

  return (
    <Card>
      <ImageContainer>
        <Tag>{Data.tag}</Tag>
        <Image src={Data.image} />
      </ImageContainer>
      <Content>
        <Category>{Data.category}</Category>
        <Title>{Data.title}</Title>
        <Details>
          <Likes>⭐ {Data.likes}</Likes>
          <Button>상세 보기</Button>
        </Details>
      </Content>
    </Card>
  );
};

export default ProjectRecommend;

const Card = styled.div`
  width: 280px;
  height: 260px;
  background-color: #ffffff;
  border-radius: 0px 0px 12px 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: Arial, sans-serif;
  flex-shrink: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 12px 12px 0px 0px;
  background-color: #f2f2f2;
`;

const Tag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 54px;
  background: #00df82;
  color: white;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 8px;
  margin-top: 2px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
  border-radius: 8px 8px 0px 0px;
`;

const Content = styled.div`
  padding: 16px;
`;

const Category = styled.div`
  color: #9f9f9f;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.408px;
  margin-right: 200px;
  margin-top: 3px;
`;

const Title = styled.h3`
  color: #353f3f;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-bottom: 10px;
  margin-right: 113px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 38px;
  background: #818787;
  color: #fafafa;
  text-align: center;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.408px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;
