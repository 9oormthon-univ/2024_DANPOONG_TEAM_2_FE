import styled from "styled-components";
import FundingBS from "../../component/bottomSheet/FundingBS";

const Page = styled.div`
  width: 360px;
  /* height: max-content; */
  position: relative;
  background-color: #fafafa;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 2rem;
`;

const ImageContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 0 1rem;
  margin: 0 0 0.75rem 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.3125rem;
  border: 1px solid #d9d9d9;
  background: #fff;
  padding: 19px 19px 21px;
  margin-bottom: 23px;
`;
const Profile = styled.img`
  border-radius: 67px;
  margin-bottom: 14px;
`;
const BadgeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.3rem;
`;
const Badge = styled.div`
  width: max-content;
  border-radius: 51px;
  background: #00df82;
  padding: 0.31rem 1rem;

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.81rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;
  margin-bottom: 25px;
`;
const CommentTitle = styled.h2`
  color: #03624c;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;
const Description = styled.span`
  width: 100%;
  display: inline-block;
  padding: 0 1rem;
  color: #353f3f;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
const FundingBtn = styled.button`
  border-radius: 10px;
  background: #00df82;
  padding: 1.25rem 0;

  color: #353f3f;
  font-family: Pretendard;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;
const FundingBSA = styled(FundingBS)<{ isOpen: boolean }>`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;
export {
  Page,
  Content,
  ImageContainer,
  DefaultContainer,
  Profile,
  BadgeContainer,
  Badge,
  ProjectDescription,
  CommentTitle,
  Description,
  FundingBtn,
  FundingBSA,
};
