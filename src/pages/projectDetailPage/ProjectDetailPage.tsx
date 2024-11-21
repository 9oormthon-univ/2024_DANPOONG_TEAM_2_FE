import GeneralNavBar from "../../component/generalNavBar/GeneralNavBar";
import testImg from "../../assets/image.png";
import populationIcon from "../../assets/projectDetail/populationIcon.svg";
import starIcon from "../../assets/projectDetail/starIcon.svg";
import FundingBS from "../../component/bottomSheet/FundingBS";

import {
  Hr,
  Image,
  CertificationComment,
  Name,
  Address,
  PopularInfoContainer,
  PopularInfo,
  PopularIcon,
  PopularText,
  FundInfoContainer,
  FundInfo,
  FundText,
} from "../../component/projectPrev/ProjectPrev.style";
import * as S from "../projectDetailPage/ProjectDetailPage.style";
import { useState } from "react";
const ProjectDetailPage = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  return (
    <S.Page>
      <GeneralNavBar hasBackBtn={true} hasRightBtn={true} />
      <S.ImageContainer>
        <Image src={testImg} />
        <Image src={testImg} />
        <Image src={testImg} />
      </S.ImageContainer>
      <S.Content>
        <S.DefaultContainer>
          <CertificationComment>
            ⭐ MOA PICK! 지역 생산 인증을 받은 업체에요.
          </CertificationComment>
          <S.Profile
            src="/assets/sample_farmer.png"
            width="67px"
            height="67px"
          />
          <Name to="/map">민우네 찰옥수수</Name>
          <Address>강원도 고성군 간성읍 222</Address>
          <PopularInfoContainer style={{ marginBottom: "18px" }}>
            <PopularInfo>
              <PopularIcon src={populationIcon} />
              <PopularText>1,280 명</PopularText>
            </PopularInfo>
            <PopularInfo>
              <PopularIcon src={starIcon} type="star" />
              <PopularText>2390</PopularText>
            </PopularInfo>
          </PopularInfoContainer>
          <S.BadgeContainer>
            <S.Badge>지역생산</S.Badge>
          </S.BadgeContainer>
        </S.DefaultContainer>
        <S.ProjectDescription>
          <S.CommentTitle>기업 한마디</S.CommentTitle>
          <S.Description>
            맛있고 건강한 간식, 성실과 집중으로 키우는 찰옥수수입니다. 옥수수를
            이용한 빵, 음료 제품으로 나아갑니다.
          </S.Description>
        </S.ProjectDescription>
        <Hr />
        <FundInfoContainer style={{ marginTop: "23px", marginBottom: "23px" }}>
          <FundInfo>
            <FundText>목표 금액</FundText>
            <FundText>10000000원</FundText>
          </FundInfo>
          <FundInfo>
            <FundText>모아 현황</FundText>
            <FundText>10000000원</FundText>
          </FundInfo>
        </FundInfoContainer>
        <S.FundingBtn onClick={() => setIsBottomSheetOpen(true)}>
          펀딩 참여하기
        </S.FundingBtn>
      </S.Content>
      {isBottomSheetOpen && (
        <FundingBS
          isOpened={isBottomSheetOpen}
          setIsOpened={setIsBottomSheetOpen}
          title="펀딩하기"
        />
      )}
    </S.Page>
  );
};

export default ProjectDetailPage;
