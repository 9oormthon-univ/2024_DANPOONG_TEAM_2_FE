import React from "react";
import styled from "styled-components";

interface NavigationProps {
  activeItem: "home" | "category" | "map" | "portfolio" | "mypage";
}

const Navigation: React.FC<NavigationProps> = ({ activeItem }) => {
  return (
    <NavContainer>
      <NavItem isActive={activeItem === "home"}>
        <Icon src="/assets/home_logo.svg" alt="홈" />
        <Label>홈</Label>
      </NavItem>
      <NavItem isActive={activeItem === "category"}>
        <Icon src="/assets/category_logo.svg" alt="카테고리" />
        <Label>카테고리</Label>
      </NavItem>
      <NavItem isActive={activeItem === "map"}>
        <Icon src="/assets/map_logo.svg" alt="지도로 찾기" />
        <Label>지도로 찾기</Label>
      </NavItem>
      <NavItem isActive={activeItem === "portfolio"}>
        <Icon src="/assets/portfolio.svg" alt="포트폴리오" />
        <Label>포트폴리오</Label>
      </NavItem>
      <NavItem isActive={activeItem === "mypage"}>
        <Icon src="/assets/mypage_logo.svg" alt="마이 모아" />
        <Label>마이 모아</Label>
      </NavItem>
    </NavContainer>
  );
};

export default Navigation;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f8f8;
  padding: 10px 0;
  border-top: 1px solid #ddd;
`;

const NavItem = styled.div<{ isActive?: boolean }>`
  text-align: center;
  color: ${({ isActive }) => (isActive ? "#00c853" : "#bbb")};
  font-size: 14px;
  flex: 1;

  img {
    width: ${({ isActive }) => (isActive ? "30px" : "24px")};
    height: ${({ isActive }) => (isActive ? "30px" : "24px")};
    margin-bottom: 5px;
  }
`;

const Icon = styled.img`
  display: block;
  margin: 0 auto;
`;

const Label = styled.span`
  font-size: 12px;
`;
