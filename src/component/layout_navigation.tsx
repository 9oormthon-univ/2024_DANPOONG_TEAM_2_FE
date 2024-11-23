import React, { useState } from "react";
import Navigation from "./navigation";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";

const Layout: React.FC = () => {
  const location = useLocation();

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

  React.useEffect(() => {
    setActiveItem(getActiveItem());
  }, [location]);

  // mypage 사용자의 관심 가치 페이지 및 찜한 프로젝트 페이지에서 Footer를 숨기기
  const hideFooter =
    location.pathname.includes("/mypage/social-value") ||
    location.pathname.includes("/mypage/scrap");

  return (
    <Container>
      <Main>
        <Outlet />
      </Main>
      {!hideFooter && (
        <Footer>
          <Navigation activeItem={activeItem} />
        </Footer>
      )}
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
