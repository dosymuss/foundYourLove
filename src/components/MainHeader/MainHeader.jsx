import profileIcon from "../../img/profileIcon.svg";
import styles from './MainHeader.module.scss';
import {useNavigate} from "react-router-dom"

const MainHeader = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.main}>
      <p>Found your love</p>
      <p>I'm found</p>
      <button onClick={()=>navigate("/profile")}>
        <img src={profileIcon} alt="" />
      </button>
    </div>
  );
};

export default MainHeader;
