import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLazyGetPlacesDetailsQuery } from "../../store/api/slice";

const IndexPage = () => {
  const { query, isReady } = useRouter();
  const [trigger, results] = useLazyGetPlacesDetailsQuery();

  useEffect(() => {
    // Make sure query is available before requesting API.
    if (isReady) {
      trigger(query.fsq_id as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  console.log(results);

  return <div>here</div>;
};

export default IndexPage;
