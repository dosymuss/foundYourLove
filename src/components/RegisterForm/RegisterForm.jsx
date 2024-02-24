import { Formik } from "formik";
import {useNavigate} from "react-router-dom"

import AuthInp from "../../ui/AuthInput/AuthInp";
import AuthBtn from "../../ui/AuthBtn/AuthBtn";
import { validateLogin } from "../../code/validate/validate";
import { useActions } from "../../hooks/useActions";
import { useUser } from "../../hooks/useSelectors";


import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const navigate = useNavigate()

  const {fetchRegister} = useActions()

  const user = useUser()



  console.log(user);

  const handleReg = (values)=>{
    fetchRegister(values)
    navigate("/login")
  }


  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validateOnBlur
      validationSchema={validateLogin}
      onSubmit={(values) => {
        console.log(values);
        handleReg(values)
      }}
    >
      {({
        values,
        handleBlur,
        handleChange,
        errors,
        isValid,
        handleSubmit,
      }) => (
        <div className={styles.main}>
          <p>Регистрация</p>
          <AuthInp
            name={"email"}
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values.email}
            placeholder={"Email"}
            type={"text"}
          />
          <AuthInp
            name={"password"}
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values.password}
            placeholder={"Password"}
            type={"password"}
          />
          <div>
            <AuthBtn text={"Зарегистрироваться"} isValid={isValid} onclick={handleSubmit}/>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
