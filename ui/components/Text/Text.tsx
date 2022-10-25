import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type PropsType = {
  component?: "p" | "span";
  children: string;
  className?: string;
  size?: "base" | "lg" | "sm" | "2xl" | "xs";
  weight?: "normal" | "semibold";
};

const Text = (props: PropsType) => {
  const {
    children,
    component = "p",
    size = "base",
    weight = "normal",
    className,
  } = props;

  return React.createElement(
    component,
    {
      className: classNames(
        styles[`text--${size}`],
        styles[`font--${weight}`],
        className
      ),
    },
    children
  );
};

export default Text;
