import { ChildProcessWithoutNullStreams } from "child_process";
import styles from "./styles.module.scss";

type PropsType = {
  children: string;
  onClick?: () => void;
};

const Button = (props: PropsType) => {
  const { children, ...rest } = props;

  return (
    <button className={styles["button"]} {...rest}>
      {children}
    </button>
  );
};

export default Button;
