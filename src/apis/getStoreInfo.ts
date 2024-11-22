import axios from "axios";

export const getStoreInfo = async (id: number) => {
  let config = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TEST_ACCESS_TOKEN}`,
    },
  };
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/store/${id}`,
      config
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Error from getStoreInfo", response);
    }
  } catch (error) {
    throw new Error("Error from getStoreInfo");
  }
};
export default getStoreInfo;
