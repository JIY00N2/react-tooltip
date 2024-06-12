import { ComponentProps } from "react";
import { useModalContext } from "./context/ModalContext";

export const ModalTrigger = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  const { open } = useModalContext();

  return (
    <div
      onClick={open}
      {...props}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};
