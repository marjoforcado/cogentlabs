import classNames from "classnames";
import { ChangeEvent, FocusEvent } from "react";
import Icon from "../Icon";
import styles from "./styles.module.scss";

type PropsType = {
  placeholder?: string;
  className?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
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
