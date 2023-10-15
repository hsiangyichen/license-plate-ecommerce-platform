"use client";
import React from "react";
import styles from "./styles.module.scss";
import LicensePlateIconSmall from "@assets/icons/license-plate-small.svg";
import ToolsIconSmall from "@assets/icons/tools-small.svg";
import WalletIconSmall from "@assets/icons/wallets-small.svg";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstfilter}></div>
      <div className={styles.feature}>
        <h2>我們的特色</h2>
        <section className={styles.section}>
          <div className={styles.containerItem}>
            <div className={styles.leftItem}>
              <LicensePlateIconSmall />
            </div>
            <div className={styles.rightItem}>
              <h3>豐富車牌庫</h3>
              <p>
                本公司提供多達數百個車牌選項，無論您是尋找獨特的號碼還是符合特定主題的車牌，我們都能夠滿足您的需求。
              </p>
            </div>
          </div>
          <div className={styles.containerItem}>
            <div className={styles.leftItem}>
              <WalletIconSmall />
            </div>
            <div className={styles.rightItem}>
              <h3>價格相宜</h3>
              <p>
                價格根據車牌的稀有度、編號組合以及市場需求等因素進行合理評估。我們將確保價格公平合理，並根據您的預算提供最佳的選擇。
              </p>
            </div>
          </div>
          <div className={styles.containerItem}>
            <div className={styles.leftItem}>
              <ToolsIconSmall />
            </div>
            <div className={styles.rightItem}>
              <h3>優質服務</h3>
              <p>
                團隊由經驗豐富的專業人員組成。我們將細心聆聽您的要求，提供專業建議，並確保您在整個交易過程中得到滿意的服務。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
