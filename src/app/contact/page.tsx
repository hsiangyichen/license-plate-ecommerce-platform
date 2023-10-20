"use client";
import React, { useState } from "react";
import { Navbar } from "@components";
import styles from "./styles.module.scss";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactForm } from "@components/ContactForm";
import ArrowDownIcon from "@assets/icons/arrow-down.svg";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.aboutUsFilter}>
          <Navbar />
        </div>

        <div className={styles.contactUs}>
          <h1>CONTACT US / 聯繫我們</h1>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
