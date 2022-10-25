import { useRef, useState } from "react";
import classNames from "classnames";

import { useCollapseMenu } from "../../hooks";
import { Button, Input, Label, Text } from "../";

import styles from "./styles.module.scss";

type PropsType = {
  onSearch: (query: string, preferCache?: boolean) => void;
};

const SearchBar = (props: PropsType) => {
  const { onSearch } = props;

  const wrapperRef = useRef(null);
  const [form, setForm] = useState({ search: "" });

  const { isCollapsed, setIsCollapsed } = useCollapseMenu(wrapperRef);

  return (
    <div className={styles["search"]} ref={wrapperRef}>
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
          onFocus={() => setIsCollapsed(true)}
          onBlur={() => setIsCollapsed(false)}
          value={form.search}
        />
        <Button onClick={() => onSearch(form.search)}>Search</Button>
        <Button onClick={() => onSearch(form.search, true)}>
          Search Cache
        </Button>
      </div>
      <div
        className={classNames(styles["search__dropdown"], {
          [styles["search__dropdown--is-toggled"]]: isCollapsed,
        })}
      >
        <Text size="sm" weight="semibold">
          Search History
        </Text>
        <div className={styles["search__labels"]}>
          <Label>Label</Label>
          <Label>Label</Label>
          <Label>Label</Label>
          <Label>Label</Label>
          <Label>Label</Label>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
