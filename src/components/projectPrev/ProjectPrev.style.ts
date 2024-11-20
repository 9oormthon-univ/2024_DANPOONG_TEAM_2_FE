import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;
const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
`;
const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  margin: 1rem 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Image = styled.img`
  width: 222px;
  height: 203px;
  border-radius: 15px;
`;

const CertificationComment = styled.span`
  color: #03624c;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 1.25rem;
`;
const BadgeContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-bottom: 0.63rem;
`;
const Badge = styled.div`
  width: max-content;
  padding: 0.25rem 0.87rem;
  border-radius: 51px;
  background: #00df82;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const DefaultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
  margin-bottom: 2rem;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
const Name = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0.5rem;
`;
const Address = styled.span`
  color: #818787;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0.94rem;
`;
const PopularInfoContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;
const PopularInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
const PopularIcon = styled.img<{ type?: string }>`
  width: ${(props) => (props.type === "star" ? "0.81rem" : "0.75rem")};
`;
const PopularText = styled.span`
  color: #b2b9c2;
  text-align: right;
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const FavBtn = styled.img`
  width: 1.4375rem;
  height: 1.375rem;
  cursor: pointer;
`;
const FundInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-right: 1rem;
`;
const FundInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FundText = styled.span`
  color: #353f3f;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;

export {
  Container,
  Hr,
  ImageContainer,
  Image,
  CertificationComment,
  BadgeContainer,
  Badge,
  DefaultContainer,
  InfoContainer,
  Name,
  Address,
  PopularInfoContainer,
  PopularInfo,
  PopularIcon,
  PopularText,
  FavBtn,
  FundInfoContainer,
  FundInfo,
  FundText,
};
