import testImg from "../../assets/image.png";
import populationIcon from "../../assets/projectDetail/populationIcon.svg";
import starIcon from "../../assets/projectDetail/starIcon.svg";
import favIcon from "../../assets/projectDetail/favIcon.svg";

import * as S from "./ProjectPrev.style";

const ProjectPrev = () => {
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
        <S.Badge>지역생산</S.Badge>
      </S.BadgeContainer>
      <S.DefaultContainer>
        <S.InfoContainer>
          <S.Name to="/map/1">민우네 찰옥수수</S.Name>
          <S.Address>강원도 고성군 간성읍 222</S.Address>
          <S.PopularInfoContainer>
            <S.PopularInfo>
              <S.PopularIcon src={populationIcon} />
              <S.PopularText>1,280 명</S.PopularText>
            </S.PopularInfo>
            <S.PopularInfo>
              <S.PopularIcon src={starIcon} type="star" />
              <S.PopularText>2390</S.PopularText>
            </S.PopularInfo>
          </S.PopularInfoContainer>
        </S.InfoContainer>
        <S.FavBtn src={favIcon} />
      </S.DefaultContainer>
      <S.FundInfoContainer>
        <S.FundInfo>
          <S.FundText>목표 금액</S.FundText>
          <S.FundText>10000000원</S.FundText>
        </S.FundInfo>
        <S.FundInfo>
          <S.FundText>모아 현황</S.FundText>
          <S.FundText>10000000원</S.FundText>
        </S.FundInfo>
      </S.FundInfoContainer>
    </S.Container>
  );
};

export default ProjectPrev;
