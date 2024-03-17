import axios from "axios";
import Cookies from "js-cookie";

const login = async (email, password) => {
  try {
    const response = await axios.post(
      "https://auth-qa.qencode.com/v1/auth/login",
      {
        email: email,
        password: password,
      }
    );
    const data = await response.data;
    Cookies.set("token", data.access_token, { expires: data.token_expire });
    Cookies.set("refresh_token", data.refresh_token, {
      expires: data.refresh_token_expire,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default login;
