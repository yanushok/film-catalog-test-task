import { useCallback, useState } from "react";

import { useGetFilms } from "../../api/useGetFilms";
import { Header } from "../../components/Header/Header";
import { Pagination } from "../../components/Pagination/Pagination";
import { FilmList } from "../../components/FilmList/FilmList";
import { useDebounceFn } from "../../hooks/useDebounceFn";

import styles from "./MainPage.module.css";

export const MainPage = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchHandler = useCallback(
    useDebounceFn((text) => {
      setQuery(text);
      setPage(1);
    }),
    []
  );

  const { data, loading, error } = useGetFilms(query, page);

  return (
    <div className={styles.container}>
      <Header onSearch={searchHandler} />
      <FilmList
        films={data}
        isLoading={loading}
        error={error}
        className={styles.list}
      />
      {data?.totalResults && (
        <Pagination
          totalItems={data.totalResults}
          activePage={page}
          onPageClick={setPage}
          isDisabled={loading}
        />
      )}
    </div>
  );
};
