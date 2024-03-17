import style from "./ConfirmPassword.module.scss";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { useState } from "react";
import setNewPassword from "../../api/setPassword";
import Cookies from "js-cookie";

const ConfirmPassword = () => {
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [success, setSuccess] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim() === "" || secondPassword.trim() === "") {
      setSuccess(false);
    } else if (password === secondPassword) {
      setSuccess(true);
      setNewPassword(
        Cookies.get("token"),
        "dwasdwad",
        password,
        secondPassword
      );
    }
  };

  return (
    <div className={style["confirm-password-block"]}>
      <h1 className={style["confirm-password-block__header"]}>
        Create new password
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Password"
          type="password"
          label="Password"
          onChange={setPassword}
        />
        <Input
          placeholder="Confirm password"
          type="password"
          label="Confirm password"
          onChange={setSecondPassword}
        />
        {success === true ? (
          <span className={style["success"]}>Success</span>
        ) : (
          ""
        )}
        {success === false ? (
          <span className={style["false_success"]}>Password mismatch</span>
        ) : (
          ""
        )}
        <Button type="submit" text="Reset Password" />
      </form>
    </div>
  );
};

export default ConfirmPassword;
