"use client";

import { ArrowIcon } from "@/components/Icons/ArrowIcon";
import classNames from "classnames";
import {
  FunctionComponent,
  KeyboardEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { SelectContext } from "../SelectContextProvider/SelectContextProvider";
import styles from "./styles.module.css";

interface IProps {
  placeholder?: string;
  onSelect?: (value: string) => void;
}

export const SelectInput: FunctionComponent<IProps> = ({
  placeholder,
  onSelect,
}) => {
  const { expanded, selected, toogle } = useContext(SelectContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onSelect) {
      onSelect(selected.value);
    }
  }, [selected, onSelect]);

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
      onClick={toogle}
      className={classNames(
        styles.input,
        {
          [styles.active]: expanded,
        },
        {
          [styles.selected]: selected.value,
        }
      )}
    >
      <span>{selected.name || placeholder}</span>
      <ArrowIcon
        className={classNames(styles.icon, { [styles.rotate]: expanded })}
      />
    </div>
  );
};
