import styles from "./styles.module.scss";

const Gallery = () => {
  return (
    <div className={styles["gallery"]}>
      <div className={styles["gallery__stage"]}></div>
      <div className={styles["gallery__grid"]}>
        <div className={styles["gallery__square"]}>1</div>
        <div className={styles["gallery__square"]}>2</div>
        <div className={styles["gallery__square"]}>3</div>
        <div className={styles["gallery__square"]}>4</div>
      </div>
    </div>
  );
};

export default Gallery;
