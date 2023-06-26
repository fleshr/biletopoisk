"use client";

import { store } from "@/redux/store";
import { FunctionComponent, ReactNode } from "react";
import { Provider } from "react-redux";

interface IProps {
  children: ReactNode;
}

export const StoreProvider: FunctionComponent<IProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
