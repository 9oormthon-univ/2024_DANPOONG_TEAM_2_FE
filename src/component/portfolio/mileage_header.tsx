import React from "react";
import styled from "styled-components";

interface MileageHeaderProps {
  mileage: number;
}

const MileageHeader: React.FC<MileageHeaderProps> = ({ mileage }) => {
  return (
    <Container>
      <Title>나의 마일리지</Title>
      <Mileage>{mileage.toLocaleString()} P</Mileage>
      <CheckButton>리턴 확인하기</CheckButton>
    </Container>
  );
};

export default MileageHeader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: none;
`;

const Title = styled.span`
  font-size: 14px;
  color: #03624c;
  font-family: Pretendard, sans-serif;
  margin-bottom: 8px;
`;

const Mileage = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
`;

const CheckButton = styled.button`
  background: #03624c;
  color: #fff;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-family: Pretendard, sans-serif;

  &:hover {
    background: #024b3a;
  }
`;
