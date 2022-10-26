import classNames from "classnames";
import styles from "./styles.module.scss";

type PropsType = {
  children: JSX.Element | JSX.Element[] | string;
  centerContent?: boolean;
  className?: string;
};

const Container = (props: PropsType) => {
  const { children, centerContent, className } = props;

  return (
    <div
      className={classNames(
        styles["app-container"],
        {
          [styles["app-container--is-center"]]: centerContent,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
