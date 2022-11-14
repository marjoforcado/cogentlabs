import { useState } from "react";
import useValidate from "../../hooks/useValidate";

type PropsType = {
  children: any;
  formValues: any;
};

const Form = (props: PropsType) => {
  const { children, formValues } = props;
  const [formState, setFormState] = useState({
    isDirty: false,
  });

  const [errorMessage] = useValidate(formValues);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {children({
        formState,
        setFormState,
        errorMessage,
      })}
    </form>
  );
};

export default Form;
