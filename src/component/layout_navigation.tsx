import React, { useState,useEffect } from "react";
import Navigation from "./navigation";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Layout: React.FC = () => {
  const location = useLocation();
  const { token, setToken } = useAuth();
  const navigate = useNavigate(); // useNavigate 훅 사용

  const getActiveItem = () => {
    if (location.pathname.startsWith("/map")) {
      return "map";
    }
    switch (location.pathname) {
      case "/":
        return "home";
      case "/category":
        return "category";
      case "/map":
        return "map";
      case "/portfolio":
        return "portfolio";
      case "/mypage":
        return "mypage";
      default:
        return "home";
    }
  };

  const [activeItem, setActiveItem] = useState<
    "home" | "category" | "map" | "portfolio" | "mypage"
  >(getActiveItem());

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

    useEffect(() => {
      if (token) {
        console.log("Token 변경 후:", token);
      }
    }, [token]);

    const handleAuth = async (code: string, provider: string) => {
      try {
        // 토큰 요청
        const response = await axios.post(
          `https://moa-api.duckdns.org/api/${provider}/token`,
          { code }
        );
        const accessToken = response.data.data.accessToken;
  
        console.log("발급된 Access Token:", accessToken);
  
        // Context에 토큰 저장
        setToken(accessToken);
  
        // 사용자 정보 조회
        console.log("Authorization 헤더:", `Bearer ${accessToken}`);
        const userInfoResponse = await axios.get(
          `https://moa-api.duckdns.org/api/members`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
  
        const memberType = userInfoResponse.data.data.memberType;
        console.log("회원 유형:", memberType);
  
        // 회원 유형에 따라 경로 설정
        if (memberType === "null") {
          navigate("/select-member-type"); // 회원 유형 선택 페이지로 이동
        } else {
          navigate("/"); // 홈으로 이동
        }
      } catch (error) {
        console.error("Error during authentication:", error);
        if (axios.isAxiosError(error)) {
          console.error("Axios Error Response:", error.response?.data);
        }
      }
    };

  React.useEffect(() => {
    setActiveItem(getActiveItem());
  }, [location]);

  

  return (
    <Container>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <Navigation activeItem={activeItem} />
      </Footer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 358px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 0px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 10;
  /* padding: 10px 0; */
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
`;
