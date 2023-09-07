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
  const itemsPerPage: number = 57;

  useEffect(() => {
    fetch("/data/carPlatesData.json")
      .then((res) => res.json())
      .then((res) => {
        setResponseData(res); // Holds original responseData
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
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const currentItems = calculateCurrentPageItems();

  return (
    <div className={styles.container}>
      {/* <img className={styles.img} src={"images/platesingarage.jpg"} /> */}
      <div className={styles.img}></div>
      <div className={styles.item}>
        <Navbar />
        {/* <h1 className={styles.title}>Find Your Own Car Plate</h1>
        <p className={styles.desc}>Explore the car plates that you like</p> */}
        <div
          style={{
            overflow: "hidden",
            width: "100%",
            height: "82vh",
            position: "relative",
          }}
        >
          <div>
            <img
              src={"images/car4.jpg"}
              alt="Car Plates"
              style={{
                objectPosition: "center center",
                objectFit: "cover",
                width: "68%",
                height: "70%",
                position: "absolute",
                bottom: "0px",
                right: "0px",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "70%",
              height: "65vh",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              padding: "100px",
              // backgroundColor: "rgb(42, 45, 50)",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontSize: "135px",
                fontWeight: "300",
              }}
            >
              Find Your Own Car Plate
            </h1>
            <p
              style={{
                fontSize: "25px",
              }}
            >
              Explore the car plates that you like
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              left: "0px",
              width: "100%",
              // height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "90px 170px",
              // backgroundColor: "rgb(42, 45, 50)",
              justifyContent: "center",
            }}
          >
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              onEnterKeyPress={handleEnterKeyPress}
              onSearch={handleSearchClick}
            />
          </div>
        </div>
        <h2
          style={{
            width: "100%",
            fontSize: "40px",
            fontWeight: "300",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "100px 0 30px 0",
            justifyContent: "center",
          }}
        ></h2>
        <div className={styles.paginationAndDropdown}>
          <Pagination
            currentPage={currentPage}
            prevPage={prevPage}
            nextPage={nextPage}
            currentItems={currentItems}
            itemsPerPage={itemsPerPage}
          />
          <SortByDropdown onChange={handleSortChange} />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.sidebar}>
          <div className={styles.buttoms}>
            <a onClick={handleSearchClick}>ALL</a>
          </div>
        </div>

        <SearchResult results={currentItems} />
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
