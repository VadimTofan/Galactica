"use client";

import { NavItem } from "./ui_components/NavItem.jsx";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <a href="/">
          <img src="/shared/logo.svg" alt="" /> GALACTICA
        </a>
      </div>
      <div className={styles.decorativeLine} />
      <nav className={styles.navbar}>
        <div className={styles.navbarBG} />
        <ul className={styles.navbarList}>
          <NavItem setClassName="navbarLinks" />
        </ul>
      </nav>
    </header>
  );
};
