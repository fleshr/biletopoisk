import { IReview } from "@/types";
import { api } from "./api";

export const reviewsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query<IReview[], void>({ query: () => "reviews" }),
    getReviewsByMovieId: builder.query<IReview[], string>({
      query: (movieId) => `reviews?movieId=${movieId}`,
    }),
  }),
});

export const { useGetReviewsQuery, useGetReviewsByMovieIdQuery } = reviewsApi;
