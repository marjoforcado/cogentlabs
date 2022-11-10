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
  const router = useRouter();
  const { asPath, pathname, query, locale } = router;

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
        <button
          onClick={() =>
            router.push({ pathname, query }, asPath, { locale: "en" })
          }
        >
          EN
        </button>
        <button
          onClick={() =>
            router.push({ pathname, query }, asPath, { locale: "ja" })
          }
        >
          JA
        </button>
      </div>
    </div>
  );
};

export default LangToggle;
