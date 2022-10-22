import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLazyGetPlacesDetailsQuery } from "../../store/api/slice";
import { Container, Gallery, Text } from "../../ui/components";

import styles from "./styles.module.scss";

const IndexPage = () => {
  const { query, isReady } = useRouter();
  const [refetch, results] = useLazyGetPlacesDetailsQuery();
  const { data } = results;

  useEffect(() => {
    // Make sure query is available before requesting API.
    if (isReady) {
      refetch({ fsq_id: query.fsq_id as string });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  return (
    <div className={styles["page"]}>
      <Container centerContent>
        <div className={styles["page__flex"]}>
          <Gallery />
          <div className={styles["page__container"]}>
            <div className={styles["page__content"]}>
              <Text size="2xl" weight="semibold">
                {data?.name}
              </Text>
              <Text size="sm">{data?.location.formatted_address}</Text>
            </div>
            <aside className={styles["page__aside"]}>
              {/* <iframe
                src={`https://maps.google.com/maps?q=${data?.geocodes.main.latitude},${data?.geocodes.main.longitude}&z=18&ie=UTF8&output=embed`}
                className={styles["page__map"]}
              ></iframe> */}
            </aside>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IndexPage;
