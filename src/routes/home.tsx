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
        <ProjectRecommend />
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
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.408px;
`;
