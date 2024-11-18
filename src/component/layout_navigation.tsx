import React from "react";
import Navigation from "./home/navigation";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoContainer src="/assets/logo.svg" alt="Logo" />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <Navigation />
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

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 0px;
`;

const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  width: 356px;
  background-color: #ffffff;
  z-index: 10;
  padding: 10px 0;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
`;
