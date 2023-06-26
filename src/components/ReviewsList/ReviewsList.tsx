"use client";

import { useGetReviewsByMovieIdQuery } from "@/redux/services/reviewsApi";
import { FunctionComponent } from "react";
import { ReviewCard } from "./ReviewCard/ReviewCard";
import { ReviewCardSkeleton } from "./ReviewCardSkeleton/ReviewCardSkeleton";
import styles from "./styles.module.css";

interface IProps {
  movieId: string;
}

export const ReviewsList: FunctionComponent<IProps> = ({ movieId }) => {
  const { data: reviews, isLoading } = useGetReviewsByMovieIdQuery(movieId);

  return (
    <div className={styles.reviews}>
      <h2 className="sr-only">Список отзывов</h2>
      {isLoading &&
        Array(2)
          .fill(0)
          .map((_, index) => <ReviewCardSkeleton key={index} />)}

      {!!reviews &&
        !isLoading &&
        reviews?.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
    </div>
  );
};
