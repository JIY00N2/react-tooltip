import { ComponentProps } from "react";
import { useModalContext } from "./context/ModalContext";

export const ModalClose = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  const { handleClickCloseModal } = useModalContext();

  return (
    <div
      onClick={handleClickCloseModal}
      {...props}
      style={{ cursor: "pointer", ...style }}
    >
      {children}
    </div>
  );
};
