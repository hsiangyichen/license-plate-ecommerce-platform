"use client";
import React from "react";
import styles from "./styles.module.scss";

interface SearchResultProps {
  results: { carPlateNum: string; price: number }[];
}

const SearchResult: React.FC<SearchResultProps> = ({ results }) => {
  return (
    <div className={styles.searchResult}>
      {results.map((val, key) => (
        <div className={styles.resultItem} key={key}>
          <div className={styles.itemBox}>
            <div className={styles.plateNumber}>{val.carPlateNum}</div>
          </div>
          <div className={styles.itemPrice}>${val.price}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
