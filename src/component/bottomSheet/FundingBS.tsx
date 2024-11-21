import { useMemo } from "react";
import useMeasure from "react-use-measure";
import FundingForm from "../fundingForm/FundingForm";
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
  title,
}: {
  isOpened: boolean;
  setIsOpened: Function;
  title: string;
}) => {
  const [contentRef, contentBounds] = useMeasure();

  const expandedHeight = useMemo(
    () => Math.min(contentBounds.height + 50, window.innerHeight - 50),
    [contentBounds.height]
  );

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
        <SheetContentWrapper ref={contentRef} className="fundingpage">
          <TitleContainer className="fundingpage">
            <Title>{title}</Title>
          </TitleContainer>
          <Projects>
            <FundingForm />
          </Projects>
        </SheetContentWrapper>
      </SheetBackground>
    </>
  );
};

export default FundingBS;
