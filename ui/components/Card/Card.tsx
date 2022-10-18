import Image from "next/image";
import Text from "../Text";
import styles from "./styles.module.scss";

const Card = () => (
  <div className={styles["card"]}>
    <div className={styles["card__media"]}>
      <Image
        src="https://fastly.4sqi.net/img/general/original/58573711_6lqxRrKy3ccNk7A_l5gtFIDkq-NIg6v7uIFTiOW8uwo.jpg"
        alt="sushi"
        layout="fill"
      />
    </div>
    <div className={styles["card__body"]}>
      <Text size="lg" weight="semibold">
        Lorem Ipsum
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea?
      </Text>
    </div>
  </div>
);

export default Card;
