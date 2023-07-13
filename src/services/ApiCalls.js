import axios from "axios";
import { PRPDUCTAPI_URI } from "../constants/constants";

export const handleGetDataFromApi = async () => {
    try {
      const { data } = await axios.get(
        PRPDUCTAPI_URI
      );
    return data
    } catch (e) {
      console.log("e", e.message);
    }
  };
  
  export const  getSingleProductData = async (productId) => {
    const { data } = await axios.get(
      `${PRPDUCTAPI_URI}/${productId}`
    );
    console.log("product", data);
    return data
  };