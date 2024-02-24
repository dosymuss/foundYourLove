import RegisterForm from "../components/RegisterForm/RegisterForm";
import registerBac from "../img/RegisterBac.svg";
import BackBtn from "../ui/backBtn/BackBtn";

import styles from "../styles/Register.module.scss";

const Register = () => {
  return (
    <div className={styles.main}>
      <div>
        <BackBtn path={"/"}/>
        <RegisterForm />
      </div>
      <img className={styles.backImg} src={registerBac} alt="" />
    </div>
  );
};

export default Register;
