import { FunctionComponent, ReactNode } from "react";
import styles from "./styles.module.css";

interface IProps {
  title: string;
  children: ReactNode;
}

export const FilterOption: FunctionComponent<IProps> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};
