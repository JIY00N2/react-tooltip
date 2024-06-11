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
  const [open, setOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (defaultOpen) {
      setOpen(true);
    }
  }, [defaultOpen]);

  const handleClickOpenModal = useCallback(() => setOpen(true), []);
  const handleClickCloseModal = useCallback(() => setOpen(false), []);
  const modalContentCallbackRef: RefCallback<HTMLDivElement> = useCallback(
    (node) => setModalContent(node),
    [],
  );

  const closeModalEscape = useCallback(() => {
    if (!closeOnEscape) {
      return;
    }
    setOpen(false);
  }, [closeOnEscape]);

  useKeyDown("Escape", closeModalEscape);

  const closeModalOnOutsideClick = useCallback(() => {
    if (!closeOnOutsideClick) {
      return;
    }
    setOpen(false);
  }, [closeOnOutsideClick]);

  useOutsideClick<HTMLDivElement>(modalContent, closeModalOnOutsideClick);

  return (
    <ModalContextProvider
      value={{
        modalContentRef: modalContentCallbackRef,
        open,
        handleClickOpenModal,
        handleClickCloseModal,
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
