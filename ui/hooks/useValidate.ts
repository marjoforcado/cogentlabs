import { useEffect, useState } from "react";

const useValidate = (form: any) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!!+form.search || form.search.trim() === "") {
      setErrorMessage("Value must be a valid string.");
    } else {
      setErrorMessage("");
    }
  }, [form]);

  return [errorMessage];
};

export default useValidate;
