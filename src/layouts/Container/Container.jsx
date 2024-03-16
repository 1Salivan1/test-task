import style from "./Container.module.scss";

const Container = ({ children }) => {
  return (
    <div className={style["container"]}>
      <img
        src="/public/assets/images/Logo.svg"
        className={style["container__logo"]}
      />
      {children}
    </div>
  );
};

export default Container;
