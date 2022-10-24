import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLazyGetPlacesDetailsQuery } from "../../store/api/slice";
import { Container, Gallery, Text } from "../../ui/components";

import styles from "./styles.module.scss";

const IndexPage = () => {
  const { query, isReady } = useRouter();
  const [trigger, results] = useLazyGetPlacesDetailsQuery();
  const { data, isFetching, isSuccess } = results;

  useEffect(() => {
    // Make sure query is available before requesting API.
    if (isReady) {
      trigger(query.fsq_id as string);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  if (isFetching) {
    return <div>loading</div>;
  }

  if (isSuccess) {
    const images = data.photos.map((photo: any) => ({
      id: photo.id,
      url: `${photo.prefix}original${photo.suffix}`,
    }));

    return (
      <div className={styles["page"]}>
        <Container centerContent>
          <div className={styles["page__flex"]}>
            <Gallery images={images} />
            <div className={styles["page__container"]}>
              <div className={styles["page__content"]}>
                <Text size="2xl" weight="semibold">
                  {data.details.name}
                </Text>
                <Text size="sm">{data.details.location.formatted_address}</Text>
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
