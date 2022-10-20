import { ChildProcessWithoutNullStreams } from "child_process";
import styles from "./styles.module.scss";

type PropsType = {
  children: string;
};

const Button = (props: PropsType) => {
  const { children } = props;

  return <button className={styles["button"]}>{children}</button>;
};

export default Button;
