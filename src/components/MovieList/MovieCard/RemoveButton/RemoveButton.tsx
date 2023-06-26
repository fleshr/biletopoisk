"use client";

import { remove } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FunctionComponent, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "../../../Icons/CloseIcon";
import { RemoveTicketsModal } from "../../../RemoveTicketsModal/RemoveTicketsModal";
import styles from "./styles.module.css";

interface IProps {
  movieId: string;
}

export const RemoveButton: FunctionComponent<IProps> = ({ movieId }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const dispatch = useAppDispatch();

  const handleModalConfirm = useCallback(() => {
    dispatch(remove(movieId));
    setIsModalOpened(false);
  }, [dispatch, movieId]);

  const handleModalCancel = useCallback(() => {
    setIsModalOpened(false);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsModalOpened(true)}
        className={styles.button}
        type="button"
      >
        <CloseIcon />
      </button>
      {isModalOpened &&
        createPortal(
          <RemoveTicketsModal
            onConfirm={handleModalConfirm}
            onCancel={handleModalCancel}
          />,
          document.body
        )}
    </>
  );
};
