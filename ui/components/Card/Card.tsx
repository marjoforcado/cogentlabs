import Text from "../Text";
import styles from "./styles.module.scss";

const Card = () => (
  <div className={styles["card"]}>
    <div className={styles["card__media"]}></div>
    <div className={styles["card__body"]}>
      <Text>Kohien (香妃園)</Text>
      <Text size="sm">
        六本木3丁目8-15 (瀬里奈ビレッジ 2F), 港区, Tokyo, 106-0032
      </Text>
    </div>
  </div>
);

export default Card;
