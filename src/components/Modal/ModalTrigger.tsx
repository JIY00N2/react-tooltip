import { ComponentProps } from "react";
import { useModalContext } from "./context/ModalContext";

export const ModalTrigger = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  const { handleClickOpenModal } = useModalContext();

  return (
    <div
      onClick={handleClickOpenModal}
      {...props}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};
