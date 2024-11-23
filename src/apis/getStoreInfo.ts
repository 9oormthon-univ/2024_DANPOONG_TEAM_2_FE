import axiosInstance from "../component/token";

export const getStoreInfo = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/api/store/${id}`);
    if (response.status === 200) {
      console.log("상점 정보", response.data);
      return response.data;
    } else {
      console.log("Error from getStoreInfo", response);
    }
  } catch (error) {
    throw new Error("Error from getStoreInfo");
  }
};
export default getStoreInfo;
