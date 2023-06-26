import classNames from "classnames";
import { ReactNode, forwardRef } from "react";
import styles from "./styles.module.css";

interface IProps {
  className?: string;
  children?: ReactNode;
}

export const Container = forwardRef<HTMLDivElement, IProps>(function Container(
  { children, className },
  ref
) {
  return (
    <div ref={ref} className={classNames(styles.container, className)}>
      {children}
    </div>
  );
});
