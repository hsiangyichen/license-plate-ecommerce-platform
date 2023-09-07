"use client";
import React from "react";
import styles from "./styles.module.scss";
import ArrowLeftIcon from "@assets/icons/arrow-left.svg";
import ArrowRightIcon from "@assets/icons/arrow-right.svg";

interface PaginationProps {
  currentPage: number;
  prevPage: () => void;
  nextPage: () => void;
  currentItems: any[];
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  prevPage,
  nextPage,
  currentItems,
  itemsPerPage,
}) => {
  return (
    <div
      style={{
        margin: "20px 170px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
      className={styles.pagination}
    >
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon />
      </button>
      <span style={{ width: "30px", textAlign: "center" }}>{currentPage}</span>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={nextPage}
        disabled={currentItems.length < itemsPerPage}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
