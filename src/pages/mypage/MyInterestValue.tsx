import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";

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
  certifiedType: keyof typeof CertifiedType;
  isChoice: boolean;
}

const MyInterestValue: React.FC = () => {
  const navigate = useNavigate();
  const [interests, setInterests] = useState<CertifiedTypeData[]>([]); // 관심 가치 상태 관리
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 관리
  const { token } = useAuth();
  console.log(token);

  useEffect(() => {
    const fetchInterestValues = async () => {
      try {
        const response = await axios.get(
          "https://moa-api.duckdns.org/api/members/mypage/certified-types",
          {
            headers: { Authorization: `Bearer ${token}` }, // Authorization 헤더 추가
          }
        );
        const { certifiedTypes } = response.data.data;

        // isChoice가 true인 항목을 상단으로 정렬
        const sortedInterests = certifiedTypes.sort(
          (a: CertifiedTypeData, b: CertifiedTypeData) =>
            (b.isChoice ? 1 : 0) - (a.isChoice ? 1 : 0)
        );

        console.log(sortedInterests);
        setInterests(sortedInterests); // 정렬된 데이터를 상태에 저장
        setLoading(false); // 로딩 완료
      } catch (error) {
        console.error("관심 가치 불러오기 실패:", error);
        setLoading(false); // 로딩 실패
      }
    };

    fetchInterestValues();
  }, [token]);

  // StarIcon 클릭 시 관심 값 업데이트
  const onStarClick = async (certifiedType: keyof typeof CertifiedType) => {
    try {
      const response = await axios.patch(
        "https://moa-api.duckdns.org/api/members/mypage/certified-types",
        { certifiedType }, // 선택된 타입 전달
        {
          headers: { Authorization: `Bearer ${token}` }, // Authorization 헤더 추가
        }
      );

      const { certifiedTypes } = response.data.data;

      // 응답받은 데이터를 기반으로 상태 업데이트 및 정렬
      const updatedInterests = certifiedTypes.sort(
        (a: CertifiedTypeData, b: CertifiedTypeData) =>
          (b.isChoice ? 1 : 0) - (a.isChoice ? 1 : 0)
      );

      setInterests(updatedInterests); // 업데이트된 리스트 상태 저장
    } catch (error) {
      console.error("관심 가치 업데이트 실패:", error);
    }
  };

  if (loading) {
    return <div>관심 가치를 불러오는 중...</div>;
  }

  return (
    <Container>
      <MyInterestHeader>
        <img src="/assets/mypage_backButton.png"  onClick={() => navigate("/mypage")}  />
        <Title>관심 가치</Title>
      </MyInterestHeader>

      <Description>✨ 내가 관심 있는 MOA의 사회적 가치예요.</Description>
      <InterestList>
        {interests.map((interest) => (
          <InterestItem
            key={interest.certifiedType}
            selected={interest.isChoice}
            onClick={() => onStarClick(interest.certifiedType)}
          >
            <span>{CertifiedType[interest.certifiedType]}</span>
            <StarIcon selected={interest.isChoice}>
              {interest.isChoice ? "★" : "☆"}
            </StarIcon>
          </InterestItem>
        ))}
      </InterestList>
    </Container>
  );
};

export default MyInterestValue;

// 스타일 정의
const Container = styled.div`
  padding: 20px;
  color: black;
`;

const MyInterestHeader = styled.div`
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

const Description = styled.p`
  padding: 16px;
  font-size: 14px;
  color: #666;
  background-color: #fafafa;
  border-radius: 10px;
  margin: 20px 0px;
`;

const InterestList = styled.div`
  display: flex;
  flex-direction: column;
`;

const InterestItem = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 10px;
  font-weight: 400;
  font-size: 16px;

  border-bottom: 1px solid #d9d9d9;
  &:hover {
    border-color: #00df82;
  }
`;

const StarIcon = styled.span<{ selected: boolean }>`
  font-size: 20px;
  color: ${({ selected }) => (selected ? "#00df82" : "#ccc")};
  cursor: pointer;
`;
