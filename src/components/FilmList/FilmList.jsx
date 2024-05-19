import cn from "classnames";

import styles from "./FilmList.module.css";
import { Loader } from "../Loader/Loader";
import { Image } from "../Image/Image";

export const FilmList = ({ className, films, error, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  if (!films || !!error) {
    return <h3 className={styles.notFound}>No films found</h3>;
  }

  return (
    <div className={cn(styles.films, className)}>
      {films.Search.map((film) => (
        <div className={styles.film} key={film.imdbID}>
          <Image
            src={
              film.Poster === "N/A"
                ? "https://placehold.co/300x450"
                : film.Poster
            }
            alt={film.Title}
          />
          <div className={styles.info}>
            <h3>Name: {film.Title}</h3>
            <p>Year: {film.Year}</p>
            <p>imdbID: {film.imdbID}</p>
            <p>type: {film.Type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
