import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface MileageHeaderProps {
  mileage: number;
}

const MileageHeader: React.FC<MileageHeaderProps> = ({ mileage }) => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/change");
  };
  return (
    <Container>
      <Title>나의 마일리지</Title>
      <Mileage>{mileage} P</Mileage>
      <CheckButton onClick={handleChange}>교환하기</CheckButton>
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
  border-radius: 10px;
  background: #03624c;
  color: #fff;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  width: 100%;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
  font-family: Pretendard, sans-serif;
  margin-bottom: 10px;
  margin-top: 10px;

  &:hover {
    background: #024b3a;
  }
`;
