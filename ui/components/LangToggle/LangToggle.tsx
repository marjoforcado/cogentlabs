import classNames from "classnames";
import { useRef } from "react";
import { useCollapseMenu } from "../../hooks";
import Link from "../Link";
import Text from "../Text";

import styles from "./styles.module.scss";

const LangToggle = () => {
  const wrapperRef = useRef(null);
  const { isCollapsed, setIsCollapsed } = useCollapseMenu(wrapperRef);

  return (
    <div ref={wrapperRef} className={styles["toggle"]}>
      <button onClick={() => setIsCollapsed(true)}>
        <Text component="span" size="sm" weight="semibold">
          EN
        </Text>
      </button>
      <div
        className={classNames(styles["toggle__dropdown"], {
          [styles["toggle__dropdown--is-toggled"]]: isCollapsed,
        })}
      >
        <Link href="/">EN</Link>
        <Link href="/">JA</Link>
      </div>
    </div>
  );
};

export default LangToggle;
