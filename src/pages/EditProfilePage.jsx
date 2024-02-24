import { useNavigate } from "react-router-dom";

import EditForm from "../components/EditForm/EditForm";
import bacIcon from "../img/backIconBlack.svg";
import changeImg from "../img/changeImg.svg";
import examImg from "../img/exampleImg.svg";

import styles from "../styles/EditProfile.module.scss";

const EditProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <div className={styles.wrapDiv}>
        <img
          className={styles.img}
          src="https://i.pinimg.com/564x/57/e6/47/57e647153b8612d1130db15bd39e160b.jpg"
          alt=""
        />

        <div className={styles.contentDiv}>
          <div className={styles.btnDiv}>
            <button onClick={() => navigate("/profile")}>
              <img src={bacIcon} alt="" />
            </button>
            <p>Change</p>
            <button >
              <img src={changeImg} alt="" />
            </button>
          </div>

          <div className={styles.editDiv}>
            <EditForm />
          </div>

          <p>
            Нуржан ты для меня уже как жена. Жди формального предложения.
            Осталось совсем чуть-чуть. У нас все будет кафйово в жизни. Мы с
            тобой такие целеустремленные, что я верю.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
