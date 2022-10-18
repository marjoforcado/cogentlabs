import classNames from "classnames";
import Image from "next/image";

import styles from "./styles.module.scss";

type PropsType = {
  isLoading?: boolean;
};

const Card = (props: PropsType) => {
  const { isLoading } = props;

  return (
    <div
      className={classNames(styles["card"], {
        [styles["card--is-loading"]]: isLoading,
      })}
    >
      <div className={styles["card__media"]}></div>
      <div className={styles["card__body"]}>
        {isLoading ? (
          <>
            <div
              className={classNames(
                styles["card__loader"],
                styles["card__loader--title"]
              )}
            />
            <div className={classNames(styles["card__loader"])} />
            <div className={classNames(styles["card__loader"])} />
            <div className={classNames(styles["card__loader"])} />
          </>
        ) : (
          "here"
        )}
      </div>
    </div>
  );
};

export default Card;
