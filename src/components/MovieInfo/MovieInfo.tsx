"use client";

import { GENRES } from "@/constants/genres";
import { useGetMovieByIdQuery } from "@/redux/services/moviesApi";
import Image from "next/image";
import { FunctionComponent } from "react";
import { Container } from "../Container/Container";
import { TicketsCount } from "../TicketsCount/TicketsCount";
import { MovieInfoSkeleton } from "./MovieInfoSkeleton/MovieInfoSkeleton";
import styles from "./styles.module.css";

interface IProps {
  movieId: string;
}

export const MovieInfo: FunctionComponent<IProps> = ({ movieId }) => {
  const { data: movie, isLoading } = useGetMovieByIdQuery(movieId);

  if (isLoading) return <MovieInfoSkeleton />;
  if (!movie) return null;

  const {
    posterUrl,
    title,
    id,
    description,
    genre,
    releaseYear,
    rating,
    director,
  } = movie;

  return (
    <Container className={styles.container}>
      <Image
        className={styles.poster}
        src={posterUrl}
        alt={title}
        width={400}
        height={500}
      />
      <div className={styles.movieInfo}>
        <header className={styles.header}>
          <h1>{title}</h1>
          <TicketsCount movieId={id} />
        </header>
        <div className={styles.details}>
          <div className={styles.detailsRow}>
            <h3>Жанр:</h3>
            <span>{GENRES[genre]}</span>
          </div>
          <div className={styles.detailsRow}>
            <h3>Год выпуска:</h3>
            <span>{releaseYear}</span>
          </div>
          <div className={styles.detailsRow}>
            <h3>Рейтинг:</h3>
            <span>{rating}</span>
          </div>
          <div className={styles.detailsRow}>
            <h3>Режиссер:</h3>
            <span>{director}</span>
          </div>
        </div>
        <div className={styles.description}>
          <h2>Описание</h2>
          <p>{description}</p>
        </div>
      </div>
    </Container>
  );
};
