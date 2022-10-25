import { NextPage } from "next";
import Link from "next/link";
import { useLazyGetPlacesSearchQuery } from "../store/api/slice";
import { Card, SearchBar } from "../ui/components";

import styles from "./styles.module.scss";

const Home: NextPage = () => {
  const [searchPlace, results] = useLazyGetPlacesSearchQuery();
  const { data: restaurants, isUninitialized, isFetching, isSuccess } = results;

  const renderContent = () => {
    if (isUninitialized) {
      return <div>Search something...</div>;
    }

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

    return <div>No results found</div>;
  };

  return (
    <div className={styles["page"]}>
      <SearchBar onSearch={searchPlace} />
      {renderContent()}
    </div>
  );
};

export default Home;
