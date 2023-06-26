import { FunctionComponent, ReactNode } from "react";
import { AccordionContextProvider } from "./AccordionContextProvider/AccordionContextProvider";
import styles from "./styles.module.css";

interface IProps {
  children: ReactNode;
}

export const Accordion: FunctionComponent<IProps> = ({ children }) => {
  return (
    <AccordionContextProvider>
      <div className={styles.container}>{children}</div>
    </AccordionContextProvider>
  );
};
