import style from "./Button.module.scss";

const Button = ({ text, img, color, marginBottom, type }) => {
  return (
    <div className={style["button-block"]}>
      <button
        className={style["button-block__button"]}
        type={type}
        style={
          color === "white"
            ? {
                border: "1.2px solid #D3D8DC",
                backgroundColor: "white",
                padding: "14px 58px",
                width: "100%",
                marginBottom: marginBottom,
              }
            : {
                border: "none",
                backgroundColor: "#316FEA",
                color: "white",
                fontWeight: "500",
                width: "100%",
                padding: "14px 0px",
                marginBottom: marginBottom,
              }
        }
      >
        {img && (
          <img
            src={img}
            alt="Missing image"
            className={style["button-block__button-img"]}
          />
        )}
        {text}
      </button>
    </div>
  );
};

export default Button;
