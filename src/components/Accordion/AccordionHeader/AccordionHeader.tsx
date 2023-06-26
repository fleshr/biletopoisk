"use client";

import { ArrowIcon } from "@/components/Icons/ArrowIcon";
import classNames from "classnames";
import { FunctionComponent, ReactNode, useContext } from "react";
import { AccordionContext } from "../AccordionContextProvider/AccordionContextProvider";
import styles from "./styles.module.css";

interface IProps {
  children: ReactNode;
}

export const AccordionHeader: FunctionComponent<IProps> = ({ children }) => {
  const { expanded, toogle } = useContext(AccordionContext);

  return (
    <div
      onClick={toogle}
      className={classNames(styles.container, { [styles.expanded]: expanded })}
    >
      <div className={styles.children}>{children}</div>
      <ArrowIcon
        className={classNames(styles.icon, { [styles.rotate]: expanded })}
      />
    </div>
  );
};
