import React, { useState, useEffect } from "react";
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
import { useAuth } from "../../AuthContext";
import axios from "axios";

const Login: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("investor"); // 투자자 회원 기본값
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
  // 인증 로직 처리
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const provider = localStorage.getItem("provider") || "kakao";

    if (code) {
      handleAuth(code, provider);
      window.history.replaceState({}, document.title, window.location.pathname); // URL 파라미터 제거
    }
  }, []);

  const handleAuth = async (code: string, provider: string) => {
    try {
      // 토큰 요청
      const response = await axios.post(
        `https://moa-api.duckdns.org/api/${provider}/token`,
        { code }
      );
      const accessToken = response.data.data.accessToken;

      // 로컬 스토리지에 저장
      localStorage.setItem("accessToken", accessToken);

      // Context에 토큰 저장
      setToken(accessToken);

      // 사용자 정보 조회
      const userInfoResponse = await axios.get(
        `https://moa-api.duckdns.org/api/members`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      const memberType = userInfoResponse.data.data.memberType;

      // 회원 유형에 따라 경로 설정
      if (memberType === "null") {
        navigate("/select-type"); // 회원 유형 선택 페이지로 이동
      } else {
        navigate("/home"); // 홈으로 이동
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      if (axios.isAxiosError(error)) {
        console.error("Axios Error Response:", error.response?.data);
      }
    }
  };

  // 카카오 로그인 버튼 클릭 시
  const kakaoHandleLogin = () => {
    localStorage.setItem("provider", "kakao"); // 선택된 소셜 로그인 제공자 저장
    const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
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
        <span onClick={() => navigate("/signup")}>회원가입</span>
      </LinkContainer>
      <SocialLoginContainer>
        <SocialButton onClick={kakaoHandleLogin} bgColor="#FFD400">
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
