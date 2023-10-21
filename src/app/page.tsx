"use client";
import Link from "next/link";
import { Navbar, WhyChooseUs } from "@components";
import React from "react";
import styles from "./styles.module.scss";
import ArrowRightIcon from "@assets/icons/arrow-right-small.svg";
import ArrowDownIcon from "@assets/icons/arrow-down.svg";

export default function Home() {
  const topRef = React.useRef<HTMLDivElement>(null);
  const executeScroll = () => topRef.current?.scrollIntoView();

  return (
    <div>
      <div className={styles.container}>
        <img className={styles.homeImg} src={"images/home2.jpg"} />
        <div className={styles.item}>
          <Navbar />
          <div className={styles.itemdown}>
            <div className={styles.left}>
              <Link href="/purchase">
                <button className={styles.button}>選擇專屬於你的車牌</button>
              </Link>
            </div>
            <div className={styles.right}>
              <h1>
                218
                <br />
                你的專屬車牌
              </h1>
            </div>
          </div>
          <a onClick={executeScroll} className={styles.downArrow}>
            <ArrowDownIcon color="white" />
          </a>
        </div>
        <div className={styles.homeFilter} />
      </div>

      <div id="aboutus" ref={topRef} className={styles.aboutusContainer}>
        <div className={styles.aboutusLeft}>
          <div>
            <h2>ABOUT US / 關於我們</h2>
            <h1>Our Service</h1>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;218
              幸運車牌&quot;
              是一家專業的車牌買賣公司，無論您是想一個獨特的車牌號碼，還是需要出售或轉讓您現有的車牌，我們的團隊將全程協助您完成交易手續。
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我們以透明、誠信和專業聞名，並致力於超越客戶的期望，為客戶提供「
              優質的服務和滿意的交易 」結果是我們的使命。
            </p>
          </div>
          <Link href="/about" className={styles.moreLink}>
            <span
              style={{
                marginRight: "8px",
              }}
            >
              See More
            </span>

            <ArrowRightIcon className={styles.arrowIcon} />
          </Link>
        </div>
        <div className={styles.aboutusRight}>
          <img className={styles.car3} src={"images/car3.jpg"} />
          <img className={styles.car2} src={"images/car2.jpg"} />
          <img className={styles.car1} src={"images/car1.jpg"} />
        </div>
        <div className={styles.aboutUsfilter}></div>
      </div>

      <WhyChooseUs />
      <div className={styles.navigate}>
        <p>
          請瀏覽我們的網頁了解更多公司和服務信息。有任何問題或需要幫助，請隨時聯繫我們團隊。
          感謝您選擇我們，期待為您提供卓越的車牌交易體驗！
        </p>
      </div>
    </div>
  );
}
