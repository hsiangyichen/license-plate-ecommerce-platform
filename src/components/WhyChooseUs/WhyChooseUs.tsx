"use client";
import React from "react";
import styles from "./styles.module.scss";
import LicensePlateIcon from "@assets/icons/license-plate.svg";
import ToolsIcon from "@assets/icons/tools.svg";
import WalletIcon from "@assets/icons/wallet.svg";
import LicensePlateIconMobile from "@assets/icons/license-plate-mobile.svg";
import ToolsIconMobile from "@assets/icons/tools-mobile.svg";
import WalletIconMobile from "@assets/icons/wallets-mobile.svg";

const WhyChooseUs = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={"images/whyChooseUs.jpg"} />
      <div className={styles.item}>
        <div className={styles.title}>
          <h1>WHY CHOOSE US?</h1>
          <p>
            我們提供多元的車牌選擇、實惠的價格，以及高品質的服務，以確保您在享受順暢且滿意的交易體驗的同時，找到理想的車牌。
          </p>
        </div>
        <section className={styles.section}>
          <div className={styles.sectionItem}>
            <LicensePlateIcon className={styles.icon} />
            <LicensePlateIconMobile className={styles.iconMobile} />
            <div>
              <h2>豐富車牌庫</h2>
              <p>我們提供各種多樣的車牌選項，以滿足您獨特的偏好。</p>
            </div>
          </div>
          <div className={styles.sectionItem}>
            <WalletIcon className={styles.icon} />
            <WalletIconMobile className={styles.iconMobile} />
            <div>
              <h2>價格相宜</h2>
              <p>我們的價格公平合理，並根據您的預算提供最佳的選擇。</p>
            </div>
          </div>
          <div className={styles.sectionItem}>
            <ToolsIcon className={styles.icon} />
            <ToolsIconMobile className={styles.iconMobile} />
            <div>
              <h2>優質服務</h2>
              <p>我們經驗豐富的團隊確保您獲得 專業和滿意的服務。</p>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.filter}></div>
    </div>
  );
};

export default WhyChooseUs;
