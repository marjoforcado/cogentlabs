import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FixedSizeList } from "react-window";
import { useLazyGetPlacesDetailsQuery } from "../../store/api/slice";
import {
  CommentCard,
  Container,
  Gallery,
  Link,
  Text,
} from "../../ui/components";
import styles from "./styles.module.scss";

const IndexPage = () => {
  const { query, isReady } = useRouter();
  const [getPlacesDetails, results] = useLazyGetPlacesDetailsQuery();
  const { data, isFetching, isSuccess } = results;

  const images =
    data?.photos.map((photo: any) => ({
      id: photo.id,
      url: `${photo.prefix}original${photo.suffix}`,
    })) || [];

  const tips =
    data?.tips.map((tip: any) => ({
      id: tip.id,
      text: tip.text,
    })) || [];

  const renderMap = () => {
    if (
      data?.details.geocodes.main.latitude &&
      data?.details.geocodes.main.longitude
    ) {
      return (
        <iframe
          src={`https://maps.google.com/maps?q=${data.details.geocodes.main.latitude},${data.details.geocodes.main.longitude}&z=18&ie=UTF8&output=embed`}
          className={styles["page__gmap"]}
        ></iframe>
      );
    }

    return <></>;
  };

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
              <div className={styles["page__comments"]}>
                {isFetching && (
                  <>
                    <CommentCard isLoading></CommentCard>
                    <CommentCard isLoading></CommentCard>
                    <CommentCard isLoading></CommentCard>
                  </>
                )}
                {tips.length > 0 && (
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
                )}
              </div>
            </div>
            <aside className={styles["page__aside"]}>
              <div
                className={classNames(styles["page__map"], {
                  [styles["page__map--is-loading"]]: isFetching,
                })}
              >
                {renderMap()}
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IndexPage;
