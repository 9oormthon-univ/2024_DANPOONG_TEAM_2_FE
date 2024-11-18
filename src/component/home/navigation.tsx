import React from "react";
import styled from "styled-components";

const Navigation: React.FC = () => {
  return (
    <NavContainer>
      <NavItem isActive>
        <Icon src="/assets/home_logo.svg" alt="홈" />
        <Label>홈</Label>
      </NavItem>
      <NavItem>
        <Icon src="/assets/category_logo.svg" alt="카테고리" />
        <Label>카테고리</Label>
      </NavItem>
      <NavItem>
        <Icon src="/assets/map_logo.svg" alt="지도로 찾기" />
        <Label>지도로 찾기</Label>
      </NavItem>
      <NavItem>
        <Icon src="/assets/portfolio.svg" alt="포트폴리오" />
        <Label>포트폴리오</Label>
      </NavItem>
      <NavItem>
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
