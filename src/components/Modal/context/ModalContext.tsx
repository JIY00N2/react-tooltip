import {
  PropsWithChildren,
  RefCallback,
  createContext,
  useContext,
} from "react";

type ModalContextValue = {
  modalContentCallbackRef: RefCallback<HTMLDivElement>;
  open: boolean;
  handleClickOpenModal: VoidFunction;
  handleClickCloseModal: VoidFunction;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export const useModalContext = () => {
  const value = useContext(ModalContext);

  if (value === null) {
    throw Error("Cannot find ModalContext");
  }

  return value;
};

export const ModalContextProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: ModalContextValue }>) => {
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
