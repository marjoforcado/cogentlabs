import classNames from "classnames";
import Icon from "../Icon";
import styles from "./styles.module.scss";

type PropsType = {
  placeholder?: string;
  className?: string;
};

const Input = (props: PropsType) => {
  const { className, ...rest } = props;

  return (
    <div className={classNames(styles["input"], className)}>
      <Icon className={styles["input__icon"]} icon="magnify" />
      <input type="text" className={styles["input__field"]} {...rest} />
    </div>
  );
};

export default Input;
