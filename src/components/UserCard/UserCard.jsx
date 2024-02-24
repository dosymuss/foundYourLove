import { useState } from "react";
import { useEffect } from "react";

import { useActions } from "../../hooks/useActions";
import menuIcon from "../../img/menuIcon.svg";
import likeIcon from "../../img/like.svg";
import likeIconAct from "../../img/likeAct.svg";
import deleteIcon from "../../img/delete.svg";
import closeIcon from "../../img/closeIcon.svg";
import { likeUnlikeFunc } from "../../code/code/code";

import styles from "./UserCard.module.scss";

const UserCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [likeClick, setLikeClick] = useState(false);
  const [likeAct, setLikeAct] = useState(false);

  const likesArr = JSON.parse(localStorage.getItem("likes"));

  useEffect(() => {
    if (likesArr.includes(data.id)) {
      setLikeAct(true);
    } else {
      setLikeAct(false);
    }
  }, [likeClick]);

  const { fetchDeleteUser } = useActions();

  console.log(data);

  return (
    <div className={styles.main}>
      <div className={styles.imgDiv}>
        <img src={data.avatar} alt="" />

        <div>
          <p>{data.first_name}</p>
          <p>{data.last_name}</p>
        </div>
        <div className={styles.menuDiv}>
          <button
            className={click ? styles.menuBtnHid : styles.menuBtn}
            onClick={() => setClick(true)}
          >
            <img src={menuIcon} alt="" />
          </button>
          <div className={click ? styles.buttonDiv : styles.buttonDivHid}>
            <div>
              <button
                onClick={() => {
                  likeUnlikeFunc(data.id);
                  setLikeClick(!likeClick);
                }}
              >
                <img src={likeAct ? likeIconAct : likeIcon} alt="" />
              </button>
              <button onClick={() => fetchDeleteUser(data.id)}>
                <img src={deleteIcon} alt="" />
              </button>
            </div>
            <button onClick={() => setClick(false)}>
              <img src={closeIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum</p>
      <p>{data.email}</p>
    </div>
  );
};

export default UserCard;
