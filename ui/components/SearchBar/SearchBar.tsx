import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

import styles from "./styles.module.scss";

const SearchBar = () => {
  const [form, setForm] = useState({ search: "" });

  return (
    <div className={styles["search"]}>
      <div className={styles["search__container"]}>
        <Input
          placeholder="Search something..."
          name="search"
          className={styles["search__input"]}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default SearchBar;
