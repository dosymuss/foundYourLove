import { Formik } from "formik";
import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useUser } from "../../hooks/useSelectors";
import { useNavigate } from "react-router-dom";
import { toastError, toastSucces } from "../../ui/toast/toast";

import AuthInp from "../../ui/AuthInput/AuthInp";
import AuthBtn from "../../ui/AuthBtn/AuthBtn";
import { validateLogin } from "../../code/validate/validate";
import { useLoginUserMutation } from "../../store/userApiCont";

import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const [error, setError] = useState(false);

  const [loginUser, {isLoading, isError, data=[], isSuccess} ] = useLoginUserMutation()

  const navigate = useNavigate();

  const { fetchLogin } = useActions();

  const user = useUser();

  const handleLogin = (values) => {
    // fetchLogin(values);
    loginUser(values)
    // navigate("/profile");
    console.log(data, isLoading);
  };

  if(isError){
    toastError("Тура эмес")
  }

  if(isSuccess){
    toastSucces("Кир😎")
    navigate("/profile")
  }

  



  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validateLogin}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);

        handleLogin(values);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        errors,
        isValid,
      }) => (
        <div className={styles.main}>
          {errors && setError(true)}
          {isValid && setError(false)}
          <p>Войти</p>
          <AuthInp
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values.email}
            name={"email"}
            type={"text"}
            placeholder={"Email"}
          />
          <AuthInp
            handleBlur={handleBlur}
            handleChange={handleChange}
            values={values.password}
            name={"password"}
            type={"password"}
            placeholder={"Password"}
          />
          <div>
            <AuthBtn
              status={user.status}
              error={error}
              isValid={isValid}
              text={"Войти"}
              onclick={handleSubmit}
              isLodaing={isLoading}
              color="white"
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
