import axios from "axios";

const setPassword = async ({ token, secret, pasword, password_confirm }) => {
  try {
    const response = await axios.post(
      "https://auth-qa.qencode.com/v1/auth/password-set",
      {
        token: token,
        secret: secret,
        password: pasword,
        password_confirm: password_confirm,
      }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default setPassword;
