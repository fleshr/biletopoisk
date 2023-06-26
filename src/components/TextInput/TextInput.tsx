"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { FunctionComponent, useEffect, useState } from "react";
import styles from "./styles.module.css";

interface IProps {
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const TextInput: FunctionComponent<IProps> = ({
  placeholder,
  onChange,
}) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    if (onChange) {
      onChange(debouncedValue);
    }
  }, [debouncedValue, onChange]);

  return (
    <input
      onChange={(e) => setValue(e.target.value)}
      value={value}
      className={styles.input}
      type="text"
      name=""
      id=""
      placeholder={placeholder}
    />
  );
};
