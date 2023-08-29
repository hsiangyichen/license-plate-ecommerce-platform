"use client";
import Link from "next/link";
import { Navbar, AboutUs } from "@components";
import React from "react";
import styles from "./styles.module.scss";
import ArrowRightIcon from "@assets/icons/arrow-right-small.svg";
import ArrowDownIcon from "@assets/icons/arrow-down.svg";

export default function Home() {
  const topRef = React.useRef(null);

  const executeScroll = () => topRef.current.scrollIntoView();

  return (
    <div className={styles.container}>
      <video
        autoPlay
        muted
        loop
        className={styles.video}
        src={"/videos/men.mp4"}
      />
      {/* <div className={styles.video} /> */}

      <div className={styles.item}>
        <Navbar />
        <div className={styles.itemdown}>
          <div className={styles.title}>
            <h1 style={{ fontSize: "120px", fontWeight: "800" }}>
              Find Your Desired Car Plates <br />
            </h1>
            <p style={{ fontSize: "24px", fontWeight: "300" }}>
              Find Your Lucky Plate Number
            </p>
          </div>

          <div className={styles.right}>
            <p className={styles.desc}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;218
              幸運車牌&quot;
              是一家專業的車牌買賣公司，提供全面的車牌交易服務。218致力於讓車牌交易變得簡單、快捷和安全。無論您是想買一個獨特的車牌號碼，還是需要出售或轉讓您現有的車牌，我們的團隊將全程協助您完成交易手續。
            </p>
            <Link href="/purchase">
              <button className={styles.button}>查看所有車牌</button>
            </Link>
          </div>
        </div>
        <a onClick={executeScroll} className={styles.downArrow}>
          <ArrowDownIcon color="white" />
        </a>
      </div>
      <div id="aboutus" ref={topRef} className={styles.aboutusContainer}>
        <div className={styles.aboutusLeft}>
          <div
            style={{
              width: "100%",
              height: "50vh",
              border: "2px solid gray",
              top: "20px",
              marginLeft: "20px",
              position: "absolute",
            }}
          ></div>
          <div className={styles.leftTop}>
            <h2 style={{ fontSize: "25px", fontWeight: "300" }}>
              ABOUT US / 關於我們
            </h2>
            <h1 style={{ fontSize: "45px", fontWeight: "600" }}>Our Service</h1>
            <Link href="/about" className={styles.moreLink}>
              <span
                style={{
                  margin: "0 8px",
                }}
              >
                See More
              </span>

              <ArrowRightIcon className={styles.arrowIcon} />
            </Link>
          </div>{" "}
          <div className={styles.leftBottom}>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "100",
              }}
            >
              我們以透明、誠信和專業聞名，並致力於超越客戶的期望，
              <br />
              <br />
              <br />
              為客戶提供「 優質的服務和滿意的交易 」結果是我們的使命。
            </p>
          </div>
        </div>

        <div
          style={{
            width: "100%",
          }}
        >
          <img
            style={{
              height: "100vh",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={"images/car3.jpg"}
          />
        </div>
      </div>
      <AboutUs />
      <div
        style={{
          width: "100%",
          backgroundColor: "rgb(42, 45, 50)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontWeight: "300",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            padding: "80px 250px",
            margin: "50px",
            color: "white",
            border: "1.5px solid white",
            // backgroundColor: "rgb(42, 45, 50)",
          }}
        >
          請瀏覽我們的網頁了解更多公司和服務信息。有任何問題或需要幫助，請隨時聯繫我們團隊。
          <br /> 感謝您選擇我們，期待為您提供卓越的車牌交易體驗！
        </p>
      </div>
    </div>
  );
}
