import * as S from "./FundingForm.style";
import { useNavigate } from "react-router-dom";

const FundingForm = () => {
  const navigator = useNavigate();
  return (
    <S.Container className="hi">
      <S.Hr />
      <S.Label>펀딩 금액 입력</S.Label>
      <S.Input placeholder="1,000원 단위로 입력하세요." />
      <S.ChipContainer>
        <S.Chip>+ 1,000원</S.Chip>
        <S.Chip>+ 5,000원</S.Chip>
        <S.Chip>+ 10,000원</S.Chip>
      </S.ChipContainer>
      <S.SubmitBtn onClick={() => navigator("/fundingSuccess")}>
        참여하기
      </S.SubmitBtn>
    </S.Container>
  );
};
export default FundingForm;
