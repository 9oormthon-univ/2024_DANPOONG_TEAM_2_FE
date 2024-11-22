import * as S from "./FundingForm.style";
import { useState } from "react";

const FundingForm = ({ handlePage }: { handlePage: Function }) => {
  const [amount, setAmount] = useState<number | undefined>(undefined);

  // 숫자를 포맷팅하여 1000 단위로 ',' 추가
  const formatAmount = (num: number | undefined): string => {
    return num !== undefined ? num.toLocaleString("ko-KR") : "";
  };

  // ','를 제거하고 숫자로 변환
  const parseAmount = (val: string): number | undefined => {
    const numericValue = parseInt(val.replace(/,/g, ""));
    return isNaN(numericValue) ? undefined : numericValue;
  };

  // Chip을 통해서 금액 변환
  const calcAmount = (val: number) => {
    setAmount((prev) => (prev !== undefined ? prev + val : val));
  };

  const postFunding = () => {
    if (amount !== undefined) {
      localStorage.setItem("successAmount", amount.toString());
      handlePage();
    }
  };

  return (
    <S.Container className="hi">
      <S.Hr />
      <S.Label>펀딩 금액 입력</S.Label>
      <S.Input
        placeholder="1,000원 단위로 입력하세요."
        type="text"
        value={formatAmount(amount)}
        onChange={(e) => setAmount(parseAmount(e.target.value))}
      />
      <S.ChipContainer>
        <S.Chip onClick={() => calcAmount(1000)}>+ 1,000원</S.Chip>
        <S.Chip onClick={() => calcAmount(5000)}>+ 5,000원</S.Chip>
        <S.Chip onClick={() => calcAmount(10000)}>+ 10,000원</S.Chip>
      </S.ChipContainer>
      <S.SubmitBtn onClick={postFunding}>참여하기</S.SubmitBtn>
    </S.Container>
  );
};

export default FundingForm;
