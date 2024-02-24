import LoginForm from "../components/LoginForm/LoginForm";
import loginBack from "../img/LoginBac.svg";
import BackBtn from "../ui/backBtn/BackBtn";



import styles from "../styles/Login.module.scss";

const Login = () => {

  localStorage.setItem("likes", JSON.stringify([]))

  return (
    <div className={styles.main}>
      <div>
        <BackBtn path={"/"} />
        <div>
          <LoginForm />
        </div>
      </div>
      <img className={styles.backImg} src={loginBack} alt="" />
    </div>
  );
};

export default Login;
