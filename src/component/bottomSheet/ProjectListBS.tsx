import { useMemo, useState } from "react";
import { useDragControls } from "framer-motion";
import useMeasure from "react-use-measure";
import { projectDetailDummy } from "../../moks/projectDetailDummy";
import ProjectPrev from "../projectPrev/ProjectPrev";
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

const ProjectListBS = ({
  viewport = "100dvh",
  title,
}: {
  viewport: string;
  title: string;
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [contentRef, contentBounds] = useMeasure();
  const dragControls = useDragControls();

  const animateState = isOpened ? "opened" : "closed";

  const expandedHeight = useMemo(
    () => Math.min(contentBounds.height + 100, window.innerHeight - 110),
    [contentBounds.height]
  );

  return (
    <>
      <BackgroundOverlay
        initial={false}
        animate={animateState}
        variants={{
          opened: {
            backdropFilter: "blur(1px)",
            pointerEvents: "all",
            opacity: 0.3,
          },
          closed: {
            backdropFilter: "blur(0px)",
            pointerEvents: "none",
            opacity: 0,
          },
        }}
        onTap={() => setIsOpened(false)}
      />

      <SheetBackground
        initial="closed"
        animate={animateState}
        variants={{
          opened: { top: `calc(${viewport} - ${expandedHeight}px)` },
          closed: { top: `calc(${viewport} - 10rem)` },
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
        drag="y"
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={(event, info) => {
          const offsetThreshold = 150;
          const deltaThreshold = 5;

          const isOverOffsetThreshold =
            Math.abs(info.offset.y) > offsetThreshold;
          const isOverDeltaThreshold = Math.abs(info.delta.y) > deltaThreshold;

          const isOverThreshold = isOverOffsetThreshold || isOverDeltaThreshold;

          if (!isOverThreshold) return;

          // y가 음수이면 위로, 양수이면 아래로
          const newIsOpened = info.offset.y < 0;

          setIsOpened(newIsOpened);
        }}
      >
        <BottomHeader onPointerDown={(e) => dragControls.start(e)}>
          <HandleBar style={{ borderRadius: 9999 }} />
        </BottomHeader>
        <SheetContentWrapper ref={contentRef}>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <Projects>
            {projectDetailDummy.map((proj) => {
              return <ProjectPrev data={proj} />;
            })}
          </Projects>
        </SheetContentWrapper>
      </SheetBackground>
    </>
  );
};

export default ProjectListBS;
