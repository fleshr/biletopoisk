import { Container } from "@/components/Container/Container";
import { PhotoIcon } from "@/components/Icons/PhotoIcon";
import { IReview } from "@/types";
import { FunctionComponent } from "react";
import styles from "./styles.module.css";

interface IProps {
  review: IReview;
}

export const ReviewCard: FunctionComponent<IProps> = ({
  review: { name, rating, text },
}) => {
  return (
    <Container className={styles.container}>
      <div className={styles.avatar}>
        <PhotoIcon className={styles.icon} />
      </div>
      <div className={styles.review}>
        <header className={styles.header}>
          <h2>{name}</h2>
          <div className={styles.rating}>
            <span>Оценка:</span>
            <span>{rating}</span>
          </div>
        </header>
        <p className={styles.text}>{text}</p>
      </div>
    </Container>
  );
};
