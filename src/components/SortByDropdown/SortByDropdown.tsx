"use client";
import React from "react";
import styles from "./styles.module.scss";

interface SortByDropdownProps {
  onChange: (selectedOption: string) => void;
}

const SortByDropdown: React.FC<SortByDropdownProps> = ({ onChange }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    onChange(selectedOption);
  };

  return (
    <div className={styles.sortByContainer}>
      <label className={styles.label} htmlFor={styles.sortSelect}>
        按照類型：
      </label>
      <select
        id="sortSelect"
        className={styles.sortSelect}
        onChange={handleSortChange}
      >
        <option value="default" className={styles.customOption}>
          篩選
        </option>
        <option value="priceLow" className={styles.customOption}>
          價格 ： 由低到高
        </option>
        <option value="priceHigh" className={styles.customOption}>
          價格 ： 由高到低
        </option>
        <option value="alphabeticalOrder" className={styles.customOption}>
          按照首字母
        </option>
      </select>
    </div>
  );
};

export default SortByDropdown;
