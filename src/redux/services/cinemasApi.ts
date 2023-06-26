import { ICinema } from "@/types";
import { api } from "./api";

export const cinemasApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCinemas: builder.query<ICinema[], void>({
      query: () => "cinemas",
    }),
  }),
});

export const { useGetCinemasQuery } = cinemasApi;
