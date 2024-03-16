import { useState } from "react";
import style from "./Input.module.scss";
import eye from "/assets/images/Eye.svg";

const Input = ({ type, placeholder, label, onChange, marginBottom }) => {
  const [inputType, setInputType] = useState(type);
  const handleClick = () => {
    inputType === "password" ? setInputType("text") : setInputType(type);
  };
  return (
    <div>
      <label className={style["label"]}>{label}</label>
      <div
        className={style["input-block"]}
        style={
          marginBottom
            ? { marginBottom: marginBottom }
            : { marginBottom: "25px" }
        }
      >
        <input
          onChange={(e) => onChange(e.target.value)}
          type={inputType}
          placeholder={placeholder}
          className={style["input-block__input"]}
        />
        {type === "password" ? (
          <img
            src={eye}
            alt=""
            className={style["input-block__img"]}
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Input;
