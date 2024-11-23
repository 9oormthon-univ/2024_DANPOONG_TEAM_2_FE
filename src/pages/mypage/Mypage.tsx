import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MemberTypeToggleButton from "../../component/mypage/memberTypeToggleButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import axios from "axios";

const Mypage: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [name, setName] = useState<string>(""); // 사용자 이름
  const [picture, setPicture] = useState<string>(""); // 프로필 이미지
  const [memberType, setMemberType] = useState<"INVESTOR" | "BUSINESS">(
    "INVESTOR"
  ); // 회원 유형
  const [certifiedTypeCount, setCertifiedTypeCount] = useState<number>(0); // 관심 가치 개수

  // 관심 가치 데이터 가져오기
  useEffect(() => {
    const fetchInterestValues = async () => {
      try {
        const response = await axios.get(
          "https://moa-api.duckdns.org/api/members/mypage",
          {
            headers: { Authorization: `Bearer ${token}` }, // Authorization 헤더 추가
          }
        );
        const { name, picture, memberType, certifiedTypeCount } =
          response.data.data;

        setName(name);
        setPicture(picture);
        setMemberType(memberType);
        setCertifiedTypeCount(certifiedTypeCount);
      } catch (error) {
        console.error("관심 가치 불러오기 실패:", error);
      }
    };

    fetchInterestValues();
  }, [token]);

  // 로그아웃 로직
  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // 로컬 스토리지에서 토큰 삭제
    navigate("/login"); // 로그인 페이지로 이동
  };

  return (
    <MypageContainer>
      <MypageHeader>
        <MemberTypeToggleButton
          memberType={memberType}
          onChange={(newType) => setMemberType(newType)} // 토글 버튼 변경 처리
        />
        <UserProfile>
          <ProfileImageContainer>
            <ProfileImage src={picture} />
            <EditButton>
              <img src="/assets/user_img_modify_icon.png" alt="수정" />
            </EditButton>
          </ProfileImageContainer>
          <ProfileName>{name}</ProfileName>
        </UserProfile>
      </MypageHeader>
      <MypageMain>
        <InfoContainer>
          <InfoBox>
            <InfoLabel>구독 관리</InfoLabel>
            <InfoValue>없음</InfoValue>
          </InfoBox>
          <InfoBox>
            <InfoLabel>관심 가치</InfoLabel>
            <InfoValue onClick={() => navigate("social-value")}>
              {certifiedTypeCount}개
            </InfoValue>
          </InfoBox>
        </InfoContainer>
        <ProjectButton onClick={() => navigate("scrap")}>
          찜한 프로젝트
        </ProjectButton>
      </MypageMain>
      <MypageBottom>
        <Section>
          <SectionTitle>회원 정보</SectionTitle>
          <ItemList>
            <Item>계정 정보</Item>
            <Item>연결된 계좌 관리</Item>
            <Item>투자 내역</Item>
            <Item>나의 상품권 조회</Item>
            <Item>투자자 가이드</Item>
          </ItemList>
        </Section>
        <Section>
          <SectionTitle>고객센터</SectionTitle>
          <ItemList>
            <Item>고객지원</Item>
            <Item>1:1 문의</Item>
            <Item>이용가이드</Item>
            <Item>공지사항</Item>
            <Item>설정</Item>
          </ItemList>
        </Section>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </MypageBottom>
    </MypageContainer>
  );
};

export default Mypage;

const MypageContainer = styled.div`
  width: 100%;
  padding: 0px 15px;
`;

const MypageHeader = styled.div`
  color: black;
  padding: 30px 0px;
  width: 100%;
  height: 30%;
  border-bottom: 1px solid #d9d9d9;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 79px;
  height: 79px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditButton = styled.button`
  position: absolute;
  bottom: 18px; /* 컨테이너 하단에서 약간 띄움 */
  right: 8px; /* 컨테이너 오른쪽에서 약간 띄움 */
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    width: 12px;
    height: 12px;
  }
`;

const ProfileImage = styled.img`
  width: 57px;
  height: 57px;
  border-radius: 50%;
  background-color: #d9d9d9;
  margin-bottom: 16px;
`;

const ProfileName = styled.div`
  line-height: 16.94px;
  font-size: 14px;
  font-weight: bold;
`;

const MypageMain = styled.div`
  color: black;
  width: 100%;
  height: 40%;
`;

const MypageBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 58px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;

  margin-bottom: 14px;
`;

const InfoBox = styled.div`
  padding: 15px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  &:first-child {
    border-right: 1px solid #d9d9d9;
  }
`;

const InfoLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

const InfoValue = styled.div`
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
`;

const ProjectButton = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: black;
`;

const Section = styled.div`
  width: 100%;

  &:nth-child(2) {
    margin-top: 29px;
  }
`;

const SectionTitle = styled.div`
  font-size: 14px;
  padding: 0px 5px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid #d9d9d9;
`;

const Item = styled.li`
  padding: 15px 5px;
  font-size: 14px;
  color: black;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;

const LogoutButton = styled.button`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 15px;
  font-weight: 400;
  align-self: flex-end;
  color: red;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
