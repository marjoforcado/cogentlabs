import classNames from "classnames";
import styles from "./styles.module.scss";

const Loader = () => (
  <div className={classNames(styles["gallery"], styles["gallery--is-loading"])}>
    <div className={styles["gallery__stage"]}></div>
    <div className={styles["gallery__grid"]}>
      <div className={styles["gallery__square"]}></div>
      <div className={styles["gallery__square"]}></div>
      <div className={styles["gallery__square"]}></div>
      <div className={styles["gallery__square"]}></div>
    </div>
  </div>
);

export default Loader;
