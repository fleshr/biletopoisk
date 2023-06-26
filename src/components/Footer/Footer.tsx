import Link from "next/link";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/faq" className={styles.link}>
        Вопросы-ответы
      </Link>
      <Link href="/about" className={styles.link}>
        О нас
      </Link>
    </footer>
  );
};
