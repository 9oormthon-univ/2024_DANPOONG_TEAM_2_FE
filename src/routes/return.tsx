import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReturnCheckModal from "../component/portfolio/return_check";
import token from "../component/token";

const certificationIcons: Record<string, string> = {
  ORGANIC: "/assets/organic.png",
  LOCAL_PRODUCT: "/assets/region.png",
  ANIMAL_FRIENDLY: "/assets/animal.png",
  RECYCLE_ENERGY: "/assets/energy.png",
  EMPLOY_VULNERABLE_CLASS: "/assets/hire.png",
  CULTURAL_PRESERVE: "assets/culture.png",
  CO2_FOOTPRINT: "assets/footprint.png",
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
  x: number;
  y: number;
  certifiedType: string[];
  startAt: string;
  endAt: string;
  fundedCount: number;
  likeCount: number;
}

const Return: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<StoreData | null>(null);
  const [loading, setLoading] = useState(true);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching return...");
        const response = await token.get(`/api/store/${id}`);
        console.log("API Response:", response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);

  if (loading) {
    return <Container>로딩 중...</Container>;
  }

  if (!data) {
    return (
      <Container>
        <Header>
          <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
          <HeaderTitle>투자 정보 없음</HeaderTitle>
        </Header>
        <InfoContent>해당 투자 정보를 찾을 수 없습니다.</InfoContent>
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
  } = data;

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
        <HeaderTitle>{name}</HeaderTitle>
      </Header>
      <ImageContainer>
        <MainImage src={images[0]} alt={name} />
        {/* <StatusButton>{finish ? "펀딩 완료!" : "진행 중"}</StatusButton> */}
      </ImageContainer>
      <ProfileContainer>
        <ProfileImage src={profileImage} alt="profile" />
        <BusinessTitle>{caption}</BusinessTitle>
        <Location>{address}</Location>
      </ProfileContainer>
      <Divider />
      <Section>
        <SectionTitle>기업 한 마디</SectionTitle>
        <SectionContent>{content}</SectionContent>
      </Section>
      <Divider />
      <InfoRow>
        <InfoTitle>업종</InfoTitle>
        <InfoContent>{category}</InfoContent>
      </InfoRow>
      <InfoRow>
        <InfoTitle>인증 확인</InfoTitle>
        <CertificationContainer>
          {certifiedType.map((cert, index) => (
            <Certification key={index}>
              <CertificationIcon src={certificationIcons[cert]} alt={cert} />
            </Certification>
          ))}
        </CertificationContainer>
      </InfoRow>
      <InfoRow>
        <InfoTitle>펀딩 기간</InfoTitle>
        <InfoContent>
          {startAt}~{endAt}
        </InfoContent>
      </InfoRow>
      <InfoRow>
        <InfoTitle>펀딩 완료 금액</InfoTitle>
        {/* <InfoContent>
          {finish ? fundingCurrent : fundingTarget}
        </InfoContent> */}
      </InfoRow>
      {/* {finish ? (
        <ActionButton onClick={handleOpenModal}>리턴 받기</ActionButton>
      ) : (
        <InactiveButton>아직 진행 중이에요.</InactiveButton>
      )}
      {isModalVisible && <ReturnCheckModal onClose={handleCloseModal} />} */}
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

const ImageContainer = styled.div`
  position: relative;
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const StatusButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #00c853;
  color: #fff;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -15px;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  top: -40px;
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
  text-align: center;
  margin-top: 50px;
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
  margin-top: 5px;
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
  margin-bottom: 5px;
  margin-left: 120px;
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

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const InfoTitle = styled.span`
  color: #6c6c6c;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

const InfoContent = styled.span`
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  color: #333;
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
  width: 50px;
  height: 18px;
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
