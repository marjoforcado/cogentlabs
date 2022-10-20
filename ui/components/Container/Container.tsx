import classNames from "classnames";
import styles from "./styles.module.scss";

type PropsType = {
  children: JSX.Element;
  centerContent?: boolean;
};

const Container = (props: PropsType) => {
  const { children, centerContent } = props;

  return (
    <div
      className={classNames(styles["app-container"], {
        [styles["app-container--is-center"]]: centerContent,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
