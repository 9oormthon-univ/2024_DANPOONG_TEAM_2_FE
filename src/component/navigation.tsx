import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface NavigationProps {
  activeItem: "home" | "category" | "map" | "portfolio" | "mypage";
}

const Navigation: React.FC<NavigationProps> = ({ activeItem }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <NavContainer>
      <NavItem
        isActive={activeItem === "home"}
        onClick={() => handleNavigation("/")}
      >
        <Icon
          src={
            activeItem === "home"
              ? "/assets/home_logo_on.svg"
              : "/assets/home_logo_off.svg"
          }
          alt="홈"
        />
        <Label isActive={activeItem === "home"}>홈</Label>
      </NavItem>
      <NavItem
        isActive={activeItem === "category"}
        onClick={() => handleNavigation("/category")}
      >
        <Icon
          src={
            activeItem === "category"
              ? "/assets/category_logo_on.svg"
              : "/assets/category_logo_off.svg"
          }
          alt="카테고리"
        />
        <Label isActive={activeItem === "category"}>카테고리</Label>
      </NavItem>
      <NavItem
        isActive={activeItem === "map"}
        onClick={() => handleNavigation("/map")}
      >
        <Icon
          src={
            activeItem === "map"
              ? "/assets/map_logo_on.svg"
              : "/assets/map_logo_off.svg"
          }
          alt="지도로 찾기"
        />
        <Label isActive={activeItem === "map"}>지도로 찾기</Label>
      </NavItem>
      <NavItem
        isActive={activeItem === "portfolio"}
        onClick={() => handleNavigation("/portfolio")}
      >
        <Icon
          src={
            activeItem === "portfolio"
              ? "/assets/portfolio_logo_on.svg"
              : "/assets/portfolio_logo_off.svg"
          }
          alt="포트폴리오"
        />
        <Label isActive={activeItem === "portfolio"}>포트폴리오</Label>
      </NavItem>
      <NavItem
        isActive={activeItem === "mypage"}
        onClick={() => handleNavigation("/mypage")}
      >
        <Icon
          src={
            activeItem === "mypage"
              ? "/assets/mypage_logo_on.svg"
              : "/assets/mypage_logo_off.svg"
          }
          alt="마이 모아"
        />
        <Label isActive={activeItem === "mypage"}>마이 모아</Label>
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
  color: ${({ isActive }) => (isActive ? "#00DF82" : "#bbb")};
  font-size: 14px;
  flex: 1;
  cursor: pointer;

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

const Label = styled.span<{ isActive?: boolean }>`
  font-size: 12px;
  color: ${({ isActive }) => (isActive ? "#00c853" : "#bbb")};
`;
