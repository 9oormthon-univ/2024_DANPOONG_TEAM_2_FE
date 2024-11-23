import { ChangeEvent, useMemo, useState } from "react";
import useMeasure from "react-use-measure";
import FundingForm from "../fundingForm/FundingForm";
import styled from "styled-components";

import {
  BackgroundOverlay,
  SheetBackground,
  BottomHeader,
  HandleBar,
  SheetContentWrapper,
  TitleContainer,
  Title,
  Projects,
} from "./BottomSheet.style";

const FundingBS = ({
  isOpened,
  setIsOpened,
  handlepage,
}: {
  isOpened: boolean;
  setIsOpened: Function;
  handlepage: Function;
}) => {
  const [contentRef, contentBounds] = useMeasure();
  const [methodPhaseRef, methodSelectBounds] = useMeasure();
  const [fundingMethod, setFundingMethod] = useState<string | null>(null);

  const expandedHeight = useMemo(() => {
    if (fundingMethod === "mileage" || fundingMethod === "coupon") {
      return Math.min(contentBounds.height + 50, window.innerHeight - 50);
    } else {
      return Math.min(methodSelectBounds.height + 50, window.innerHeight - 50);
    }
  }, [contentBounds.height, methodSelectBounds.height, fundingMethod]);

  const handleMethod = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id == "milage") setFundingMethod("milage");
    else setFundingMethod("coupon");
  };

  return (
    <>
      <BackgroundOverlay
        initial={false}
        animate={isOpened ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
        onTap={() => setIsOpened(false)}
      />
      <SheetBackground
        initial={{ top: "100%" }}
        animate={{
          top: isOpened ? `calc(100% - ${expandedHeight}px)` : "100%",
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={(event, info) => {
          const dragThreshold = 120;
          if (info.offset.y > dragThreshold) {
            setIsOpened(false);
          }
        }}
      >
        <BottomHeader>
          <HandleBar />
        </BottomHeader>
        {fundingMethod === null ? (
          <SheetContentWrapper ref={methodPhaseRef} className="fundingpage">
            <TitleContainer className="fundingpage">
              <Title className="fundingpage">펀딩 방법을 선택하세요.</Title>
            </TitleContainer>
            <MethodsContainer
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Hr />
              <MethodCondainer>
                <FundingMethod htmlFor="mileage">
                  마일리지 사용하기
                </FundingMethod>
                <input
                  type="radio"
                  id="milage"
                  onChange={(e) => handleMethod(e)}
                />
              </MethodCondainer>
              <MethodCondainer>
                <FundingMethod htmlFor="coupon">쿠폰 사용하기</FundingMethod>
                <input
                  type="radio"
                  id="coupon"
                  onChange={(e) => handleMethod(e)}
                />
              </MethodCondainer>
            </MethodsContainer>
          </SheetContentWrapper>
        ) : (
          <SheetContentWrapper ref={contentRef} className="fundingpage">
            <TitleContainer className="fundingpage">
              <Title className="fundingpage">펀딩하기</Title>
            </TitleContainer>
            <Projects>
              <FundingForm handlePage={handlepage} />
            </Projects>
          </SheetContentWrapper>
        )}
      </SheetBackground>
    </>
  );
};

export default FundingBS;

const MethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 0 5% 50px;
`;
const MethodCondainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FundingMethod = styled.label`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: default;
`;
const Hr = styled.div`
  width: 96%;
  height: 1px;
  background: #d9d9d9;
  /* margin-bottom: 24px; */
`;
