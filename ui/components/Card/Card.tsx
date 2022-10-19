import Image from "next/image";
import Text from "../Text";
import styles from "./styles.module.scss";

type PropsType = {
  imageSrc: string;
  title: string;
  description: string;
};

const Card = (props: PropsType) => {
  const { imageSrc, title, description } = props;

  return (
    <div className={styles["card"]}>
      <div className={styles["card__media"]}>
        <Image src={imageSrc} alt="image" width={64} height={64} />
      </div>
      <div className={styles["card__body"]}>
        <Text>{title}</Text>
        <Text size="sm">{description}</Text>
      </div>
    </div>
  );
};

export default Card;
