import { useTranslation } from "next-i18next";
import Brand from "../Brand";
import Container from "../Container";
import Text from "../Text";
import styles from "./styles.module.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles["footer"]}>
      <Container className={styles["footer__container"]}>
        <Brand />
        <Text>{t("developed_by")} Marjo Forcado</Text>
      </Container>
    </footer>
  );
};

export default Footer;
