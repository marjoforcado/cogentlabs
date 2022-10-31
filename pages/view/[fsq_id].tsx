import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FixedSizeList } from "react-window";
import { useLazyGetPlacesDetailsQuery } from "../../store/api/slice";
import { CommentCard, Container, Gallery, Text } from "../../ui/components";
import { Loader as GalleryLoader } from "../../ui/components/Gallery";

import styles from "./styles.module.scss";

const IndexPage = () => {
  const { query, isReady } = useRouter();
  const [trigger, { data, isFetching, isSuccess }] =
    useLazyGetPlacesDetailsQuery();

  useEffect(() => {
    // Make sure query is available before requesting API.
    if (isReady) {
      trigger(query.fsq_id as string, true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  return (
    <div className={styles["page"]}>
      <Container centerContent>
        <div className={styles["page__flex"]}>
          <GalleryLoader />
        </div>
      </Container>
    </div>
  );

  if (isFetching) {
    return <div>loading</div>;
  }

  if (isSuccess) {
    if (data.photos === undefined || data.tips === undefined) {
      return <div>No data</div>;
    }

    const images = data.photos.map((photo: any) => ({
      id: photo.id,
      url: `${photo.prefix}original${photo.suffix}`,
    }));

    const tips = data.tips.map((tip: any) => ({
      id: tip.id,
      text: tip.text,
    }));

    return (
      <div className={styles["page"]}>
        <Container centerContent>
          <div className={styles["page__flex"]}>
            <Gallery images={images} />
            <div className={styles["page__container"]}>
              <div className={styles["page__content"]}>
                <div className={styles["page__header"]}>
                  <Link href="/">Go Back</Link>
                  <Text size="2xl" weight="semibold">
                    {data.details.name}
                  </Text>
                  <Text size="sm">
                    {data.details.location.formatted_address}
                  </Text>
                </div>
                <div className={styles["page__comments"]}>
                  <FixedSizeList
                    height={200}
                    width="100%"
                    itemCount={tips.length}
                    itemSize={100}
                  >
                    {({ index, style }) => (
                      <div style={style}>
                        <CommentCard>{tips[index].text}</CommentCard>
                      </div>
                    )}
                  </FixedSizeList>
                </div>
              </div>
              <aside className={styles["page__aside"]}>
                <iframe
                  src={`https://maps.google.com/maps?q=${data.details.geocodes.main.latitude},${data.details.geocodes.main.longitude}&z=18&ie=UTF8&output=embed`}
                  className={styles["page__map"]}
                ></iframe>
              </aside>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return <></>;
};

export default IndexPage;
