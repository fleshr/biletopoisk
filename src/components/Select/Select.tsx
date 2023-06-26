"use client";

import { FunctionComponent, ReactNode, useRef } from "react";
import { SelectContextProvider } from "./SelectContextProvider/SelectContextProvider";
import { SelectInput } from "./SelectInput/SelectInput";
import { SelectOptions } from "./SelectOptions/SelectOptions";
import styles from "./styles.module.css";

interface IProps {
  children: ReactNode;
  placeholder?: string;
  onSelect?: (value: string) => void;
}

export const Select: FunctionComponent<IProps> = ({
  placeholder,
  onSelect,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <SelectContextProvider>
      <div ref={ref} className={styles.container}>
        <SelectInput placeholder={placeholder} onSelect={onSelect} />
        <SelectOptions parentRef={ref}>{children}</SelectOptions>
      </div>
    </SelectContextProvider>
  );
};
