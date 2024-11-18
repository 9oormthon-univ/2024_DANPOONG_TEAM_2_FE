import React from "react";
import styled from "styled-components";
import Banner from "../component/home/banner";
import Value from "../component/home/value";
import ProjectRecommend from "../component/home/project_recommend";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Content>
        <AttendanceBox>
          <Text>🗓️ 출석체크하고 포인트 가져가세요!</Text>
        </AttendanceBox>
        <Banner />
        <ValueTitle>MOA가 조명하는 가치들이에요.</ValueTitle>
        <Value />
        <ProjectRecommendTitle>프로젝트 추천</ProjectRecommendTitle>
        <ProjectRecommendSemiTitle>
          모모님의 가치관에 맞는 프로젝트를 찾았어요!
        </ProjectRecommendSemiTitle>
        <HorizontalScrollContainer>
          <ProjectRecommend />
          <ProjectRecommend />
          <ProjectRecommend />
          <ProjectRecommend />
        </HorizontalScrollContainer>
      </Content>
    </HomeContainer>
  );
};

export default Home;

const ValueTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 105px;
  color: #353f3f;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  z-index: 1;
  background-color: white;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
`;

const AttendanceBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 12px;
  padding: 10px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: center;
`;

const Text = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const ProjectRecommendTitle = styled.h2`
  color: #353f3f;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-top: 10px;
  margin-right: 218px;
  margin-bottom: -7px;
`;

const ProjectRecommendSemiTitle = styled.div`
  color: #818787;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-right: 135px;
  margin-bottom: 10px;
`;

const HorizontalScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 10px 0;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
