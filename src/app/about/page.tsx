import React from "react";
import { Navbar, AboutUs, ContactForm } from "@components";
import styles from "./styles.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutUsFilter}></div>
      <div className={styles.firstFilter}></div>
      <img className={styles.img} src={"images/aboutUs.jpg"} />
      <Navbar />
      <div className={styles.intoContainer}>
        <div className={styles.intro}>
          <div className={styles.introTitle}>
            <h1>ABOUT US / 關於我們</h1>
          </div>
          <div className={styles.introItem}>
            <h2>簡介&服務</h2>
            <p>
              “218 幸運車牌”
              是一家專業的車牌買賣公司，提供全面的車牌交易服務。218致力於讓車牌交易變得簡單、快捷和安全。無論您是想買一個獨特的車牌號碼，還是需要出售或轉讓您現有的車牌，我們的團隊將全程協助您完成交易手續。
              <br />
              <br />
              在我們的網頁上，您可以輕鬆瀏覽我們的車牌庫存，了解目前可用的車牌選項。我們的車牌庫存包括各種不同類型和編號的車牌，以滿足不同客戶的需求和喜好。
              <br />
              <br />
              我們的使命是為客戶提供優質的服務和滿意的交易結果，以透明、誠信和專業聞名，並致力於超越客戶的期望。
              <br />
              <br />
              請瀏覽我們的網頁，了解更多關於我們公司以及我們的服務。如果您有任何問題或需要進一步的協助，請隨時與我們的團隊聯繫。感謝您選擇我們的車牌買賣公司，期待為您提供卓越的車牌交易體驗！
            </p>
          </div>
        </div>
      </div>
      <AboutUs />
      <div id="purchase-info" className={styles.shouldKnowContainer}>
        <div className={styles.shouldKnow}>
          <h2>買賣/續牌須知</h2>
          <div className={styles.shouldKnowItem}>
            <h3>車牌買賣</h3>
            <p>
              身分證正本（私人）
              <br />
              三個月住址證明（私人）
              <br />
              有限公司註冊證副本 C.I. copy（公司登記）
              <br />
              商業登記（公司登記）
              <br />
              公司蓋章（公司登記）
              <br />
            </p>
          </div>
          <div className={styles.shouldKnowItem}>
            <h3>留牌紙續期/轉名/續牌費</h3>
            <p>
              留牌紙正本（私人/公司）
              <br />
              行車證正本（私人/公司）
              <br />
              身分證副本（私人）
              <br />
              三個月住址證明 （私人）
              <br />
              有限公司註冊證副本 C.I. copy（公司）
              <br />
              公司蓋章（公司）
            </p>
          </div>
        </div>
      </div>

      <div className={styles.contactUs}>
        <h1>CONTACT US / 聯繫我們</h1>
      </div>
      <ContactForm />
    </div>
  );
};

export default About;
