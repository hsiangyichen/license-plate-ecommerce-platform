"use client";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const links = [
  {
    id: 1,
    title: "首頁",
    url: "/",
  },
  {
    id: 2,
    title: "關於我們",
    url: "/about",
  },
  {
    id: 3,
    title: "車牌買賣",
    url: "/purchase",
  },
  {
    id: 4,
    title: "買賣/續牌須知",
    url: "/policy",
  },
  {
    id: 5,
    title: "聯絡我們/合作",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        {/* <img src="/images/carplatelogo.jpg" alt="" className={styles.logoImg} /> */}
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            <span>{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
