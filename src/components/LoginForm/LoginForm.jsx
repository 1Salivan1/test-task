import style from "./LoginForm.module.scss";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { Link } from "react-router-dom";
import login from "../../api/login";
import { useState } from "react";
import Status from "../../ui/Status/Status";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [formError, setFormError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      if (response.error === 0 || response.error === "0") {
        setFormError(false);
        login(email, password);
      } else {
        setFormError(true);
      }
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <div className={style["login-form-block"]}>
      <h1 className={style["login-form-block__header"]}>
        Log in to your account
      </h1>
      <form className={style["login-form"]} onSubmit={handleSubmit}>
        <div className={style["login-form-button-block"]}>
          <Button text="Google" color="white" img="/assets/images/Google.svg" />
          <Button text="GitHub" color="white" img="/assets/images/GitHub.svg" />
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
        <div className={style["login-form-link-block"]}>
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
        {formError === true ? <Status text="Error" status="error" /> : ""}
        {formError === false ? <Status text="Success" status="success" /> : ""}
        <Button text="Log in to Qencode" type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
