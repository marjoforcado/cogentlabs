import Text from "../Text";
import styles from "./styles.module.scss";

type PropsType = {
  children: string;
};

const Label = (props: PropsType) => {
  const { children } = props;

  return (
    <div data-testid="label" className={styles["label"]}>
      <Text size="xs">{children}</Text>
    </div>
  );
};

export default Label;
