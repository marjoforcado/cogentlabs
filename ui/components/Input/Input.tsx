import classNames from "classnames";
import styles from "./styles.module.scss";

type PropsType = {
  placeholder?: string;
  className?: string;
};

const Input = (props: PropsType) => {
  const { className, ...rest } = props;

  return (
    <input
      type="text"
      className={classNames(styles["input"], className)}
      {...rest}
    />
  );
};

export default Input;
