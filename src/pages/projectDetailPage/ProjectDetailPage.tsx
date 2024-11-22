import GeneralNavBar from "../../component/generalNavBar/GeneralNavBar";
import testImg from "../../assets/image.png";
import populationIcon from "../../assets/projectDetail/populationIcon.svg";
import starIcon from "../../assets/projectDetail/starIcon.svg";
import FundingBS from "../../component/bottomSheet/FundingBS";
import FundingSuccessPage from "../../component/fundingSuccess/FundingSuccess";
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
import { projectDetailDummy } from "../../moks/projectDetailDummy";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProjectDetailPage = () => {
  const [page, setPage] = useState("detail");
  const goToFundingSuccess = () => setPage("fundingsuccess");
  const { id } = useParams<{ id: string }>();
  if (!id) {
    throw new Error("Error : 데이터를 불러오지 못했습니다.");
  }
  const projectId = parseInt(id, 10);
  const response = projectDetailDummy[projectId];
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);

  if (page === "detail") {
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
            <CertificationComment>{response.caption}</CertificationComment>
            <S.Profile src={response.profileImg} width="67px" height="67px" />
            <Name to="/map">{response.name}</Name>
            <Address>{response.address.roadName}</Address>
            <PopularInfoContainer style={{ marginBottom: "18px" }}>
              <PopularInfo>
                <PopularIcon src={populationIcon} />
                <PopularText>{response.fundedCount} 명</PopularText>
              </PopularInfo>
              <PopularInfo>
                <PopularIcon src={starIcon} type="star" />
                <PopularText>{response.likeCount}</PopularText>
              </PopularInfo>
            </PopularInfoContainer>
            <S.BadgeContainer>
              {response.certifiedType.map((el: string, idx) => {
                return <S.Badge key={idx}>{el}</S.Badge>;
              })}
            </S.BadgeContainer>
          </S.DefaultContainer>
          <S.ProjectDescription>
            <S.CommentTitle>기업 한마디</S.CommentTitle>
            <S.Description>{response.content}</S.Description>
          </S.ProjectDescription>
          <Hr />
          <FundInfoContainer
            style={{ marginTop: "23px", marginBottom: "23px" }}
          >
            <FundInfo>
              <FundText>목표 금액</FundText>
              <FundText>
                {Math.floor(response.fundingTarget / 10000).toLocaleString()}{" "}
                만원
              </FundText>
            </FundInfo>
            <FundInfo>
              <FundText>모아 현황</FundText>
              <FundText>
                {Math.floor(response.fundingCurrent / 10000).toLocaleString()}{" "}
                만원
              </FundText>
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
            handlepage={goToFundingSuccess}
          />
        )}
      </S.Page>
    );
  }
  // 펀딩 완료 시 렌더링
  if (page === "fundingsuccess") {
    return <FundingSuccessPage data={response} />;
  }
};

export default ProjectDetailPage;
