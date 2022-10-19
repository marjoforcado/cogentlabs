import classNames from "classnames";
import Image from "next/image";
import Text from "../Text";

import styles from "./styles.module.scss";

type PropsType = {
  isLoading?: boolean;
};

const Card = (props: PropsType) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card__media"]}>{/* <Image /> */}</div>
      <div className={styles["card__body"]}>
        <Text size="lg">Title</Text>
        <Text size="sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
          minus.
        </Text>
      </div>
    </div>
  );
};

export default Card;
