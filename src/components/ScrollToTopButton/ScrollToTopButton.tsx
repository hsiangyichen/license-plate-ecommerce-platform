"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ArrowUpIcon from "@assets/icons/arrow-up.svg";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <>
      {isVisible && (
        <div className={styles.scrollToTopButton} onClick={scrollToTop}>
          <ArrowUpIcon />
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
