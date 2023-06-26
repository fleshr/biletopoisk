import {
  FunctionComponent,
  MouseEventHandler,
  useCallback,
  useRef,
} from "react";
import { Container } from "../Container/Container";
import { CloseIcon } from "../Icons/CloseIcon";
import styles from "./styles.module.css";

interface IProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const RemoveTicketsModal: FunctionComponent<IProps> = ({
  onConfirm,
  onCancel,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (
        e.target instanceof Element &&
        !modalRef.current?.contains(e.target)
      ) {
        onCancel();
      }
    },
    [onCancel]
  );

  return (
    <div onClick={handleOverlayClick} className={styles.container}>
      <Container ref={modalRef} className={styles.modal}>
        <header className={styles.header}>
          <h2>Удаление билета</h2>
          <button onClick={onCancel} type="button">
            <CloseIcon className={styles.icon} />
          </button>
        </header>
        <div className={styles.content}>
          Вы уверены, что хотите удалить билет?
        </div>
        <div className={styles.buttons}>
          <button
            onClick={onConfirm}
            className={styles.buttonSolid}
            type="button"
          >
            Да
          </button>
          <button
            onClick={onCancel}
            className={styles.buttonOutline}
            type="button"
          >
            Нет
          </button>
        </div>
      </Container>
    </div>
  );
};
