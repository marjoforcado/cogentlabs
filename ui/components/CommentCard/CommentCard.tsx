import Text from "../Text";
import styles from "./styles.module.scss";

type PropsType = {
  children: string;
};

const CommentCard = (props: PropsType) => {
  const { children } = props;

  return (
    <div className={styles["card"]}>
      <Text size="sm">{children}</Text>
    </div>
  );
};

export default CommentCard;
