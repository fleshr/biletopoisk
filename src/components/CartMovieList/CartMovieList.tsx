"use client";

import { useAppSelector } from "@/redux/hooks";
import { useGetMoviesByIdsQuery } from "@/redux/services/moviesApi";
import { MovieList } from "../MovieList/MovieList";

export const CartMovieList = () => {
  const cart = useAppSelector((state) => state.cart);
  const { data: movies, isFetching } = useGetMoviesByIdsQuery(
    Object.keys(cart)
  );

  return (
    <MovieList
      movies={movies || []}
      isLoading={isFetching}
      placeholder="Корзина пуста"
      withRemove
    />
  );
};
