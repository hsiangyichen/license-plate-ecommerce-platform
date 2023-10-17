"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface SearchResultProps {
  results: { carPlateNum: string; price: number }[];
  loading: boolean;
}

const SearchResult: React.FC<SearchResultProps> = ({ results, loading }) => {
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loading}></div>
      ) : (
        <>
          <div className={styles.sidebar}>
            <div className={styles.button}>
              <a>ALL</a>
            </div>
          </div>
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
        </>
      )}
    </div>
  );
};

export default SearchResult;
