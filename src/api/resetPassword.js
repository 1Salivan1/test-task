import axios from "axios";

const resetPassword = async (email, url) => {
  try {
    const response = await axios.post(
      "https://auth-qa.qencode.com/v1/auth/password-reset",
      { email: email, redirect_url: url }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default resetPassword;
