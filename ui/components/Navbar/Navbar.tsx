import Brand from "../Brand";
import Container from "../Container";
import LangToggle from "../LangToggle";
import Link from "../Link";

import styles from "./styles.module.scss";

const Navbar = () => (
  <nav className={styles["nav"]}>
    <Container className={styles["nav__container"]}>
      <Brand />
      <div className={styles["nav__links"]}>
        <LangToggle />
        <Link href="/">Home</Link>
      </div>
    </Container>
  </nav>
);

export default Navbar;