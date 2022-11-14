import { useEffect, useState } from "react";

const useValidate = (form: any) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(form.search.trim())) {
      setErrorMessage("Email is not allowed.");
    } else if (/^\d+$/.test(form.search.trim()) || form.search.trim() === "") {
      setErrorMessage("Value must be a valid string.");
    } else {
      setErrorMessage("");
    }
  }, [form]);

  return [errorMessage];
};

export default useValidate;
