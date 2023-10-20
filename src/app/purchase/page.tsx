"use client";
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  SearchBar,
  SearchResult,
  Navbar,
  SortByDropdown,
  ScrollToTopButton,
  Pagination,
} from "@components";
import styles from "./styles.module.scss";

const Purchase = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [responseData, setResponseData] = useState<any[]>([]);
  const [searchTriggered, setSearchTriggered] = useState<boolean>(false);
  const [selectedSortOption, setSelectedSortOption] =
    useState<string>("default");

  // Add pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 87;

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/data/carPlatesData.json")
      .then((res) => res.json())
      .then((res) => {
        setResponseData(res); // Holds original responseData
        setLoading(false);
      });
  }, []);

  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setSearchTerm(inputValue);
      setSearchTriggered(false);
    },
    []
  );
  const handleEnterKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        setSearchTriggered(true);
        setCurrentPage(1);
      }
    },
    []
  );

  const handleSearchClick = useCallback(() => {
    setSearchTriggered(true);
    setCurrentPage(1);
  }, []);

  const results = useMemo(() => {
    if (searchTriggered && searchTerm.trim() !== "") {
      const filteredResults = responseData.filter(
        ({ carPlateNum }: { carPlateNum: string }) =>
          carPlateNum.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return filteredResults;
    } else {
      return responseData;
    }
  }, [searchTerm, responseData, searchTriggered]);

  const handleSortChange = (selectedOption: string) => {
    // Update the selectedSortOption state with the selected sorting option
    setSelectedSortOption(selectedOption);
  };

  const sortedResults = useMemo(() => {
    let sortedData = [...results];

    // Apply sorting based on the selected sorting option
    switch (selectedSortOption) {
      case "priceLow":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case "alphabeticalOrder":
        sortedData.sort(
          (a, b) => a.carPlateNum?.localeCompare(b.carPlateNum) || 0
        );
        break;
      default:
        // No sorting or default sorting logic here
        break;
    }

    return sortedData;
  }, [results, selectedSortOption]);

  const calculateCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedResults.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(sortedResults.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentItems = calculateCurrentPageItems();

  return (
    <div className={styles.container}>
      <div className={styles.aboutUsFilter}>
        <Navbar />
      </div>

      <div className={styles.item}>
        <div className={styles.shop}>
          <h1>SHOP / 購買車牌</h1>
        </div>
        <div className={styles.searchBarAndDropdown}>
          <div className={styles.searchBar}>
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              onEnterKeyPress={handleEnterKeyPress}
              onSearch={handleSearchClick}
            />
          </div>
          <div className={styles.paginationAndDropdown}>
            <SortByDropdown onChange={handleSortChange} />
          </div>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.sidebarAndResults}>
          <SearchResult results={currentItems} loading={loading} />
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        currentItems={currentItems}
        itemsPerPage={itemsPerPage}
      />
      <ScrollToTopButton />
    </div>
  );
};

export default Purchase;
