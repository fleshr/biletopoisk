"use client";

import { KeyboardEvent, forwardRef, useCallback, useContext } from "react";
import { SelectContext } from "../SelectContextProvider/SelectContextProvider";
import styles from "./styles.module.css";

interface IProps {
  value: string;
  children: string;
  onSelect?: (value: string) => void;
}

export const SelectOption = forwardRef<HTMLDivElement, IProps>(
  function SelectOption({ value, children }, ref) {
    const { select } = useContext(SelectContext);

    const handleOptionClick = useCallback(() => {
      select({ name: value ? children : "", value });
    }, [children, select, value]);

    const handleOptionKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === "Space" || e.code === "Enter") {
          e.preventDefault();
          if (e.target instanceof HTMLDivElement) e.target.focus();
        }
      },
      []
    );

    return (
      <div
        ref={ref}
        tabIndex={0}
        role="button"
        onKeyDown={handleOptionKeyDown}
        onClick={handleOptionClick}
        className={styles.option}
      >
        {children}
      </div>
    );
  }
);
