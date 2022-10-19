import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { useGetPlacesQuery } from "../store/api/slice";
import { increment } from "../store/counter/slice";
import { Button, Card, Input } from "../ui/components";

import styles from "./styles.module.scss";

const Home: NextPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const { data, isFetching } = useGetPlacesQuery();

  const dispatch = useAppDispatch();

  console.log(isFetching);
  console.log(data);

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
