import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthContext";

// Enum 타입 정의
enum CertifiedType {
  CO2_FOOTPRINT = "탄소발자국",
  EMPLOY_VULNERABLE_CLASS = "취약계층 고용",
  LOCAL_PRODUCT = "지역 생산",
  ORGANIC = "유기농",
  RECYCLE_ENERGY = "재생에너지",
  CULTURAL_PRESERVE = "문화 보존",
  ANIMAL_FRIENDLY = "동물 복지",
}

interface CertifiedTypeData {
  certifiedType: keyof typeof CertifiedType; // Enum의 키값
}

interface ScrapStore {
  storeName: string;
  storeContent: string;
  storeImage: string;
  certifiedTypes: CertifiedTypeData[];
  isScrap: boolean;
}
const MyScrap: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useAuth(); // AuthContext에서 token 가져오기
  const [scrapStores, setScrapStores] = useState<ScrapStore[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // API 호출
  useEffect(() => {
    const fetchScrapStores = async () => {
      try {
        const response = await axios.get(
          "https://moa-api.duckdns.org/api/members/mypage/scrap-stores",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const { scrapStores } = response.data.data || { scrapStores: [] };
        setScrapStores(scrapStores);
      } catch (error) {
        console.error("찜한 프로젝트 데이터를 불러오지 못했습니다:", error);
        setScrapStores([]); // 에러 발생 시 빈 배열로 설정
      } finally {
        setLoading(false); // 성공 및 실패 모두에서 로딩 상태 종료
      }
    };

    fetchScrapStores();
  }, [token]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <Container>
      <MyScrapHeader>
        <img
          src="/assets/mypage_backButton.png"
          onClick={() => navigate("/mypage")}
        />
        <Title>찜한 프로젝트 목록</Title>
      </MyScrapHeader>

      <MainContainer>
        {scrapStores.length === 0 ? (
          <>
            <EmptyMessage>찜한 프로젝트가 없습니다.</EmptyMessage>
            <EmptyMessage>원하는 프로젝트를 저장해보세요!</EmptyMessage>
          </>
        ) : (
          scrapStores.map((store, index) => (
            <ProjectCard key={index}>
              <ProjectHeader>
                <ProjectTitle>{store.storeName}</ProjectTitle>
                <FavoriteIcon isFavorite={store.isScrap}>★</FavoriteIcon>
              </ProjectHeader>
              <ProjectDescription>{store.storeContent}</ProjectDescription>
              <CategoryContainer>
                {store.certifiedTypes.map((type, typeIndex) => (
                  <CategoryBadge key={typeIndex}>
                    {CertifiedType[type.certifiedType]}{" "}
                  </CategoryBadge>
                ))}
              </CategoryContainer>
            </ProjectCard>
          ))
        )}
      </MainContainer>
    </Container>
  );
};

export default MyScrap;

const Container = styled.div`
  padding: 23px 20px;
  width: 100%;
  color: black;
`;

const MyScrapHeader = styled.div`
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;

  img {
    position: absolute; /* 백버튼을 왼쪽 상단에 고정 */
    left: 0;
    width: 12px;
    height: 20px;
    cursor: pointer; /* 클릭 가능하도록 설정 */
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
`;
const MainContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectCard = styled.div`
  padding: 20px;
  background-color: #fafafa;
  border-radius: 10px;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
`;

const FavoriteIcon = styled.span<{ isFavorite: boolean }>`
  font-size: 20px;
  color: ${({ isFavorite }) => (isFavorite ? "#6BE285" : "#ccc")};
`;

const ProjectDescription = styled.p`
  margin: 24px 0px 15px 0px;
  font-size: 13px;
  color: #353f3f;
  line-height: 1.5;
`;

const EmptyMessage = styled.div`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-top: 20px;
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  font-size: 12px;
  color: white;
  background-color: #007bff;
  border-radius: 20px;
`;
