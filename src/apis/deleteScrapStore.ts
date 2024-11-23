import axiosInstance from "../component/token";

export const deleteScrapStore = async (storeId: number) => {
  try {
    // 스크랩 취소 요청
    const response = await axiosInstance.delete(`/api/store/scrap/${storeId}`);
    return response.status === 200 ? response.data : null;
  } catch (error) {
    console.error("스크랩 취소 실패:", error);
    throw error;
  }
};

export default deleteScrapStore;
