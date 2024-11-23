import axiosInstance from "../component/token";

export const postScrapStore = async (storeId: number) => {
  try {
    // 스크랩 요청
    const response = await axiosInstance.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/store/scrap/${storeId}`,
      {}
    );
    return response.status === 200 ? response.data : null;
  } catch (error) {
    console.error("스크랩 추가 실패:", error);
    throw error;
  }
};

export default postScrapStore;
