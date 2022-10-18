import styles from "./styles.module.scss";

type PropsType = {
  placeholder?: string;
};

const Input = (props: PropsType) => {
  const { ...rest } = props;

  return <input type="text" className={styles["input"]} {...rest} />;
};

export default Input;
