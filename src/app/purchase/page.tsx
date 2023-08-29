"use client";
import React, { useEffect, useState } from "react";
import { SearchBar, SearchResult, Navbar } from "@components";
import styles from "./styles.module.scss";
import { json } from "stream/consumers";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Purchase = () => {
  const [results, setResults] = useState();
  const carPlatesData = "data/carPlatesData.json";

  async function fetchJson() {
    const response = await fetch(carPlatesData);
    const jsonData = await response.json();

    setResults(jsonData);
  }

  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.img} src={"images/platesingarage.jpg"} />
      {/* <div className={styles.img}></div> */}
      <div className={styles.item}>
        <Navbar />
        <h1 className={styles.title}>Find Your Own Car Plate</h1>
        {/* <img
          style={{ width: "100%", height: "100%" }}
          src={"images/platesingarage.jpg"}
        /> */}
        {/* <h1 className={styles.title}>Shop</h1> */}
        <p className={styles.desc}>Explore the car plates that you like</p>
        <SearchBar />
      </div>
      {/* <SearchResult /> */}
      <div
        style={{
          display: "flex",
          width: "100%",
          padding: " 50px 170px",
          alignItems: "center",
          flexWrap: "wrap",
          // overflowY: "scroll",
          // height: "50vh",
          // justifyContent: "center",
        }}
      >
        {results?.map((result) => (
          <div
            key={result.id}
            style={{
              // display: "flex",
              alignContent: "center",
              // margin: "10px",
              border: "1px solid black",
              width: "33%",
              minWidth: "300px",
              // flex: "0 0 32%",
              // height: "150px",
            }}
          >
            <div style={{ margin: "10px", width: "250px" }}>
              Car Plate Number: {result.carPlateNum}
            </div>
            <div style={{ margin: "10px" }}>${result.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchase;
