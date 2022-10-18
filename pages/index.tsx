import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { useGetPlacesQuery } from "../store/api/slice";
import { increment } from "../store/counter/slice";

const Home: NextPage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const { data } = useGetPlacesQuery();

  const dispatch = useAppDispatch();

  console.log(data);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Click me</button>
    </>
  );
};

export default Home;
