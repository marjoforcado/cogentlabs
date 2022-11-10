import classNames from "classnames";
import Image from "next/image";
import styles from "./styles.module.scss";

type PropsType = {
  images: any[];
  isLoading?: boolean;
};

const Gallery = (props: PropsType) => {
  const { images = [], isLoading } = props;

  return (
    <div
      data-testid="gallery"
      className={classNames(styles["gallery"], {
        [styles["gallery--is-loading"]]: isLoading,
      })}
    >
      <div className={styles["gallery__stage"]}>
        {images[0] && (
          <Image src={images[0].url} alt={images[0].id} layout="fill" />
        )}
      </div>
      <div className={styles["gallery__grid"]}>
        <div className={styles["gallery__square"]}>
          {images[1] && (
            <Image src={images[1].url} alt={images[1].id} layout="fill" />
          )}
        </div>
        <div className={styles["gallery__square"]}>
          {images[2] && (
            <Image src={images[2].url} alt={images[2].id} layout="fill" />
          )}
        </div>
        <div className={styles["gallery__square"]}>
          {images[3] && (
            <Image src={images[3].url} alt={images[3].id} layout="fill" />
          )}
        </div>
        <div className={styles["gallery__square"]}>
          {images[4] && (
            <Image src={images[4].url} alt={images[4].id} layout="fill" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
