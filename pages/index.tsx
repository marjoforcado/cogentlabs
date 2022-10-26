import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect } from "react";
import { useLazyGetPlacesSearchQuery } from "../store/api/slice";
import { useAppSelector } from "../store/hooks";
import { Card, SearchBar } from "../ui/components";

import styles from "./styles.module.scss";

const Home: NextPage = () => {
  const [searchPlace, results] = useLazyGetPlacesSearchQuery();
  const { data: restaurants, isUninitialized, isFetching, isSuccess } = results;
  const { t } = useTranslation();

  const lastSearchQuery = useAppSelector(
    (state) => state.searchHistory.lastQuery
  );

  useEffect(() => {
    if (lastSearchQuery || isUninitialized) {
      searchPlace(lastSearchQuery, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = () => {
    if (isFetching) {
      return <div>Fetching...</div>;
    }

    if (isSuccess && restaurants.results.length) {
      return (
        <div className={styles["page__grid"]}>
          {restaurants.results.map((restaurant) => (
            <Link key={restaurant.fsq_id} href={`/view/${restaurant.fsq_id}`}>
              <a>
                <Card
                  imageSrc={`${restaurant.categories[0].icon.prefix}64${restaurant.categories[0].icon.suffix}`}
                  title={restaurant.name}
                  description={restaurant.location.formatted_address}
                />
              </a>
            </Link>
          ))}
        </div>
      );
    }

    return <></>;
  };

  return (
    <div className={styles["page"]}>
      <SearchBar onSearch={searchPlace} />
      {renderContent()}
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default Home;
