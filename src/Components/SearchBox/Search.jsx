import React from "react";
import styles from "./Search.module.css";
const Search = () => {
  return (
    <div className={styles.searchMainCont}>
      <div className={styles.searchDivCo}>
        <img
          src="https://i.ibb.co/cgwpT7F/search-Log.png"
          alt="search-Log"
          border="0"
        />
        <input
          type="text"
          placeholder="Job Title or Keyword"
          className={styles.inp}
        />
      </div>
      <div className={styles.searchDivCo}>
        <img
          src="https://i.ibb.co/q56LQKV/locationlog.png"
          alt="locationlog"
          border="0"
        />
        <input
          type="text"
          placeholder="Search Location"
          className={styles.inp}
        />
        <img
          src="https://i.ibb.co/HLvMTYP/droplg.png"
          alt="droplg"
          border="0"
        />
      </div>
      <button className={styles.serBtn}>Search</button>
    </div>
  );
};

export default Search;
