import testImg from "../../assets/image.png";
import populationIcon from "../../assets/projectDetail/populationIcon.svg";
import starIcon from "../../assets/projectDetail/starIcon.svg";
import { translateToKorean } from "../../utils/CertifiedTypeConverter";
import IProjectInfo from "../../types/ProjectnfoType";
import ScrapButton from "../ScrapButton";

import * as S from "./ProjectPrev.style";

const ProjectPrev = ({ data }: { data: IProjectInfo }) => {
  console.log(data.id);
  return (
    <S.Container>
      <S.Hr />
      <S.ImageContainer>
        <S.Image src={testImg} />
        <S.Image src={testImg} />
        <S.Image src={testImg} />
      </S.ImageContainer>
      <S.CertificationComment>
        ⭐ MOA PICK! 지역 생산 인증을 받은 업체에요.
      </S.CertificationComment>
      <S.BadgeContainer>
        {data && data.certifiedType
          ? data.certifiedType.map((el: string, idx) => (
              <S.Badge key={idx}>{translateToKorean(el)}</S.Badge>
            ))
          : null}
      </S.BadgeContainer>
      <S.DefaultContainer>
        <S.InfoContainer>
          <S.Name to={`/map/${data.id}`}>{data.name}</S.Name>
          <S.Address>{data.address}</S.Address>
          <S.PopularInfoContainer>
            <S.PopularInfo>
              <S.PopularIcon src={populationIcon} />
              <S.PopularText>{data.fundedCount} 명</S.PopularText>
            </S.PopularInfo>
            <S.PopularInfo>
              <S.PopularIcon src={starIcon} type="star" />
              <S.PopularText>{data.likeCount}</S.PopularText>
            </S.PopularInfo>
          </S.PopularInfoContainer>
        </S.InfoContainer>
        {data.id !== undefined && <ScrapButton storeId={data.id} />}
      </S.DefaultContainer>
      <S.FundInfoContainer>
        <S.FundInfo>
          <S.FundText>목표 금액</S.FundText>
          <S.FundText>
            {Math.floor(data.fundingTarget / 10000).toLocaleString()} 만원
          </S.FundText>
        </S.FundInfo>
        <S.FundInfo>
          <S.FundText>모아 현황</S.FundText>
          <S.FundText>
            {Math.floor(data.fundingCurrent / 10000).toLocaleString()} 만원
          </S.FundText>
        </S.FundInfo>
      </S.FundInfoContainer>
    </S.Container>
  );
};

export default ProjectPrev;
