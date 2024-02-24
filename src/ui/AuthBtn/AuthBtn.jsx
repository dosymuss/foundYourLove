import Loader from "../loader/Loader";
import styles from "./AuthBtn.module.scss";

const AuthBtn = ({ text, onclick, isValid, error, color = "white", status="", isLodaing }) => {
  const styleObj =
    color !== "white"
      ? { color: "white", backgroundColor: "black" }
      : { color: "black", backgroundColor: "white" };

      
  return (
    <button
      style={styleObj}
      disabled={isValid !== undefined && !isValid}
      className={styles.button}
      onClick={onclick}
    >
      {status === "loading" || isLodaing ? <Loader/> : text}
    </button>
  );
};

export default AuthBtn;
