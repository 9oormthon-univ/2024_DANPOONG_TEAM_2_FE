import axios from "axios";

export const getProjectRecommend = async () => {
  let config = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TEST_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/store/curation`,
      config
    );
    return response.status === 200 ? response.data : null;
  } catch (error) {
    console.error("프로젝트 추천 조회 실패:", error);
    throw error;
  }
};

export default getProjectRecommend;
