"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
    url: "/about#purchase-info",
  },
  {
    id: 5,
    title: "聯絡我們/合作",
    url: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoAndButton}>
        <Link href="/" className={styles.logo}>
          <img
            src="/images/carplatelogo.jpg"
            alt=""
            className={styles.logoImg}
          />
        </Link>{" "}
        <a href="#" className={styles.toggleButton} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </a>
      </div>

      <nav>
        {isOpen ? (
          <div className={styles.burgerLinks}>
            {links.map((link) => (
              <Link key={link.id} href={link.url} className={styles.link}>
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        ) : (
          <div></div>
        )}
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
