import classNames from "classnames";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useCollapseMenu } from "../../hooks";
import Link from "../Link";
import Text from "../Text";

import styles from "./styles.module.scss";

const LangToggle = () => {
  const wrapperRef = useRef(null);
  const { isCollapsed, setIsCollapsed } = useCollapseMenu(wrapperRef);
  const { locale } = useRouter();

  return (
    <div ref={wrapperRef} className={styles["toggle"]}>
      <button onClick={() => setIsCollapsed((prev) => !prev)}>
        <Text component="span" size="sm" weight="semibold">
          {locale!.toLocaleUpperCase()}
        </Text>
      </button>
      <div
        className={classNames(styles["toggle__dropdown"], {
          [styles["toggle__dropdown--is-toggled"]]: isCollapsed,
        })}
      >
        <Link href="/" locale="en">
          EN
        </Link>
        <Link href="/" locale="ja">
          JA
        </Link>
      </div>
    </div>
  );
};

export default LangToggle;
