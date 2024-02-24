import { Formik } from "formik";

import AuthInp from "../../ui/AuthInput/AuthInp";
import AuthBtn from "../../ui/AuthBtn/AuthBtn";
import { validateEditProf } from "../../code/validate/validate";
import { useUser } from "../../hooks/useSelectors";
import { isEmptyObj } from "../../code/code/code";
import { useActions } from "../../hooks/useActions";
import { useUpdateUserMutation } from "../../store/userApiCont";

import styles from "./EditForm.module.scss";

const EditForm = () => {
  const user = useUser();

  const id = localStorage.getItem("userId")

  const isEmpty = isEmptyObj(user.user);

  const [updateUser,{isLoading, isError, isSuccess}]= useUpdateUserMutation()

  const data = user.user.data;

  console.log(data);

  console.log(isEmpty);

  const { fetchUserUpdate } = useActions();

  const handleUpdate = (values) => {
    fetchUserUpdate(values);
    // updateUser({id, ...values})
  };

  if (!isEmpty) {
    return (
      <>
        <Formik
          initialValues={{
            firstName: data.first_name,
            lastName: data.last_name,
            email: data.email,
          }}
          validateOnBlur
          validationSchema={validateEditProf}
          onSubmit={(values) => {
            console.log(values);
            handleUpdate(values)
          }}
        >
          {({ values, isValid, handleBlur, handleChange, handleSubmit }) => (
            <div className={styles.main}>
              <AuthInp
                color="black"
                handleBlur={handleBlur}
                handleChange={handleChange}
                name={"firstName"}
                placeholder={"FirstName"}
                type={"text"}
                values={values.firstName}
              />
              <AuthInp
                color="black"
                handleBlur={handleBlur}
                handleChange={handleChange}
                name={"lastName"}
                placeholder={"LastName"}
                type={"text"}
                values={values.lastName}
              />
              <AuthInp
                color="black"
                handleBlur={handleBlur}
                handleChange={handleChange}
                name={"email"}
                placeholder={"Email"}
                type={"text"}
                values={values.email}
              />
              <div>
                <AuthBtn
                status={user.status}
                  color="black"
                  text={"Изменить"}
                  onclick={handleSubmit}
                  isValid={isValid}
                />
              </div>
            </div>
          )}
        </Formik>
      </>
    );
  } else {
    return <h2 className={styles.notDataText}>Данных нет!!!</h2>;
  }
};

export default EditForm;
