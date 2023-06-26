"use client";

import classNames from "classnames";
import {
  FunctionComponent,
  ReactNode,
  RefObject,
  useCallback,
  useContext,
} from "react";
import { createPortal } from "react-dom";
import { SelectContext } from "../SelectContextProvider/SelectContextProvider";
import { SelectOption } from "../SelectOption/SelectOption";
import styles from "./styles.module.css";

interface IProps {
  children: ReactNode;
  parentRef: RefObject<HTMLDivElement>;
}

export const SelectOptions: FunctionComponent<IProps> = ({
  children,
  parentRef,
}) => {
  const { expanded } = useContext(SelectContext);

  const focusElement = useCallback((instance: HTMLDivElement | null) => {
    if (instance) instance.focus();
  }, []);

  return expanded
    ? createPortal(
        <div
          style={{
            top: `${parentRef.current?.getBoundingClientRect().top}px`,
            left: `${parentRef.current?.getBoundingClientRect().left}px`,
            width: `${parentRef.current?.getBoundingClientRect().width}px`,
          }}
          className={classNames(styles.options, { [styles.hide]: !expanded })}
        >
          <SelectOption ref={focusElement} value="">
            Не выбран
          </SelectOption>
          {children}
        </div>,
        document.body
      )
    : null;
};
