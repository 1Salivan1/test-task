import style from "./LoginForm.module.scss";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { Link } from "react-router-dom";
import login from "../../api/login";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [formError, setFormError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setFormError(true);
    } else {
      setFormError(false);
      login(email, password);
    }
  };

  return (
    <div className={style["login-form-block"]}>
      <h1 className={style["login-form-block__header"]}>
        Log in to your account
      </h1>
      <form className={style["login-form"]} onSubmit={handleSubmit}>
        <div className={style["login-form-button-block"]}>
          <Button
            text="Google"
            color="white"
            img="/public/assets/images/Google.svg"
          />
          <Button
            text="GitHub"
            color="white"
            img="/public/assets/images/GitHub.svg"
          />
        </div>
        <div className={style["login-form-hr-block"]}>
          <div className={style["login-form-hr-block__hr"]}></div>
          <span className={style["login-form-hr-block__span"]}>OR</span>
          <div className={style["login-form-hr-block__hr"]}></div>
        </div>
        <Input placeholder="Work email" type="email" onChange={setEmail} />
        <Input
          placeholder="Password"
          type="password"
          marginBottom="15px"
          onChange={setPassword}
        />
        <div
          style={{
            textAlign: "right",
            marginBottom: "30px",
            fontWeight: "500",
          }}
        >
          <Link
            href="/forgot-password"
            style={{
              color: "#316FEA",
            }}
            to="/forgot-password"
          >
            Forgot password?
          </Link>
        </div>
        {formError ? (
          <p style={{ color: "red" }}>Please fill in all fields</p>
        ) : (
          ""
        )}
        {formError === false ? <p style={{ color: "green" }}>Success</p> : ""}
        <Button text="Log in to Qencode" type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
