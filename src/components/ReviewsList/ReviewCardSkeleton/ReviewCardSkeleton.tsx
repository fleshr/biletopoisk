import { Container } from "@/components/Container/Container";
import styles from "./styles.module.css";

export const ReviewCardSkeleton = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.avatar} />
      <div className={styles.review}>
        <header className={styles.header}>
          <div />
          <div className={styles.rating}>
            <div />
            <div />
          </div>
        </header>
        <div />
      </div>
    </Container>
  );
};
