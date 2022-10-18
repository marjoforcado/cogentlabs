import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { useGetPlacesQuery } from "../store/api/slice";
import { increment } from "../store/counter/slice";
import { Card, Input } from "../ui/components";

import styles from "./styles.module.scss";

const Home: NextPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const { data, isFetching } = useGetPlacesQuery();

  const dispatch = useAppDispatch();

  console.log(data);

  return (
    <>
      <Input />
      <div className={styles["page__grid"]}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
