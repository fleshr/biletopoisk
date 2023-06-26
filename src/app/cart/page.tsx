import { CartFooter } from "@/components/CartFooter/CartFooter";
import { CartMovieList } from "@/components/CartMovieList/CartMovieList";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <CartMovieList />
      <CartFooter />
    </div>
  );
}
