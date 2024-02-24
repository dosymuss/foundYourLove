import styles from "./Loader.module.scss";

const Loader = ({ color, size = "18px" }) => {
  const loadColor =
    color === "white"
      ? { borderColor: "black", width: size, height: size }
      : { borderColor: "white", width: size, height: size };

  return <span style={loadColor} className={styles.loader}></span>;
};

export default Loader;
