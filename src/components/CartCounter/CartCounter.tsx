import Link from "next/link";
import { BasketIcon } from "../Icons/BasketIcon";
import { Counter } from "./Counter/Counter";
import styles from "./styles.module.css";

export const CartCounter = () => {
  return (
    <Link className={styles.container} href="/cart" aria-label="Корзина">
      <Counter />
      <BasketIcon className={styles.icon} />
    </Link>
  );
};
