import GeneralNavBar from "../../component/generalNavBar/GeneralNavBar";
import populationIcon from "../../assets/projectDetail/populationIcon.svg";
import starIcon from "../../assets/projectDetail/starIcon.svg";
import FundingBS from "../../component/bottomSheet/FundingBS";
import FundingSuccessPage from "../fundingSuccessPage/FundingSuccessPage";
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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getStoreInfo from "../../apis/getStoreInfo";
import IProjectInfo from "../../types/ProjectnfoType";
import { translateToKorean } from "../../utils/certifiedTypeConverter";

const ProjectDetailPage = () => {
  const [page, setPage] = useState("detail");
  const [data, setData] = useState<IProjectInfo>();
  const [successPageProps, setSuccessPageProps] = useState<{
    name: string;
    profileImg: string;
  }>();
  const goToFundingSuccess = () => setPage("fundingsuccess");
  const { storeId } = useParams<{ storeId: string }>();
  if (!storeId) {
    throw new Error("Error : 데이터를 불러오지 못했습니다.");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStoreInfo(parseInt(storeId, 10));
        if (response) {
          console.log("디테일", response.data);
          setData(response.data); // API 응답 데이터를 상태에 저장
          setSuccessPageProps({
            name: response.data.name,
            profileImg:
              response.data.profileImg ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          });
        }
      } catch (error) {
        console.error("Failed to fetch store info:", error);
      }
    };
    fetchData();
  }, [storeId]);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);

  if (page === "detail" && data) {
    return (
      <S.Page>
        <GeneralNavBar hasBackBtn={true} hasRightBtn={true} />
        <S.ImageContainer>
          {data.images?.map((img) => (
            <Image src={img} />
          ))}
        </S.ImageContainer>
        <S.Content>
          <S.DefaultContainer>
            <CertificationComment>{data.caption}</CertificationComment>
            <S.Profile
              src={
                data.profileImg
                  ? data.profileImg
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              width="67px"
              height="67px"
            />
            <Name to="/map">{data.name}</Name>
            <Address>{data.address}</Address>
            <PopularInfoContainer style={{ marginBottom: "18px" }}>
              <PopularInfo>
                <PopularIcon src={populationIcon} />
                <PopularText>{data.fundedCount} 명</PopularText>
              </PopularInfo>
              <PopularInfo>
                <PopularIcon src={starIcon} type="star" />
                <PopularText>{data.likeCount}</PopularText>
              </PopularInfo>
            </PopularInfoContainer>
            <S.BadgeContainer>
              {data && data.certifiedType
                ? data.certifiedType.map((el: string, idx) => (
                    <S.Badge key={idx}>{translateToKorean(el)}</S.Badge>
                  ))
                : null}
            </S.BadgeContainer>
          </S.DefaultContainer>
          <S.ProjectDescription>
            <S.CommentTitle>기업 한마디</S.CommentTitle>
            <S.Description>{data.content}</S.Description>
          </S.ProjectDescription>
          <Hr />
          <FundInfoContainer
            style={{ marginTop: "23px", marginBottom: "23px" }}
          >
            <FundInfo>
              <FundText>목표 금액</FundText>
              <FundText>
                {Math.floor(data.fundingTarget / 10000).toLocaleString()} 만원
              </FundText>
            </FundInfo>
            <FundInfo>
              <FundText>모아 현황</FundText>
              <FundText>
                {Math.floor(data.fundingCurrent / 10000).toLocaleString()} 만원
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
  if (page === "fundingsuccess" && successPageProps) {
    return <FundingSuccessPage />;
  }
};

export default ProjectDetailPage;
