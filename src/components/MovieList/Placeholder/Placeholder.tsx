import { FunctionComponent } from "react";
import styles from "./styles.module.css";

interface IProps {
  text: string;
}

export const Placeholder: FunctionComponent<IProps> = ({ text }) => {
  return <div className={styles.placeholder}>{text}</div>;
};
