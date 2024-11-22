import styled from "styled-components";

const Page = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;
const Icon = styled.img`
  margin-bottom: 56px;
`;
const Name = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 23px;
`;
const Amount = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 2.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 56px;
`;
const GreetingContainer = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
  width: 100%;
  padding: 1.8% 5% 1.8% 2.3%;
  margin: 0 1.62rem;
  border-radius: 2.875rem;
  border: 1px solid #00df82;
  background: #fafafa;
  margin-bottom: 26vh;
`;
const Profile = styled.img`
  border-radius: 4.1875rem;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const NameSub = styled.span`
  color: #03624c;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;
const Comment = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;
const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
const ShowDetailBtn = styled.button`
  flex-grow: 4;
  border-radius: 50px;
  background: #d9d9d9;
  padding: 0.9em 0;

  color: #7d7d7d;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ConfirmBtn = styled.button`
  flex-grow: 8;
  border-radius: 50px;
  background: #00df82;
  padding: 1.12em 0 1.5em;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export {
  Page,
  Icon,
  Name,
  Amount,
  GreetingContainer,
  Profile,
  TextContainer,
  NameSub,
  Comment,
  BtnContainer,
  ShowDetailBtn,
  ConfirmBtn,
};
