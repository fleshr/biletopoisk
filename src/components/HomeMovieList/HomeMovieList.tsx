"use client";

import { useAppSelector } from "@/redux/hooks";
import { useGetMoviesQuery } from "@/redux/services/moviesApi";
import { filterMovies } from "@/utils";
import { MovieList } from "../MovieList/MovieList";

export const HomeMovieList = () => {
  const filter = useAppSelector((state) => state.filter);
  let { data: movies, isFetching } = useGetMoviesQuery({
    cinemaId: filter.cinema,
  });

  movies = filterMovies(movies || [], filter);

  return (
    <MovieList
      movies={movies}
      isLoading={isFetching}
      placeholder="Странно, но ничего нет"
    />
  );
};
