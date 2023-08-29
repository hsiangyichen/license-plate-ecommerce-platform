"use client";
import React from "react";
import styles from "./styles.module.scss";
import LicensePlateIcon from "@assets/icons/license-plate.svg";
import ToolsIcon from "@assets/icons/tools.svg";
import WalletIcon from "@assets/icons/wallet.svg";

const About = () => {
  return (
    <div className={styles.container}>
      <h1
        style={{
          marginTop: "100px",
          fontSize: "40px",
          fontWeight: "300",
        }}
      >
        WHY CHOOSE US?
      </h1>
      <p style={{ padding: "30px 170px", textAlign: "center" }}>
        We offer a diverse selection of license plates, affordable pricing, and{" "}
        <br />
        high-quality service to ensure you find the perfect plate while enjoying
        a seamless and satisfactory trading experience.
      </p>
      <section
        style={{
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontWeight: "300",
          padding: "100px 170px",
          gap: "100px",
        }}
      >
        <div>
          <LicensePlateIcon width="100" height="100" />
          <h2>豐富車牌庫</h2>
          <p
            style={{
              margin: "30px",
            }}
          >
            我們提供各種多樣的車牌選項，以滿足您獨特的偏好。
          </p>
        </div>
        <div>
          <WalletIcon width="60" height="100" />
          <h2>價格相宜</h2>
          <p
            style={{
              margin: "30px",
            }}
          >
            我們的價格公平合理，並根據您的預算提供最佳的選擇。
          </p>
        </div>
        <div>
          <ToolsIcon width="60" height="100" />
          <h2>優質服務</h2>
          <p
            style={{
              margin: "30px",
            }}
          >
            我們經驗豐富的團隊確保您獲得專業和滿意的服務。
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
