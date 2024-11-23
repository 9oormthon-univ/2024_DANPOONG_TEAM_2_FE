import * as S from "./GeneralNavBar.style";
import backIcon from "../../assets/generalNavBar/backIcon.svg";
import { useNavigate } from "react-router-dom";
import ScrapButton from "../ScrapButton";
import { useParams } from "react-router-dom";
export default function GeneralNavBar({
  title,
  hasBackBtn,
  hasRightBtn,
}: {
  title?: string;
  hasBackBtn?: boolean;
  hasRightBtn?: boolean;
}) {
  const navigator = useNavigate();
  const { storeId } = useParams<{ storeId: string }>();
  if (!storeId) {
    throw new Error("Error : 데이터를 불러오지 못했습니다.");
  }
  return (
    <S.Container>
      {hasBackBtn && (
        <button onClick={() => navigator(-1)}>
          <img src={backIcon} alt="뒤로가기" />
        </button>
      )}
      {title && <S.Title>{title}</S.Title>}
      {hasRightBtn && <ScrapButton storeId={parseInt(storeId)} />}
    </S.Container>
  );
}
