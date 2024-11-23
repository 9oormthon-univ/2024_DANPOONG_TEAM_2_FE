import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

interface ChangeFinishProps {
  storeId: number;
  myFundingAmount: number;
}

const ChangeFinish: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { myFundingAmount } = location.state as ChangeFinishProps;

  const handleConfirm = () => {
    navigate("/portfolio");
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
        <Title>교환하기</Title>
      </Header>
      <Content>
        <SuccessIcon>✔</SuccessIcon>
        <Message>상품권으로 교환 완료!</Message>
        <Amount>{myFundingAmount.toLocaleString()}원 권</Amount>
      </Content>
      <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
    </Container>
  );
};

export default ChangeFinish;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
  background: #fff;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 18px;
  color: #000;
  margin: 0 auto;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const SuccessIcon = styled.div`
  width: 92px;
  height: 92px;
  background-color: #36c787;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

const Amount = styled.h2`
  fcolor: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin-top: 18px;
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #36c787;
  border: none;
  border-radius: 50px;
  background: #00df82;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background-color: #2ca06f;
  }
`;
