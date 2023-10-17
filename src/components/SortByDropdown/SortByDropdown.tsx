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
      <label htmlFor={styles.sortSelect}>按照類型:</label>
      <select
        id="sortSelect"
        className={styles.sortSelect}
        onChange={handleSortChange}
      >
        <option value="default">Select All</option>
        <option value="priceLow">Price Low to High</option>
        <option value="priceHigh">Price High to Low</option>
        <option value="alphabeticalOrder">Alphabetical A-Z</option>
      </select>
    </div>
  );
};

export default SortByDropdown;
