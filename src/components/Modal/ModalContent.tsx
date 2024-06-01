import { useModalContext } from "./context/ModalContext";
import { CSSProperties, ComponentProps } from "react";

export const ModalContent = ({
  children,
  style,
  ...props
}: ComponentProps<"div">) => {
  const { modalContentCallbackRef, open } = useModalContext();

  const defaultModalContentStyles: CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    animation:
      "modalOpen 150ms cubic-bezier(0.16, 1, 0.3, 1) 1 normal none running",
    boxShadow:
      " rgba(14, 18, 22, 0.35) 0px 10px 38px -10px, rgba(14, 18, 22, 0.2) 0px 10px 20px -15px",
  };

  return (
    <>
      {open && (
        <div
          ref={modalContentCallbackRef}
          {...props}
          style={{
            ...defaultModalContentStyles,
            ...style,
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};
