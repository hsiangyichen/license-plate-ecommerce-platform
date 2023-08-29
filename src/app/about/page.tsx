import React from "react";
import { Navbar, AboutUs } from "@components";
import styles from "./styles.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={"images/platesingarage.jpg"} />
      <div className={styles.item}>
        <Navbar />
        {/* <AboutUs /> */}
        <h1 className={styles.title}>簡介&服務</h1>
        <p className={styles.descwrapper}>
          218 幸運車牌
          是一家專業的車牌買賣公司，提供全面的車牌交易服務。218致力於讓車牌交易變得簡單、快捷和安全。無論您是想買一個獨特的車牌號碼，還是需要出售或轉讓您現有的車牌，我們的團隊將全程協助您完成交易手續。
          在我們的網頁上，您可以輕鬆瀏覽我們的車牌庫存，了解目前可用的車牌選項。我們的車牌庫存包括各種不同類型和編號的車牌，以滿足不同客戶的需求和喜好。
          我們的使命是為客戶提供優質的服務和滿意的交易結果。我們以透明、誠信和專業聞名，並致力於超越客戶的期望。
          請瀏覽我們的網頁，了解更多關於我們公司以及我們的服務。如果您有任何問題或需要進一步的協助，請隨時與我們的團隊聯繫。感謝您選擇我們的車牌買賣公司，期待為您提供卓越的車牌交易體驗！
        </p>

        <h1 className={styles.title}>特色</h1>
        <div className={styles.descwrapper}>
          <h2>豐富車牌庫</h2>
          <p className={styles.desc}>
            本公司提供多達數百個車牌選項，無論您是尋找獨特的號碼還是符合特定主題的車牌，我們都能夠滿足您的需求。
          </p>
        </div>
        <div className={styles.descwrapper}>
          <h2>價錢相宜</h2>
          <p className={styles.desc}>
            價格根據車牌的稀有度、編號組合以及市場需求等因素進行合理評估。我們將確保價格公平合理，並根據您的預算提供最佳的選擇。
          </p>
        </div>
        <div className={styles.descwrapper}>
          <h2>優質服務</h2>
          <p className={styles.desc}>
            團隊由經驗豐富的專業人員組成。我們將細心聆聽您的要求，提供專業建議，並確保您在整個交易過程中得到滿意的服務。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
