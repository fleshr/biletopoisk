import { MovieInfo } from "@/components/MovieInfo/MovieInfo";
import { ReviewsList } from "@/components/ReviewsList/ReviewsList";
import { IMovieInfo } from "@/types";
import styles from "./styles.module.css";

interface IProps {
  params: { movieId: string };
}

export default function Page({ params: { movieId } }: IProps) {
  return (
    <div className={styles.container}>
      <MovieInfo movieId={movieId} />
      <ReviewsList movieId={movieId} />
    </div>
  );
}

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  const res = await fetch("http://localhost:3001/api/movies");
  const movies: IMovieInfo[] = await res.json();

  const paths = movies.map((movie) => ({
    params: { movieId: movie.id },
  }));

  return { paths, fallback: false };
}
