import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import token from "../component/token";

const certificationIcons: Record<string, string> = {
  ORGANIC: "/assets/organic.png",
  LOCAL_PRODUCT: "/assets/region.png",
  ANIMAL_FRIENDLY: "/assets/animal.png",
  RECYCLE_ENERGY: "/assets/energy.png",
  EMPLOY_VULNERABLE_CLASS: "/assets/hire.png",
  CULTURAL_PRESERVE: "/assets/culture.png",
  CO2_FOOTPRINT: "/assets/footprint.png",
};

interface StoreData {
  id: number;
  name: string;
  category: string;
  profileImage: string;
  caption: string;
  fundingTarget: number;
  fundingCurrent: number;
  images: string[];
  content: string;
  address: string;
  certifiedType: string[];
  startAt: string;
  endAt: string;
  fundedCount: number;
  likeCount: number;
  isFinished: boolean; // 추가된 필드
}

const Return: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<StoreData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("useEffect triggered with id:", id);
    const fetchData = async () => {
      try {
        console.log("Fetching data for ID:", id);
        const response = await token.get(`/api/store/${id}`);
        console.log("API Response:", response.data);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("데이터를 가져오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);

  if (loading) {
    return <LoadingContainer>로딩 중...</LoadingContainer>;
  }

  if (error) {
    return (
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
          <HeaderTitle>오류 발생</HeaderTitle>
        </Header>
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    );
  }

  if (!data) {
    return (
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
          <HeaderTitle>투자 정보 없음</HeaderTitle>
        </Header>
        <ErrorMessage>해당 투자 정보를 찾을 수 없습니다.</ErrorMessage>
      </Container>
    );
  }

  const {
    name,
    category,
    profileImage,
    caption,
    fundingTarget,
    fundingCurrent,
    images,
    content,
    address,
    certifiedType,
    startAt,
    endAt,
    isFinished,
  } = data;

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
        <HeaderTitle>{name}</HeaderTitle>
      </Header>
      <ImageContainer>
        {images?.[0] && <MainImage src={images[0]} alt={name} />}
      </ImageContainer>
      <ProfileContainer>
        <ProfileImage src={profileImage} alt="profile" />
        <BusinessTitle>{name}</BusinessTitle>
        <Location>{address}</Location>
      </ProfileContainer>
      <Divider />
      <Section>
        <SectionTitle>기업 한 마디</SectionTitle>
        <SectionContent>{content}</SectionContent>
      </Section>
      <Divider />
      <InfoRow title="업종" content={category} />
      <InfoRow title="펀딩 기간" content={`${startAt} ~ ${endAt}`} />
      <InfoRow
        title="펀딩 목표 금액"
        content={`${fundingTarget.toLocaleString()}원`}
      />
      <InfoRow
        title="현재 펀딩 금액"
        content={`${fundingCurrent.toLocaleString()}원`}
      />
      <InfoRow
        title="인증 확인"
        content={
          <CertificationContainer>
            {certifiedType.map((cert, index) => (
              <Certification key={index}>
                <CertificationIcon src={certificationIcons[cert]} alt={cert} />
              </Certification>
            ))}
          </CertificationContainer>
        }
      />
      <Divider />
      <ButtonContainer>
        {isFinished ? (
          <ActionButton>리턴 받기</ActionButton>
        ) : (
          <InactiveButton>아직 진행 중이에요.</InactiveButton>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default Return;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #ffffff;
  min-height: 100vh;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 18px;
  color: #333;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  margin-right: 60px;

  &:hover {
    color: #00c853;
  }
`;

const HeaderTitle = styled.h1`
  margin-left: 30px;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const ErrorMessage = styled.div`
  color: #ff5252;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 8px;
  height: 140px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -40px;
  z-index: 1;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #d9d9d9;
`;

const BusinessTitle = styled.h2`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

const Location = styled.span`
  color: #818787;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #ddd;
  margin: 10px 0;
`;

const Section = styled.div`
  margin: 10px 0;
`;

const SectionTitle = styled.h3`
  color: #03624c;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-transform: capitalize;
`;

const SectionContent = styled.p`
  color: #353f3f;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  text-transform: capitalize;
`;

const InfoRow = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => (
  <InfoRowContainer>
    <InfoTitle>{title}</InfoTitle>
    <InfoContent>{content}</InfoContent>
  </InfoRowContainer>
);

const InfoRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const InfoTitle = styled.span`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

const InfoContent = styled.span`
  color: #000;
  text-align: right;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;

const CertificationContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Certification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 2px;
  border-radius: 8px;
`;

const CertificationIcon = styled.img`
  width: 35px;
  height: 35px;
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #00c853;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #00a43e;
  }
`;

const InactiveButton = styled.div`
  width: 100%;
  padding: 15px;
  background: #f5f5f5;
  color: #818787;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
  margin-top: 40px;
`;

const ButtonContainer = styled.div``;
