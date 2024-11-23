import axios from "axios";

export const deleteScrapStore = async (storeId: number) => {
  let config = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TEST_ACCESS_TOKEN}`,
    },
  };

  try {
    // 스크랩 취소 요청
    const response = await axios.delete(
      `${import.meta.env.VITE_API_BASE_URL}/api/store/scrap/${storeId}`,
      config
    );
    return response.status === 200 ? response.data : null;
  } catch (error) {
    console.error("스크랩 취소 실패:", error);
    throw error;
  }
};

export default deleteScrapStore;
