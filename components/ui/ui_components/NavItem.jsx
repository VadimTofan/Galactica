import styles from "../Navbar.module.css";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const navbarItems = [
  {
    title: "ABOUT US",
    link: "/about_us",
  },
  {
    title: "DESTINATION",
    link: "/destination",
  },
  {
    title: "NASA COLLABORATION",
    link: "/nasa_collaboration",
  },
];

export function NavItem({ setClassName }) {
  const currentPath = usePathname();

  return navbarItems.map((item, index) => (
    <li
      key={index}
      className={classNames(styles[setClassName], {
        [styles.isLinkActive]: item.link === currentPath,
      })}
    >
      <Link href={item.link}>
        <b>{index + 1 < 10 ? `0${index + 1}` : index + 1}</b> {item.title}
      </Link>
    </li>
  ));
}
