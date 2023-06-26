"use client";

import {
  FunctionComponent,
  ReactNode,
  createContext,
  useCallback,
  useState,
} from "react";

interface IProps {
  children: ReactNode;
}

interface ISelected {
  name: string;
  value: string;
}

const initialState = {
  expanded: false,
  toogle: () => {},
  selected: { name: "", value: "" },
  select: (selected: ISelected) => {},
};

export const SelectContext = createContext(initialState);

export const SelectContextProvider: FunctionComponent<IProps> = ({
  children,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState({ name: "", value: "" });

  const toogle = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  const select = useCallback((selected: ISelected) => {
    setExpanded(false);
    setSelected(selected);
  }, []);

  return (
    <SelectContext.Provider value={{ expanded, toogle, selected, select }}>
      {children}
    </SelectContext.Provider>
  );
};
