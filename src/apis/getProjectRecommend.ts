import token from "../component/token";

export const getProjectRecommend = async () => {
  try {
    const response = await token.get(`/api/store/curation`);
    return response.status === 200 ? response.data : null;
  } catch (error) {
    console.error("프로젝트 추천 조회 실패:", error);
    throw error;
  }
};

export default getProjectRecommend;
