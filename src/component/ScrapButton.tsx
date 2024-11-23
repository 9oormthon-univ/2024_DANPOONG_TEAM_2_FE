import useScrapStore from "../stores/useScrapStore";
import postScarpStore from "../apis/postScrapStore";
import deleteScrapStore from "../apis/deleteScrapStore";
import favIcon from "../assets/projectDetail/favIcon.svg";
import favIconFill from "../assets/projectDetail/favIconFill.svg";
const ScrapButton = ({ storeId }: { storeId: number }) => {
  const { scraps, addScrap, removeScrap } = useScrapStore(); // Zustand 훅
  const isScraped = scraps.includes(storeId);

  const scrapStore = async () => {
    try {
      const response = await postScarpStore(storeId); // API 호출
      if (response) {
        console.log("API 응답:", response);
        addScrap(storeId); // 스크랩 추가
      }
    } catch (error) {
      console.error("스크랩 상태 변경 중 오류:", error);
    }
  };
  const unScrapStore = async () => {
    try {
      const response = await deleteScrapStore(storeId); // API 호출
      if (response) {
        console.log("API 응답:", response);
        removeScrap(storeId); // 스크랩 취소
      }
    } catch (error) {
      console.error("스크랩 상태 변경 중 오류:", error);
    }
  };

  if (isScraped)
    return (
      <button onClick={unScrapStore}>
        <img src={favIconFill} height={23} />
      </button>
    );
  else
    return (
      <button onClick={scrapStore}>
        <img src={favIcon} height={23} />
      </button>
    );
};

export default ScrapButton;
