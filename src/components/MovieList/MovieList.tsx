import { IMovieInfo } from "@/types";
import { FunctionComponent } from "react";
import { MovieCard } from "./MovieCard/MovieCard";
import { MovieCardSkeleton } from "./MovieCardSkeleton/MovieCardSkeleton";
import { Placeholder } from "./Placeholder/Placeholder";
import styles from "./styles.module.css";

interface IProps {
  movies: IMovieInfo[];
  isLoading?: boolean;
  placeholder?: string;
  withRemove?: boolean;
}

export const MovieList: FunctionComponent<IProps> = ({
  movies,
  isLoading,
  placeholder,
  withRemove = false,
}) => {
  return (
    <section className={styles.container}>
      <h2 className="sr-only">Список фильмов</h2>
      {isLoading &&
        Array(3)
          .fill(0)
          .map((_, index) => <MovieCardSkeleton key={index} />)}

      {!movies.length && !isLoading && (
        <Placeholder text={placeholder || "Пусто"} />
      )}

      {!!movies.length &&
        !isLoading &&
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} withRemove={withRemove} />
        ))}
    </section>
  );
};
