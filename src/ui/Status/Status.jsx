import style from "./Status.module.scss";

const Status = ({ status, text }) => {
  return (
    <div className={style["status-block"]}>
      {status === "error" ? (
        <span style={{ color: "red" }}>{text}</span>
      ) : (
        <span style={{ color: "green" }}>{text}</span>
      )}
    </div>
  );
};

export default Status;
