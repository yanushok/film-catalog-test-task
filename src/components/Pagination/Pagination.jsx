import cn from "classnames";

import styles from "./Pagination.module.css";

function getPages(pagesCount, activePage) {
  if (pagesCount > 10) {
    const tens = Math.ceil(activePage / 10) - 1;

    return Array(10)
      .fill(0)
      .map((_, i) => tens * 10 + i + 1);
  }

  return Array.from({ length: pagesCount }, (_, i) => i + 1);
}

export const Pagination = ({
  totalItems = 0,
  activePage,
  itemsPerPage = 10,
  onPageClick,
  isDisabled,
}) => {
  const pagesCount = Math.ceil(totalItems / itemsPerPage);

  const pages = getPages(pagesCount, activePage);

  return (
    <div className={styles.container}>
      {pagesCount > 1 && activePage > 1 && (
        <button
          disabled={isDisabled}
          onClick={() => onPageClick(activePage - 1)}
        >
          &lt;
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          className={cn(styles.button, {
            [styles.active]: page === activePage,
          })}
          onClick={() => onPageClick(page)}
          disabled={isDisabled}
        >
          {page}
        </button>
      ))}
      {pagesCount > 1 && activePage < pagesCount && (
        <button
          disabled={isDisabled}
          onClick={() => onPageClick(activePage + 1)}
        >
          &gt;
        </button>
      )}
    </div>
  );
};
