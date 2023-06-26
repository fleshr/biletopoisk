import { FunctionComponent, MouseEventHandler, ReactNode } from "react";
import styles from "./styles.module.css";

interface IProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  ariaLabel?: string;
}

export const Button: FunctionComponent<IProps> = ({
  children,
  onClick,
  ariaLabel,
  disabled = false,
}) => {
  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      className={styles.button}
      type="button"
    >
      {children}
    </button>
  );
};
