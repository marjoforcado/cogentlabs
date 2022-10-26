import { useTranslation } from "next-i18next";
import Brand from "../Brand";
import Container from "../Container";
import LangToggle from "../LangToggle";
import Link from "../Link";

import styles from "./styles.module.scss";

const Navbar = () => {
  const { t } = useTranslation("nav");

  return (
    <nav className={styles["nav"]}>
      <Container className={styles["nav__container"]}>
        <Brand />
        <div className={styles["nav__links"]}>
          <LangToggle />
          <Link href="/">{t("home")}</Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
