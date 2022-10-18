import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { useGetPlacesQuery } from "../store/api/slice";
import { increment } from "../store/counter/slice";
import { Input } from "../ui/components";

const Home: NextPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const { data } = useGetPlacesQuery();

  const dispatch = useAppDispatch();

  console.log(data);

  return (
    <>
      <Input />
    </>
  );
};

export default Home;
