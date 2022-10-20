import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { useGetPlacesQuery } from "../store/api/slice";
import { Button, Card, Input } from "../ui/components";

import styles from "./styles.module.scss";

const Home: NextPage = () => {
  const { data, isFetching } = useGetPlacesQuery();

  return (
    <div className={styles["page"]}>
      <div className={styles["page__search"]}>
        <Input
          placeholder="Search something..."
          className={styles["page__input"]}
        />
        <Button>Search</Button>
      </div>
      <div className={styles["page__grid"]}>
        {data?.results.map((result) => (
          <Card
            key={result.fsq_id}
            imageSrc={`${result.categories[0].icon.prefix}64${result.categories[0].icon.suffix}`}
            title={result.name}
            description={result.location.formatted_address}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
