import axios from "axios";

const resetPassword = async (email) => {
  try {
    const response = await axios.post(
      "https://auth-qa.qencode.com/v1/auth/password-reset",
      { email: email, redirect_url: "https://auth-qa.qencode.com/password-set" }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    return error;
  }
};

export default resetPassword;
