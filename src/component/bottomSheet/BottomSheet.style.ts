import styled from "styled-components";
import { motion } from "framer-motion";

const BackgroundOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background: black;
  z-index: 20;
`;
const SheetBackground = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.25);
  padding-top: 12px;
  will-change: transform;
  z-index: 20;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BottomHeader = styled.div`
  height: 30px;
  cursor: grab;
  user-select: none;
`;
const HandleBar = styled.div`
  width: 51px;
  height: 12px;
  margin: 0 auto;
  border-radius: 403px;
  background: #9f9f9f;
`;
const SheetContentWrapper = styled.div`
  width: 100%;
  padding: 0 0 0 1rem;
  &.fundingpage {
    padding: 0 1rem;
  }
`;
const SheetContent = styled.div`
  width: 100%;
  background-color: pink;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: start;
  &.fundingpage {
    gap: 24px;
    align-items: center;
  }
  margin-bottom: 1.87rem;
`;
const Title = styled.span`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &.fundingpage {
    font-size: 1.125rem;
    font-weight: 700;
  }
`;
const Projects = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

export {
  BackgroundOverlay,
  SheetBackground,
  BottomHeader,
  HandleBar,
  SheetContentWrapper,
  SheetContent,
  TitleContainer,
  Title,
  Projects,
};
