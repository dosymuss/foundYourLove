import { Link, useNavigate } from "react-router-dom";

import backImage from "../img/PreviewBac.svg";
import AuthBtn from "../ui/AuthBtn/AuthBtn";

import styles from "../styles/Preview.module.scss";

const Preview = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.main}>
      <div>
        <p className={styles.title}>Found Your Love</p>
        <p className={styles.desc}>
          Это приложение мейби поможет вам найти любовь
        </p>
        <div className={styles.btnDiv}>
          <AuthBtn text={"Регистрация"} onclick={()=>navigate("/register")}/>
          <Link className={styles.link} to={"/login"}>Войти</Link>
        </div>
      </div>
      <img src={backImage} alt="" />
    </div>
  );
};

export default Preview;
