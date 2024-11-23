import React from "react";
import styled from "styled-components";

const Mypage: React.FC = () => {
  return (
    <MypageContainer>
      <MypageHeader>
        <UserTypeSelector>
          <UserTypeButton active>투자자</UserTypeButton>
          <UserTypeButton>업체</UserTypeButton>
        </UserTypeSelector>
        <UserProfile>
          <ProfileImage />
          <ProfileName>프롬컴퍼니</ProfileName>
        </UserProfile>
      </MypageHeader>
      <MypageMain></MypageMain>
      <MypageBottom></MypageBottom>
    </MypageContainer>
  );
};

export default Mypage;

const MypageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 15px;
`;

const MypageHeader = styled.div`
  color: black;
  padding: 15px 0px;
  width: 100%;
  height: 30%;
`;

const UserTypeSelector = styled.div`
  display: flex;
  width: 132px;
  height: 36px;
  margin-bottom: 20px;
`;

const UserTypeButton = styled.button<{ active?: boolean }>`
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 13px;
  white-space: nowrap;
  border: none;
  background-color: ${({ active }) => (active ? "#004d3f" : "#e0e0e0")};
  color: ${({ active }) => (active ? "#ffffff" : "#000000")};
  font-weight: bold;
  cursor: pointer;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.div`
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
  width: 100%;
  height: 40%;
`;

const MypageBottom = styled.div`
  width: 100%;
  height: 30%;
`;
