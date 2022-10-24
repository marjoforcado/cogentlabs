import type { NextPage } from "next";
import Link from "next/link";
import { FormEvent, useState } from "react";

import { useLazyGetPlacesSearchQuery } from "../store/api/slice";
import { Button, Card, Input } from "../ui/components";

import styles from "./styles.module.scss";

const Home: NextPage = () => {
  const [form, setForm] = useState({
    search: "",
  });

  const [trigger, results] = useLazyGetPlacesSearchQuery();

  const { data: restaurants, isUninitialized, isFetching, isSuccess } = results;

  const renderContent = () => {
    if (isUninitialized) {
      return <div>search something</div>;
    }

    if (isFetching) {
      return <div>fetching...</div>;
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
      <div className={styles["page__search"]}>
        <Input
          placeholder="Search something..."
          name="search"
          className={styles["page__input"]}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <Button onClick={() => trigger(form.search)}>Search</Button>
      </div>
      {renderContent()}
    </div>
  );
  // return (
  //   <div className={styles["page"]}>
  //     <div className={styles["page__search"]}>
  //       <Input
  //         placeholder="Search something..."
  //         className={styles["page__input"]}
  //       />
  //       <Button>Search</Button>
  //     </div>
  // <div className={styles["page__grid"]}>
  //   {data?.results.map((result) => (
  //     <Link key={result.fsq_id} href={`/view/${result.fsq_id}`}>
  //       <a>
  //         <Card
  //           imageSrc={`${result.categories[0].icon.prefix}64${result.categories[0].icon.suffix}`}
  //           title={result.name}
  //           description={result.location.formatted_address}
  //         />
  //       </a>
  //     </Link>
  //   ))}
  // </div>
  //   </div>
  // );
};

export default Home;
