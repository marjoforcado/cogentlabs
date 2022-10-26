import Image from "next/image";
import styles from "./styles.module.scss";

type PropsType = {
  images: any[];
};

const Gallery = (props: PropsType) => {
  const { images } = props;

  return (
    <div className={styles["gallery"]}>
      <div className={styles["gallery__stage"]}>
        <Image src={images[0].url} alt={images[0].id} layout="fill" />
      </div>
      <div className={styles["gallery__grid"]}>
        <div className={styles["gallery__square"]}>
          <Image src={images[1].url} alt={images[1].id} layout="fill" />
        </div>
        <div className={styles["gallery__square"]}>
          <Image src={images[2].url} alt={images[2].id} layout="fill" />
        </div>
        <div className={styles["gallery__square"]}>
          <Image src={images[3].url} alt={images[3].id} layout="fill" />
        </div>
        <div className={styles["gallery__square"]}>
          <Image src={images[4].url} alt={images[4].id} layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
