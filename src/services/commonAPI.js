import axios from "axios"

const commonAPI = async (httpMethod, url, reqBody) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
  };
  try {
    const response = await axios(reqConfig);
    return response;
  } catch (error) {
    console.error("API call failed:", error);
    throw error; // Throwing error to be handled in the calling function
  }
};

export default commonAPI

