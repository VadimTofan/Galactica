"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import SocialMedia from "./ui_components/SocialMediaItem.jsx";
import { NavItem } from "./ui_components/NavItem.jsx";

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      <div className={styles.footerList}>
        <h3>Pages</h3>
        <ul>
          <NavItem setClassName="footerLink" />
        </ul>
      </div>
      <SocialMedia />
    </footer>
  );
};
