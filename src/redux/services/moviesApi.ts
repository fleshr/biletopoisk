import { IMovieInfo } from "@/types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { api } from "./api";

export const moviesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMovieById: builder.query<IMovieInfo, string>({
      query: (movieId) => `movie?movieId=${movieId}`,
    }),
    getMoviesFromCinema: builder.query<IMovieInfo[], string>({
      query: (cinemaId) => `movies?cinemaId=${cinemaId}`,
    }),
    getMovies: builder.query<IMovieInfo[], { cinemaId?: string }>({
      query: (args) => {
        if (args.cinemaId) return `movies?cinemaId=${args.cinemaId}`;
        return "movies";
      },
    }),
    getMoviesByIds: builder.query<IMovieInfo[], string[]>({
      queryFn: async (ids, _, __, fetchWithBQ) => {
        const qwe = ids.map((id) => fetchWithBQ(`movie?movieId=${id}`));
        try {
          const res = await Promise.all(qwe);
          const data = res.map((item) => item.data);
          return { data: data as IMovieInfo[] };
        } catch (error) {
          console.log(error);
          return { error: error as FetchBaseQueryError };
        }
      },
    }),
  }),
});

export const {
  useGetMovieByIdQuery,
  useGetMoviesQuery,
  useGetMoviesByIdsQuery,
} = moviesApi;
