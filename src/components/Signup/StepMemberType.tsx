import React, { useState } from "react";
import styled from "styled-components";
import {
  StyledCheckbox,
  NextButton,
} from "./StepCommonStyle";

export const StepMemberTypeContainer = styled.div`
  height: 100%;
  width: 100%;
  color: black;
`;

export const MemberTypeHeaderContainer = styled.div`
  width: 100%;
  height: 10%;
`;

export const MemberTypeMainContainer = styled.div `
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  justify-content: flex-start;
  
  height: 80%;
`;

export const MemberTypeBottomContainer = styled.div`
  width: 100%;
  height: 10%;
`;

const Title = styled.h2`
  width: 100%;
  height: 42px;
  font-size: 24px;
  line-height: 42px;
  font-weight: 600;
  margin-bottom: 100px;
`;

const MemberTypeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MemberTypeItem = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding: 25px;
  border: 1px solid ${({ selected }) => (selected ? "#00df82" : "#ccc")};
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? "#f6fff8" : "white")};
  cursor: pointer;
  &:hover {
    border-color: #00df82;
  }
`;

const MemberTypeLeft = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;
const MemberTypeRight = styled.div`
  font-weight: 600;
`;

const MemberTypeDescription = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  margin-top: 10px;
  color: #666;
  line-height: 20px;
`;



interface Props {
    onNext: () => void;
    setSelectedType: (type: string) => void; // New prop to pass selected type
  }

const StepMemberType: React.FC<Props> = ({
  onNext,
  setSelectedType,
}) => {
    const [selectedType, setSelectedTypeLocal] = useState<string | null>(null);

    const handleSelection = (type: string) => {
        setSelectedTypeLocal(type); // 로컬 상태 업데이트
        setSelectedType(type); // 부모한테 선택한 회원 유형 넘김
      };

  return (
    <StepMemberTypeContainer>
      <MemberTypeHeaderContainer>
      </MemberTypeHeaderContainer>
      <MemberTypeMainContainer>
        <Title>회원 유형을 선택해주세요.</Title>
        <MemberTypeList>
          {/* 투자자 */}
          <MemberTypeItem
            selected={selectedType === "investor"}
            onClick={() => handleSelection("investor")}
          >
            <MemberTypeLeft>
              <StyledCheckbox checked={selectedType === "investor"} />
            </MemberTypeLeft>
            <MemberTypeRight>
              💰 투자자예요.
              <MemberTypeDescription>
                회원가입 기념으로 투자 쿠폰을 드리고 있어요!
              </MemberTypeDescription>
            </MemberTypeRight>
          </MemberTypeItem>

          {/* 기업 */}
          <MemberTypeItem
            selected={selectedType === "business"}
            onClick={() => handleSelection("business")}
          >
            <MemberTypeLeft>
              <StyledCheckbox checked={selectedType === "business"} />
            </MemberTypeLeft>
            <MemberTypeRight>
              🏢 기업이에요.
              <MemberTypeDescription>
                프로젝트를 등록하고 목표를 달성해보세요!
              </MemberTypeDescription>
            </MemberTypeRight>
          </MemberTypeItem>
        </MemberTypeList>
      </MemberTypeMainContainer>
      <MemberTypeBottomContainer>
        <NextButton onClick={onNext} disabled={!selectedType}>
          다음
        </NextButton>
      </MemberTypeBottomContainer>
    </StepMemberTypeContainer>
  );
};

export default StepMemberType;
