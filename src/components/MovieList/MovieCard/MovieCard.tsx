import { Container } from "@/components/Container/Container";
import { TicketsCount } from "@/components/TicketsCount/TicketsCount";
import { GENRES } from "@/constants/genres";
import { IMovieInfo } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { RemoveButton } from "./RemoveButton/RemoveButton";
import styles from "./styles.module.css";

interface IProps {
  movie: IMovieInfo;
  withRemove: boolean;
}

export const MovieCard: FunctionComponent<IProps> = ({
  movie: { posterUrl, title, genre, id },
  withRemove,
}) => {
  return (
    <Container className={styles.card}>
      <Image
        className={styles.poster}
        src={posterUrl}
        alt={title}
        width={100}
        height={120}
      />
      <div className={styles.movieInfo}>
        <Link href={`/movie/${id}`}>
          <h3>{title}</h3>
        </Link>
        <span>{GENRES[genre]}</span>
      </div>
      <div className={styles.controls}>
        <TicketsCount movieId={id} withRemoveModal={withRemove} />
        {withRemove && <RemoveButton movieId={id} />}
      </div>
    </Container>
  );
};
