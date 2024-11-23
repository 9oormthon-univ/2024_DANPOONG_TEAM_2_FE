import React from "react";
import styled from "styled-components";
import MemberTypeToggleButton from "../../component/mypage/memberTypeToggleButton";

const Mypage: React.FC = () => {
  return (
    <MypageContainer>
      <MypageHeader>
        <MemberTypeToggleButton />
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
  padding: 30px 0px;
  width: 100%;
  height: 30%;
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
