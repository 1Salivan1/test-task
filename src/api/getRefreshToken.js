import axios from "axios";
import Cookies from "js-cookie";

const getRefreshToken = async () => {
  try {
    const response = await axios.post(
      "https://auth-qa.qencode.com/v1/auth/refresh-token",
      { refresh_token: Cookies.get("refresh_token") }
    );
    const data = await response.data;
    Cookies.set("refresh_token", data.refresh_token);
  } catch (error) {
    return error;
  }
};

export default getRefreshToken;
