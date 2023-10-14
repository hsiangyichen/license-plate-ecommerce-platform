"use client";
import React from "react";
import styles from "./styles.module.scss";
import LicensePlateIcon from "@assets/icons/license-plate.svg";
import ToolsIcon from "@assets/icons/tools.svg";
import WalletIcon from "@assets/icons/wallet.svg";
import Line from "@assets/icons/line.svg";

const WhyChooseUs = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={"images/whyChooseUs.jpg"} />
      <div className={styles.item}>
        <div
          style={{
            marginTop: "100px",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: "42px", fontWeight: "300" }}>
            WHY CHOOSE US?
          </h1>

          <Line />
        </div>
        <p
          style={{
            margin: "50px 370px",
            textAlign: "center",
            fontWeight: "200",
          }}
        >
          我們提供多元的車牌選擇、實惠的價格，
          <br />
          以及高品質的服務，以確保您在享受順暢且滿意的交易體驗的同時，找到理想的車牌。
        </p>
        <section className={styles.section}>
          <div>
            <LicensePlateIcon />
            <h2>豐富車牌庫</h2>
            <p>
              我們提供各種多樣的車牌選項，以
              <br />
              滿足您獨特的偏好。
            </p>
          </div>
          <div>
            <WalletIcon />
            <h2>價格相宜</h2>
            <p>
              我們的價格公平合理，並根據您的
              <br />
              預算提供最佳的選擇。
            </p>
          </div>
          <div>
            <ToolsIcon />
            <h2>優質服務</h2>
            <p>
              我們經驗豐富的團隊確保您獲得
              <br />
              專業和滿意的服務。
            </p>
          </div>
        </section>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, #1B1D1E 0%, rgba(27, 29, 30, 0.00) 35.42%, rgba(27, 29, 30, 0.00) 75.52%, #1B1D1E 100%)",
          position: "absolute",
          top: "0",
        }}
      ></div>
    </div>
  );
};

export default WhyChooseUs;
