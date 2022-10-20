import type { NextPage } from "next";
import Link from "next/link";

import { useGetPlacesSearchQuery } from "../store/api/slice";
import { Button, Card, Input } from "../ui/components";

import styles from "./styles.module.scss";

const Home: NextPage = () => {
  const { data } = useGetPlacesSearchQuery();

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
          <Link key={result.fsq_id} href={`/view/${result.fsq_id}`}>
            <a>
              <Card
                imageSrc={`${result.categories[0].icon.prefix}64${result.categories[0].icon.suffix}`}
                title={result.name}
                description={result.location.formatted_address}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
