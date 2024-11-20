import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReturnCheckModal from "../component/portfolio/return_chek";

const certificationIcons: Record<string, string> = {
  organic: "/assets/organic.png",
  region: "/assets/region.png",
  animal: "/assets/animal.png",
  energy: "/assets/energy.png",
  hire: "/assets/hire.png",
};

const Return: React.FC = () => {
  const navigate = useNavigate();
  const { invest_id } = useParams<{ invest_id: string }>();
  const [isModalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const dummyData = [
    {
      invest_id: "1",
      finish: false,
      title: "강원도 민우네 찰옥수수",
      location: "강원도 고성군 간성읍 222",
      tagline:
        "맛있고 건강한 간식, 성실과 집중으로 키우는 찰옥수수입니다. 옥수수를 이용한 빵, 음료 제품으로 나아갑니다. 믿어보십시오, 벌써 40년입니다.",
      industry: "생산 | 식품제조",
      certification: ["organic", "region"],
      fundingPeriod: "2024.09.13 ~ 2024.11.23",
      fundingAmount: "34,140,000원",
      fundingCompleteAmount: "1,280,000원",
      imageUrl: "/assets/sample_corn.png",
      profileUrl: "/assets/sample_farmer.png",
    },
    {
      invest_id: "2",
      finish: true,
      title: "차로 하는 이야기 녹차담",
      location: "서울특별시 종로구",
      tagline:
        "맛있고 건강한 간식, 성실과 집중으로 키우는 찰옥수수입니다. 옥수수를 이용한 빵, 음료 제품으로 나아갑니다. 믿어보십시오, 벌써 40년입니다.",
      industry: "프랜차이즈 | 요식업",
      certification: ["region"],
      fundingPeriod: "2024.01.01 ~ 2024.06.01",
      fundingAmount: "50,000,000원",
      fundingCompleteAmount: "50,000,000원",
      imageUrl: "/assets/sample_corn.png",
      profileUrl: "/assets/sample_farmer.png",
    },
  ];

  const data = dummyData.find((item) => item.invest_id === invest_id);

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
    finish,
    title,
    location,
    tagline,
    industry,
    certification,
    fundingPeriod,
    fundingAmount,
    fundingCompleteAmount,
    imageUrl,
    profileUrl,
  } = data;

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
        <HeaderTitle>{title}</HeaderTitle>
      </Header>
      <ImageContainer>
        <MainImage src={imageUrl} alt={title} />
        <StatusButton>{finish ? "펀딩 완료!" : "진행 중"}</StatusButton>
      </ImageContainer>
      <ProfileContainer>
        <ProfileImage src={profileUrl} alt="profile" />
        <BusinessTitle>{title}</BusinessTitle>
        <Location>{location}</Location>
      </ProfileContainer>
      <Divider />
      <Section>
        <SectionTitle>기업 한 마디</SectionTitle>
        <SectionContent>{tagline}</SectionContent>
      </Section>
      <Divider />
      <InfoRow>
        <InfoTitle>업종</InfoTitle>
        <InfoContent>{industry}</InfoContent>
      </InfoRow>
      <InfoRow>
        <InfoTitle>인증 확인</InfoTitle>
        <CertificationContainer>
          {certification.map((cert, index) => (
            <Certification key={index}>
              <CertificationIcon src={certificationIcons[cert]} alt={cert} />
            </Certification>
          ))}
        </CertificationContainer>
      </InfoRow>
      <InfoRow>
        <InfoTitle>펀딩 기간</InfoTitle>
        <InfoContent>{fundingPeriod}</InfoContent>
      </InfoRow>
      <InfoRow>
        <InfoTitle>펀딩 완료 금액</InfoTitle>
        <InfoContent>
          {finish ? fundingAmount : fundingCompleteAmount}
        </InfoContent>
      </InfoRow>
      {finish ? (
        <ActionButton onClick={handleOpenModal}>리턴 받기</ActionButton>
      ) : (
        <InactiveButton>아직 진행 중이에요.</InactiveButton>
      )}
      {isModalVisible && <ReturnCheckModal onClose={handleCloseModal} />}
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
  margin-left: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #000;
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
