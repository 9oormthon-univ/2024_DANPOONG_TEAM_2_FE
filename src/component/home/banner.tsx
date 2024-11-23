import React from "react";
import styled from "styled-components";

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <Image src="/assets/banner_img.png" alt="포스터 이미지" />
      <Overlay>
        <Tag>기업 큐레이션</Tag>
        <Content>
          <Subtitle>유기농 농법 강원도 감자</Subtitle>
          <Title>감자로 여는 가치, 감자해요</Title>
          <DetailButton>자세히보기</DetailButton>
        </Content>
      </Overlay>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  margin-top: 21px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;

const Tag = styled.div`
  background: black;
  font-weight: bold;
  border-radius: 6px;
  width: 76px;
  height: 23px;
  flex-shrink: 0;
  align-self: flex-start;
  margin-bottom: 180px;
  color: #fafafa;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.408px;
`;

const Content = styled.div`
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
`;

const Subtitle = styled.div`
  font-size: 13px;
  margin-bottom: 8px;
  margin-right: 100px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const DetailButton = styled.button`
  margin-top: 12px;
  margin-left: 190px;
  color: #fafafa;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.408px;
  width: 76px;
  height: 23px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 36px;
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
