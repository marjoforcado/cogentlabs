import Brand from "../Brand";
import Container from "../Container";
import Text from "../Text";
import styles from "./styles.module.scss";

const Footer = () => (
  <footer className={styles["footer"]}>
    <Container className={styles["footer__container"]}>
      <Brand />
      <Text>Coded by Marjo Forcado</Text>
    </Container>
  </footer>
);

export default Footer;
