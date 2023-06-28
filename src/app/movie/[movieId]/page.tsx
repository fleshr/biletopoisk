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

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3001/api/movies");
  const movies: IMovieInfo[] = await res.json();

  return movies.map((post) => ({
    movieId: post.id,
  }));
}
