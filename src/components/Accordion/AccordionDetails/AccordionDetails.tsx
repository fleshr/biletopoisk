"use client";

import classNames from "classnames";
import { FunctionComponent, ReactNode, useContext } from "react";
import { AccordionContext } from "../AccordionContextProvider/AccordionContextProvider";
import styles from "./styles.module.css";

interface IProps {
  children: ReactNode;
}

export const AccordionDetails: FunctionComponent<IProps> = ({ children }) => {
  const { expanded } = useContext(AccordionContext);

  return (
    <div className={classNames(styles.container, { [styles.hide]: !expanded })}>
      {children}
    </div>
  );
};
