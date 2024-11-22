import * as S from "./GeneralNavBar.style";
import backIcon from "../../assets/generalNavBar/backIcon.svg";
import favBtn from "../../assets/projectDetail/favIcon.svg";
import { useNavigate } from "react-router-dom";
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
  return (
    <S.Container>
      {hasBackBtn && (
        <button onClick={() => navigator(-1)}>
          <img src={backIcon} alt="뒤로가기" />
        </button>
      )}
      {title && <S.Title>{title}</S.Title>}
      {hasRightBtn && (
        <button>
          <img src={favBtn} alt="즐겨찾는 프로젝트에 추가하기" />
        </button>
      )}
    </S.Container>
  );
}
