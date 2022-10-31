import classNames from "classnames";
import styles from "./styles.module.scss";

const CardLoader = () => (
  <div className={classNames(styles["card"], styles["card--loading"])}>
    <div className={styles["card__media"]}></div>
    <div className={styles["card__body"]}>
      <div
        className={classNames(styles["card__gray"], styles["card__title"])}
      ></div>
      <div className={styles["card__gray"]}></div>
      <div className={styles["card__gray"]}></div>
    </div>
  </div>
);

export default CardLoader;
