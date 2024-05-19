import { memo, useState } from "react";
import styles from "./Header.module.css";

export const Header = memo(({ onSearch }) => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Movie Catalogue</h1>
      <input
        className={styles.searchField}
        type="text"
        name="search"
        value={text}
        onChange={changeHandler}
      />
      <div className={styles.auth}>Vasya pupkin</div>
    </div>
  );
});
