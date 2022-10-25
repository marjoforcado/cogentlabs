import classNames from "classnames";
import { useRef, useState } from "react";
import { useCollapseMenu } from "../../hooks";
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import Text from "../Text";

import styles from "./styles.module.scss";

const SearchBar = () => {
  const [form, setForm] = useState({ search: "" });
  const wrapperRef = useRef(null);

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
        />
        <Button>Search</Button>
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
