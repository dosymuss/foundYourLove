import { useNavigate } from "react-router-dom";
import { toastError, toastSucces } from "../ui/toast/toast";

import backIcon from "../img/backIconBlack.svg";
import editIcon from "../img/editIcon.svg";
import { useActions } from "../hooks/useActions";
import { useUser } from "../hooks/useSelectors";
import { useGetUserByIdQuery } from "../store/QueryUserApi";
import Loader from "../ui/loader/Loader";

import styles from "../styles/Profile.module.scss";
import { useEffect, useState } from "react";

const Profile = () => {
  // const [data, setData] = useState(null);

  const id = localStorage.getItem("userId");

  const navigate = useNavigate();

  const { fetchUserById } = useActions();

  const user = useUser();

  const { data = [], isLoading, isError,  } = useGetUserByIdQuery(id)

  console.log(data, isLoading);

  if (isError) {
    toastError("Пользователь не найден")
    navigate("/");
  }

  useEffect(() => {
    fetchUserById();
  }, []);

  // useEffect(() => {
  //   if (user.status === "fulfilled") {
  //     setData(user.user.data);
  //   }
  // }, [user]);

  const backUrl =
    "https://i.pinimg.com/564x/57/e6/47/57e647153b8612d1130db15bd39e160b.jpg";

  const backUrl2 =
    "https://i.pinimg.com/564x/1d/47/3c/1d473cf042b8b7a198830d46fad2f774.jpg";

  if (isLoading) {
    return (
      <div className={styles.main}>
        <Loader size="40px" />
      </div>
    );
  }

  if (data) {
    return (
      <div className={styles.main}>
        <div className={styles.wrapDiv}>
          <div className={styles.contentDiv}>
            <div className={styles.btnDiv}>
              <button onClick={() => navigate("/main")}>
                <img src={backIcon} alt="" />
              </button>
              <button onClick={() => navigate("/edit")}>
                <img src={editIcon} alt="" />
              </button>
            </div>
            <img
              className={styles.img}
              src={data ? backUrl2 : backUrl}
              alt=""
            />

            <div>
              <div className={styles.titleDiv}>
                <p>{data ? data.data.first_name : "Dastan"}</p>
              </div>
              <div className={styles.infoDiv}>
                <p>{data ? data.data.email : "dastanalmazbekuulu9@gmail.com"}</p>
                <p>{data ? data.data.last_name : "Almazbekov"}</p>
              </div>
              <p>
                Нуржан ты красишь мою жизнь. Вкладываешь в нее краски. Ты моя
                главная поддержка и мотивация. Самое лучшее что произошло в моей
                жизни, это то что в ней появилась ты. Я обещаю тебе, я жопу
                порву но осчастливлю тебя. Буду всегда рядом. Буду твоей защитой
                и опорой. Что бы не случилось я буду рядом. Всегда!! Уйду только
                если ты этого захочешь. Но я очень надеюсь, что ты не захочешь.
                Ты выслушиваешь все мое горе, и радуешь и поднимаешь настроение
                мне. Спасибо тебе солнце мое. Я это очень ценю в тебе. А еще я
                рад что у тебя есть свои цели, и ты упорно двигаешься к ним. Это
                меня очень радует. Горжусь тобой
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
