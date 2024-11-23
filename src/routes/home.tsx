import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../component/home/banner";
import Value from "../component/home/value";
import ProjectRecommend from "../component/home/project_recommend";
import ProjectWhere from "../component/home/project_where";
import ProjectLank from "../component/home/project_lank";
import getProjectRecommend from "../apis/getProjectRecommend";

interface Store {
  storeId: number;
  isFinished: boolean;
  name: string;
  category: string;
  profileImage: string;
  caption: string;
  fundingTarget: number;
  fundingCurrent: number;
  images: string[];
  content: string;
  address: string;
  x: number;
  y: number;
  certifiedType: string[];
  startAt: string;
  endAt: string;
  fundedCount: number;
  likeCount: number;
}

const Home: React.FC = () => {
  const dummyData = {
    nickname: "모아",
  };

  const [projectData, setProjectData] = useState([] as Store[]);

  useEffect(() => {
    const fetchProjects = async () => {
      getProjectRecommend()
        .then((data: any) => {
          if (!data || data.statusCode != 200) {
            throw new Error("프로젝트 추천 가져오기 실패");
          }

          return data.data;
        })
        .then((data: Store[]) => {
          setProjectData(data);
        });
    };
    fetchProjects();
  }, []);

  return (
    <HomeContainer>
      <Header>
        <LogoContainer src="/assets/logo.svg" alt="Logo" />
      </Header>
      <Content>
        <AttendanceBox>
          <Text>🗓️ 출석체크하고 포인트 가져가세요!</Text>
        </AttendanceBox>
        <Banner />
        <ValueTitle>MOA가 조명하는 가치들이에요.</ValueTitle>
        <Value />
        <ProjectRecommendTitle>프로젝트 추천</ProjectRecommendTitle>
        <ProjectRecommendSemiTitle>
          {dummyData.nickname}님의 가치관에 맞는 프로젝트를 찾았어요!
        </ProjectRecommendSemiTitle>
        <HorizontalScrollContainer>
          {projectData.map((store, _) => (
            <ProjectRecommend
              key={store.storeId}
              tag={store.certifiedType[0]}
              category={store.category}
              title={store.name}
              likes={store.likeCount}
              profileImage={store.profileImage}
            />
          ))}
        </HorizontalScrollContainer>
        <ProjectWhereTitle>관심 지역 프로젝트</ProjectWhereTitle>
        <ProjectWhereSemiTitle>
          {dummyData.nickname}님의 관심 지역에서 새로 올라온 프로젝트에요.
        </ProjectWhereSemiTitle>
        <ProjectWhere />
        <ProjecLankTitle>인기 프로젝트</ProjecLankTitle>
        <ProjecLankSemiTitle>
          현재 가장 인기있는 프로젝트들이에요.
        </ProjecLankSemiTitle>
        <ProjectLank />
      </Content>
    </HomeContainer>
  );
};

export default Home;

const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 10;
  padding: 10px 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.img`
  width: 76px;
  height: 26px;
`;
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

const ProjectWhereTitle = styled.h2`
  color: #353f3f;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-top: 10px;
  margin-right: 190px;
  margin-bottom: -7px;
`;
const ProjectWhereSemiTitle = styled.div`
  color: #818787;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-right: 118px;
  margin-top: 2px;
  margin-bottom: 10px;
`;
const ProjecLankTitle = styled.h2`
  color: #353f3f;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-top: 20px;
  margin-right: 190px;
  margin-bottom: -7px;
`;
const ProjecLankSemiTitle = styled.div`
  color: #818787;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-right: 135px;
  margin-top: 2px;
  margin-bottom: 7px;
`;
