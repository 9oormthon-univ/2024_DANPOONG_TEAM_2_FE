import axiosInstance from "../component/token";

export const storeSearch = async (keyword: string) => {
  try {
    const response = await axiosInstance.get(`/api/store/map/search`, {
      params: { address: keyword },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Error from getStoreInfo", response);
    }
  } catch (error) {
    throw new Error("Error from getStoreInfo");
  }
};
