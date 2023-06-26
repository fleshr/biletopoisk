import { Container } from "@/components/Container/Container";
import styles from "./styles.module.css";

export const MovieCardSkeleton = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.poster} />
      <div className={styles.movieInfo}>
        <div />
        <div />
      </div>
    </Container>
  );
};
