import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type PropsType = {
  component?: "p" | "span";
  children: string;
  className?: string;
};

const Text = (props: PropsType) => {
  const { children, component = "p", className } = props;

  return React.createElement(
    component,
    {
      className: classNames(className),
    },
    children
  );
};

export default Text;
