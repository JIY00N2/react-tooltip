import {
  PropsWithChildren,
  RefCallback,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ModalTrigger } from "./ModalTrigger";
import { ModalContent } from "./ModalContent";
import { ModalClose } from "./ModalClose";
import { ModalOverlay } from "./ModalOverlay";
import { ModalContextProvider } from "./context/ModalContext";
import { ModalPortal } from "./ModalPortal";
import { useKeyDown } from "./hooks/useKeyDown";
import { useOutsideClick } from "./hooks/useOutsideClick";
import { useBoolean } from "../../hooks/useBoolean";

type ModalProps = PropsWithChildren<{
  defaultOpen?: boolean;
  closeOnEscape?: boolean;
  closeOnOutsideClick?: boolean;
}>;

export const Modal = ({
  defaultOpen = false,
  closeOnEscape = false,
  closeOnOutsideClick = false,
  children,
}: ModalProps) => {
  const { value: isOpen, setTrue: open, setFalse: close } = useBoolean();
  const [modalContent, setModalContent] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (defaultOpen) {
      open();
    }
  }, [defaultOpen, open]);

  const modalContentCallbackRef: RefCallback<HTMLDivElement> = useCallback(
    (node) => setModalContent(node),
    [],
  );

  const closeModalEscape = useCallback(() => {
    if (!closeOnEscape) {
      return;
    }
    close();
  }, [closeOnEscape, close]);

  useKeyDown("Escape", closeModalEscape);

  const closeModalOnOutsideClick = useCallback(() => {
    if (!closeOnOutsideClick) {
      return;
    }
    close();
  }, [closeOnOutsideClick, close]);

  useOutsideClick<HTMLDivElement>(modalContent, closeModalOnOutsideClick);

  return (
    <ModalContextProvider
      value={{
        modalContentRef: modalContentCallbackRef,
        isOpen,
        open,
        close,
      }}
    >
      {children}
    </ModalContextProvider>
  );
};

Modal.Trigger = ModalTrigger;
Modal.Portal = ModalPortal;
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Close = ModalClose;
