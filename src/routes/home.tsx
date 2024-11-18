import React from "react";
import styled from "styled-components";
import Banner from "../component/home/banner";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Content>
        <AttendanceBox>
          <Text>🗓️ 출석체크하고 포인트 가져가세요!</Text>
        </AttendanceBox>
        <Banner />
      </Content>
    </HomeContainer>
  );
};

export default Home;

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
