"use client";

import { useAppSelector } from "@/redux/hooks";
import { Container } from "../Container/Container";
import styles from "./styles.module.css";

export const CartFooter = () => {
  const cart = useAppSelector((state) => state.cart);
  const ticketsCount = Object.values(cart).reduce((acc, cur) => acc + cur, 0);

  return (
    <Container className={styles.ticketsCount}>
      <span>Итого билетов:</span>
      <span>{ticketsCount}</span>
    </Container>
  );
};
