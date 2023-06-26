"use client";

import { useAppSelector } from "@/redux/hooks";
import styles from "./styles.module.css";

export const Counter = () => {
  const cart = useAppSelector((state) => state.cart);
  const ticketsCount = Object.values(cart).reduce((acc, cur) => acc + cur, 0);

  return ticketsCount > 0 ? (
    <div className={styles.counter}>
      <span className="sr-only">Билетов в корзине</span>
      {ticketsCount}
    </div>
  ) : null;
};
