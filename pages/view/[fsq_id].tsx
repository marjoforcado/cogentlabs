import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLazyGetPlacesDetailsQuery } from "../../store/api/slice";
import { Container, Gallery, Link, Text } from "../../ui/components";
import styles from "./styles.module.scss";

const IndexPage = () => {
  const { query, isReady } = useRouter();
  const [getPlacesDetails, results] = useLazyGetPlacesDetailsQuery();
  const { data, isFetching, isSuccess } = results;

  const images = data?.photos.map((photo: any) => ({
    id: photo.id,
    url: `${photo.prefix}original${photo.suffix}`,
  }));

  useEffect(() => {
    // Make sure query is available before requesting API.
    if (isReady) {
      getPlacesDetails(query.fsq_id as string, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  return (
    <div className={styles["page"]}>
      <Container centerContent>
        <div className={styles["page__flex"]}>
          <Gallery isLoading={isFetching} images={images} />
          <div className={styles["page__container"]}>
            <div className={styles["page__content"]}>
              <div className={styles["page__header"]}>
                <Link href="/">Go Back</Link>
                {isFetching && (
                  <div className={styles["page__loaders"]}>
                    <div
                      className={classNames(
                        styles["page__loader"],
                        styles["page__loader--title"]
                      )}
                    ></div>
                    <div
                      className={classNames(
                        styles["page__loader"],
                        styles["page__loader--address"]
                      )}
                    ></div>
                  </div>
                )}
                {data?.details.name && (
                  <Text size="2xl" weight="semibold">
                    {data.details.name}
                  </Text>
                )}
                {data?.details.location.formatted_address && (
                  <Text size="sm">
                    {data.details.location.formatted_address}
                  </Text>
                )}
              </div>
              <div className={styles["page__comments"]}>here</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IndexPage;
