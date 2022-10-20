import { Container, Gallery } from "../../ui/components";

import styles from "./styles.module.scss";

const IndexPage = () => {
  return (
    <div className={styles["page"]}>
      <Container centerContent>
        <div className={styles["page__flex"]}>
          <Gallery />
          <div className={styles["page__container"]}>
            <div className={styles["page__content"]}></div>
            <aside className={styles["page__aside"]}>
              <iframe
                src="https://maps.google.com/maps?q=35.663392,139.734033&z=18&ie=UTF8&output=embed"
                className={styles["page__map"]}
              ></iframe>
            </aside>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IndexPage;
