import testImg from "../../assets/image.png";
import populationIcon from "../../assets/projectDetail/populationIcon.svg";
import starIcon from "../../assets/projectDetail/starIcon.svg";
import favIcon from "../../assets/projectDetail/favIcon.svg";
import IProjectInfo from "../../types/ProjectnfoType";

import * as S from "./ProjectPrev.style";

const ProjectPrev = ({ data }: { data: IProjectInfo }) => {
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
        {data.certifiedType.map((el: string) => {
          return <S.Badge>{el}</S.Badge>;
        })}
      </S.BadgeContainer>
      <S.DefaultContainer>
        <S.InfoContainer>
          <S.Name to={`/map/${data.id}`}>{data.name}</S.Name>
          <S.Address>{data.address.roadName}</S.Address>
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
        <S.FavBtn src={favIcon} />
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