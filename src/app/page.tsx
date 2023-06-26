import { Filter } from "@/components/Filter/Filter";
import { HomeMovieList } from "@/components/HomeMovieList/HomeMovieList";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className="sr-only">Список фильмов на которые можно купить белеты</h1>
      <Filter />
      <HomeMovieList />
    </div>
  );
}
