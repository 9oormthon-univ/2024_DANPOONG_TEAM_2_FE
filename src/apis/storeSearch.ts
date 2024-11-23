import axios from "axios";

export const storeSearch = async (keyword: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/store/map/search`,
      {
        params: { address: keyword },
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TEST_ACCESS_TOKEN}`,
        },
      }
    );
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
