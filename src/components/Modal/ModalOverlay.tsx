import { ComponentProps } from "react";
import { useModalContext } from "./context/ModalContext";

export const ModalOverlay = ({ style, ...props }: ComponentProps<"div">) => {
  const { open } = useModalContext();

  return (
    <>
      {open && (
        <div
          {...props}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            position: "fixed",
            inset: "0px",
            ...style,
          }}
        />
      )}
    </>
  );
};
