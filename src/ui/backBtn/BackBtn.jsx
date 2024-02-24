import { useNavigate } from "react-router-dom";
import backImg from "../../img/backIcon.svg";

import styles from "./BackBtn.module.scss";

const BackBtn = ({ path }) => {
  const navigate = useNavigate();
  return (
    <button className={styles.btn} onClick={() => navigate(path)}>
      <img className={styles.icon} src={backImg} alt="" />
      <p>Back</p>
    </button>
  );
};

export default BackBtn;
