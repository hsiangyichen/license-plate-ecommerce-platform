"use client";
import React, { ChangeEvent, KeyboardEvent } from "react";
import styles from "./styles.module.scss";
import Search from "@assets/icons/search.svg";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onEnterKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  onEnterKeyPress,
  onSearch,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchbarwrapper}>
        <input
          type="text"
          className={styles.input}
          placeholder="Search..."
          value={searchTerm}
          onChange={onSearchChange}
          onKeyDown={onEnterKeyPress}
        />
        <a className={styles.searchIcon} onClick={onSearch}>
          <Search width="25px" height="25px" />
        </a>
      </div>
    </div>
  );
};

export default SearchBar;
