import React from "react";
import Navigation from "./home/navigation";
import styled from "styled-components";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoContainer src="/assets/logo.svg" />
      </Header>
      <Navigation />
    </Container>
  );
};

export default Layout;
const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 358px;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 358px;
`;

const LogoContainer = styled.img`
  display: absolute;
  top: 15px;
  width: 76px;
  height: 26px;
`;
