import React, { useState } from "react";
import {
  LoginContainer,
  Logo,
  TabContainer,
  Tab,
  Input,
  CheckboxContainer,
  Checkbox,
  LoginButton,
  LinkContainer,
  SocialLoginContainer,
  SocialButton,
  Tag,
  CustomCheckbox,
} from "./LoginStyle";

import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  
  const [activeTab, setActiveTab] = useState("investor"); // 투자자 회원 기본값
    const navigate = useNavigate();

  const handleSocialLoginClick = () => {
    navigate('/member-type')
  };



  return (
    <LoginContainer>
      <Logo src="/assets/moa_logo.png" alt="MOA Logo" />
      <TabContainer>
        <Tab
          active={activeTab === "investor"}
          onClick={() => setActiveTab("investor")}
        >
          투자자 회원
        </Tab>
        <Tab
          active={activeTab === "company"}
          onClick={() => setActiveTab("company")}
        >
          기업 회원
        </Tab>
      </TabContainer>
      <Input type="text" placeholder="ID(E-Mail)" />
      <Input type="password" placeholder="Password" />
      <CheckboxContainer>
        <Checkbox id="auto-login" />
        <CustomCheckbox htmlFor="auto-login" />
        자동 로그인
      </CheckboxContainer>
      <LoginButton>로그인</LoginButton>
      <LinkContainer>
        <span>아이디 찾기</span>
        <span>|</span>
        <span>비밀번호 찾기</span>
        <span>|</span>
        <span onClick={() => navigate('/signup')} >회원가입</span>
      </LinkContainer>
      <SocialLoginContainer>
        <SocialButton onClick={handleSocialLoginClick} bgColor="#FFD400">
          <img src="/assets/kakao_logo.png" alt="Kakao Login" />
        </SocialButton>
        <SocialButton bgColor="#000000">
          <img src="/assets/apple_logo.png" alt="Apple Login" />
        </SocialButton>
        <SocialButton bgColor="#f2f2f2">
          <img src="/assets/google_logo.png" alt="Google Login" />
        </SocialButton>
      </SocialLoginContainer>
      <Tag>소셜 아이디어로 간편 로그인</Tag>
     
    </LoginContainer>
  );
};

export default Login;
