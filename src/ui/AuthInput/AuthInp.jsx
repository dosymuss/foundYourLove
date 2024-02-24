import { useState } from "react";
import closeEye from "../../img/closeEye.svg";
import openEye from "../../img/openEye.svg";

import styles from "./AuthInp.module.scss";

const AuthInp = ({ type, placeholder, values, handleBlur, handleChange, name, color="white"  }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {type === "text" ? (
        <input style={{color:color, borderColor:color}} value={values} onBlur={handleBlur} onChange={handleChange} name={name} placeholder={placeholder} className={styles.inp} type={type} />
      ) : (
        <div className={styles.passDiv}>
          <input value={values} onBlur={handleBlur} onChange={handleChange} name={name} placeholder={placeholder} type={open ? "text" : "password"} />
          <button onClick={() => setOpen(!open)}>
            <img src={open ? openEye : closeEye} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthInp;
