import { IFilter, IMovieInfo } from "@/types";

export const filterMovies = (movies: IMovieInfo[], filter: IFilter) => {
  return movies?.filter((movie) => {
    const isNameMatch = filter.name
      ? movie.title.toLowerCase().includes(filter.name.toLowerCase())
      : true;

    const isGenreMatch = filter.genre ? movie.genre === filter.genre : true;

    return isNameMatch && isGenreMatch;
  });
};
