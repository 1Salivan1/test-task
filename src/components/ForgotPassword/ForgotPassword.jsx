import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import style from "./ForgotPassword.module.scss";
import { useState } from "react";
import resetPassword from "../../api/resetPassword";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setFormError(true);
    } else {
      setFormError(false);
      resetPassword(email, "/confirm-password");
      navigate("/confirm-password");
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
        {formError ? (
          <p style={{ color: "red" }}>Please fill in all fields</p>
        ) : (
          ""
        )}
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
