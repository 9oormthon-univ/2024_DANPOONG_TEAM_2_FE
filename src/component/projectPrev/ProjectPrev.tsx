import populationIcon from "../../assets/projectDetail/populationIcon.svg";
import starIcon from "../../assets/projectDetail/starIcon.svg";
import { translateToKorean } from "../../utils/certifiedTypeConverter";
import IProjectInfo from "../../types/ProjectnfoType";
import ScrapButton from "../ScrapButton";
import getStoreInfo from "../../apis/getStoreInfo";

import { useState } from "react";
import * as S from "./ProjectPrev.style";
import { useEffect } from "react";

const ProjectPrev = ({ storeId }: { storeId: number }) => {
  const [data, setData] = useState<IProjectInfo>();
  useEffect(() => {
    if (storeId) {
      const fetchData = async () => {
        try {
          const respnse = await getStoreInfo(storeId);
          if (respnse) {
            console.log("hhh", respnse.data);
            setData(respnse.data);
          } else console.log(respnse);
        } catch (error) {
          throw new Error("Error");
        }
      };
      fetchData();
    }
  }, []);
  return (
    <S.Container>
      <S.Hr />
      <S.ImageContainer>
        {data?.images?.map((img) => (
          <S.Image src={img} />
        ))}
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
          <S.Name to={`/map/${data?.storeId}`}>{data?.name}</S.Name>
          <S.Address>{data?.address}</S.Address>
          <S.PopularInfoContainer>
            <S.PopularInfo>
              <S.PopularIcon src={populationIcon} />
              <S.PopularText>{data?.fundedCount} 명</S.PopularText>
            </S.PopularInfo>
            <S.PopularInfo>
              <S.PopularIcon src={starIcon} type="star" />
              <S.PopularText>{data?.likeCount}</S.PopularText>
            </S.PopularInfo>
          </S.PopularInfoContainer>
        </S.InfoContainer>
        {data?.storeId !== undefined && <ScrapButton storeId={data?.storeId} />}
      </S.DefaultContainer>
      <S.FundInfoContainer>
        <S.FundInfo>
          <S.FundText>목표 금액</S.FundText>
          <S.FundText>
            {Math.floor((data?.fundingTarget ?? 0) / 10000).toLocaleString()}{" "}
            만원
          </S.FundText>
        </S.FundInfo>
        <S.FundInfo>
          <S.FundText>모아 현황</S.FundText>
          <S.FundText>
            {Math.floor((data?.fundingTarget ?? 0) / 10000).toLocaleString()}{" "}
            만원
          </S.FundText>
        </S.FundInfo>
      </S.FundInfoContainer>
    </S.Container>
  );
};

export default ProjectPrev;
