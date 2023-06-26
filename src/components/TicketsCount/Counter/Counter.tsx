import { FunctionComponent, ReactNode } from "react";
import styles from "./styles.module.css";

interface IProps {
  children?: ReactNode;
}

export const Counter: FunctionComponent<IProps> = ({ children }) => {
  return <span className={styles.counter}>{children}</span>;
};
