import MainHeader from "../components/MainHeader/MainHeader";
import UserCard from "../components/UserCard/UserCard";
import { useUsersList } from "../hooks/useSelectors";
import { useActions } from "../hooks/useActions";
import Loader from "../ui/loader/Loader";
import { useGetAllUserQuery } from "../store/userApiCont";

import styles from "../styles/MainPage.module.scss";
import { useEffect } from "react";


const Main = () => {
  const users = useUsersList();

  const { fetchUsersList } = useActions();

  useEffect(() => {
    fetchUsersList();
  }, []);








  return (
    <div className={users.status === "loading" ? styles.mainLoad : styles.main}>
      <div className={styles.contentDiv}>
        <MainHeader />

        <div
          className={
            users.status === "loading" ? styles.cardDivLoad : styles.cardDiv
          }
        >
          {users.users.length > 0 ? (
            users.users.map((item) => <UserCard key={item.id} data={item} />)
          ) : (
            <Loader size="60px" color={"white"} />
          )}

          {/* <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
