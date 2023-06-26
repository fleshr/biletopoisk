import Link from "next/link";
import { CartCounter } from "../CartCounter/CartCounter";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        Билетопоиск
      </Link>
      <CartCounter />
    </header>
  );
};
