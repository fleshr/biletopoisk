"use client";

import { decrement, increment } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FunctionComponent, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { MinusIcon } from "../Icons/MinusIcon";
import { PlusIcon } from "../Icons/PlusIcon";
import { RemoveTicketsModal } from "../RemoveTicketsModal/RemoveTicketsModal";
import { Button } from "./Button/Button";
import { Counter } from "./Counter/Counter";
import styles from "./styles.module.css";

interface IProps {
  movieId: string;
  withRemoveModal?: boolean;
}

export const TicketsCount: FunctionComponent<IProps> = ({
  movieId,
  withRemoveModal = false,
}) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const ticketsCount = useAppSelector((state) => state.cart[movieId]) || 0;
  const dispatch = useAppDispatch();

  const decrease = useCallback(() => {
    if (withRemoveModal && ticketsCount === 1) {
      setIsModalOpened(true);
    } else {
      dispatch(decrement(movieId));
    }
  }, [dispatch, movieId, ticketsCount, withRemoveModal]);

  const increase = useCallback(() => {
    dispatch(increment(movieId));
  }, [dispatch, movieId]);

  const handleModalConfirm = useCallback(() => {
    setIsModalOpened(false);
    dispatch(decrement(movieId));
  }, [dispatch, movieId]);

  const handleModalCancel = useCallback(() => {
    setIsModalOpened(false);
  }, []);

  return (
    <div className={styles.ticketsCount}>
      <Button
        disabled={ticketsCount <= 0}
        onClick={decrease}
        ariaLabel="Уменьшить количество билетов"
      >
        <MinusIcon />
      </Button>
      <Counter>{ticketsCount}</Counter>
      <Button
        disabled={ticketsCount >= 30}
        onClick={increase}
        ariaLabel="Увеличить количество билетов"
      >
        <PlusIcon />
      </Button>
      {withRemoveModal && isModalOpened
        ? createPortal(
            <RemoveTicketsModal
              onConfirm={handleModalConfirm}
              onCancel={handleModalCancel}
            />,
            document.body
          )
        : null}
    </div>
  );
};
