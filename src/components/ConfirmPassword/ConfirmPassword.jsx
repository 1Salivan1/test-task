import style from "./ConfirmPassword.module.scss";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { useState } from "react";
import setNewPassword from "../../api/setPassword";
import Cookies from "js-cookie";
import Status from "../../ui/Status/Status";

const ConfirmPassword = () => {
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [success, setSuccess] = useState();

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
    } else {
      setSuccess(false);
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
        {success === true ? <Status text="Success" status="success" /> : ""}
        {success === false ? <Status text="Error" status="error" /> : ""}
        <Button type="submit" text="Reset Password" />
      </form>
    </div>
  );
};

export default ConfirmPassword;
