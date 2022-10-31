import classNames from "classnames";
import Text from "../Text";
import styles from "./styles.module.scss";

type PropsType = {
  isLoading?: boolean;
  children?: string;
};

const CommentCard = (props: PropsType) => {
  const { children, isLoading } = props;

  const getRandomNumber = () => {
    const min = Math.ceil(1);
    const max = Math.floor(4);
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <div
      className={classNames(styles["card"], {
        [styles["card--is-loading"]]: isLoading,
      })}
    >
      {isLoading && (
        <div className={styles["card__loaders"]}>
          <div
            className={classNames(
              styles["card__loader"],
              styles[`card__loader--${getRandomNumber()}`]
            )}
          ></div>
          <div
            className={classNames(
              styles["card__loader"],
              styles[`card__loader--${getRandomNumber()}`]
            )}
          ></div>
          <div
            className={classNames(
              styles["card__loader"],
              styles[`card__loader--${getRandomNumber()}`]
            )}
          ></div>
        </div>
      )}
      {children && <Text size="sm">{children}</Text>}
    </div>
  );
};

export default CommentCard;
