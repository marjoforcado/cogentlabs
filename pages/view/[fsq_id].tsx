import { Container, Gallery } from "../../ui/components";

import styles from "./styles.module.scss";

const IndexPage = () => {
  return (
    <div className={styles["page"]}>
      <Container centerContent>
        <Gallery />
      </Container>
    </div>
  );
};

export default IndexPage;
