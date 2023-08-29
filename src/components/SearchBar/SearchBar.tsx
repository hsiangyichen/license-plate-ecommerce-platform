"use client";
import React from "react";
import styles from "./styles.module.scss";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchbarwrapper}>
        <FaSearch id="search-icon" />
        <input className={styles.input} placeholder="Type to search..." />
      </div>
    </div>
  );
};

export default SearchBar;
