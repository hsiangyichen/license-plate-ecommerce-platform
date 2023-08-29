import React from "react";
import { Navbar } from "@components";
import styles from "./styles.module.scss";

const Policy = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={"images/platesingarage.jpg"} />
      <div className={styles.item}>
        <Navbar />
        <h1 className={styles.title}>買賣/續牌須知</h1>
        <div className={styles.descwrapper}>
          <h2>車牌買賣</h2>
          <p className={styles.desc}>身分證正本（私人）</p>
          <p className={styles.desc}>三個月住址證明（私人）</p>
          <p className={styles.desc}>
            有限公司註冊證副本 C.I. copy（公司登記）
          </p>
          <p className={styles.desc}>商業登記（公司登記）</p>
          <p className={styles.desc}>公司蓋章（公司登記）</p>
        </div>
        <div className={styles.descwrapper}>
          <h2>留牌紙續期/轉名/續牌費</h2>
          <p className={styles.desc}>留牌紙正本（私人/公司）</p>
          <p className={styles.desc}>行車證正本（私人/公司）</p>
          <p className={styles.desc}>身分證副本（私人）</p>
          <p className={styles.desc}>三個月住址證明 （私人）</p>
          <p className={styles.desc}>有限公司註冊證副本 C.I. copy（公司）</p>
          <p className={styles.desc}>公司蓋章（公司）</p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
