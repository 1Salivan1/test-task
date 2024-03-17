import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import style from "./ForgotPassword.module.scss";
import { useState } from "react";
import resetPassword from "../../api/resetPassword";
import Status from "../../ui/Status/Status";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await resetPassword(email);
      if (response.error === 0 || response.error === "0") {
        setFormError(false);
        navigate("/confirm-password");
      } else {
        setFormError(true);
      }
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <div className={style["forgot-password-block"]}>
      <h1 className={style["forgot-password-block__header"]}>
        Forgot Password?
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter your email"
          type="email"
          onChange={setEmail}
        />
        {formError === true ? <Status text="Error" status="error" /> : ""}
        {formError === false ? <Status text="Success" status="success" /> : ""}
        <Button text="Send" marginBottom="20px" type="submit" />
        <Button
          text="Cancel"
          color="white"
          marginBottom="20px"
          onClick={() => navigate("/")}
        />
      </form>
    </div>
  );
};

export default ForgotPassword;
