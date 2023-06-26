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

const initialState = {
  expanded: false,
  toogle: () => {},
};

export const AccordionContext = createContext(initialState);

export const AccordionContextProvider: FunctionComponent<IProps> = ({
  children,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toogle = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  return (
    <AccordionContext.Provider value={{ expanded, toogle }}>
      {children}
    </AccordionContext.Provider>
  );
};
