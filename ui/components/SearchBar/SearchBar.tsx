import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { useCollapseMenu } from "../../hooks";
import { Button, Input, Label, Text } from "../";

import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  addSearchHistory,
  setLastQuery,
} from "../../../store/search-history/slice";
import { useTranslation } from "next-i18next";

type PropsType = {
  onSearch: (query: string, preferCache?: boolean) => void;
};

const SearchBar = (props: PropsType) => {
  const { onSearch } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const histories = useAppSelector((state) => state.searchHistory.histories);

  const wrapperRef = useRef(null);
  const [form, setForm] = useState({ search: "" });

  const { isCollapsed, setIsCollapsed } = useCollapseMenu(wrapperRef);

  const handleSearch = (preferCache: boolean) => {
    onSearch(form.search, preferCache);
    dispatch(addSearchHistory(form.search));
    dispatch(setLastQuery(form.search));
  };

  // TODO: Implement auto search
  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     console.log(form.search);
  //     // Send Axios request here
  //   }, 500);

  //   return () => clearTimeout(delayDebounceFn);
  // }, [form.search]);

  return (
    <div className={styles["search"]} ref={wrapperRef}>
      <div className={styles["search__container"]}>
        <Input
          placeholder={t("search_something")}
          name="search"
          className={styles["search__input"]}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          onFocus={() => setIsCollapsed(true)}
          value={form.search}
        />
        <Button
          onClick={() => {
            handleSearch(false);
            setIsCollapsed(false);
          }}
        >
          {t("search")}
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
          {histories.map((history) => (
            <button
              key={history}
              onClick={() => {
                onSearch(history, true);
                setForm((prev) => ({
                  ...prev,
                  search: history,
                }));
                setIsCollapsed(false);
              }}
            >
              <Label>{history}</Label>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
