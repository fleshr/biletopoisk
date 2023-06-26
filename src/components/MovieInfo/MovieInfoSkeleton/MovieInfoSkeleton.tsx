import { Container } from "../../Container/Container";
import styles from "./styles.module.css";

export const MovieInfoSkeleton = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.poster} />
      <div className={styles.movieInfo}>
        <div className={styles.header} />
        <div className={styles.details}>
          <div className={styles.detailsRow}>
            <div />
            <div />
          </div>
          <div className={styles.detailsRow}>
            <div />
            <div />
          </div>
          <div className={styles.detailsRow}>
            <div />
            <div />
          </div>
          <div className={styles.detailsRow}>
            <div />
            <div />
          </div>
        </div>
        <div className={styles.description}>
          <div />
          <div />
          <div />
        </div>
      </div>
    </Container>
  );
};
