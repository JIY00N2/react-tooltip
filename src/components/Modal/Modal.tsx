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

type ModalProps = {
  forceClose?: boolean;
};

export const Modal = ({
  forceClose = false,
  children,
}: PropsWithChildren<ModalProps>) => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<HTMLDivElement | null>(null);

  const handleClickOpenModal = useCallback(() => setOpen(true), []);
  const handleClickCloseModal = useCallback(() => setOpen(false), []);
  const modalContentCallbackRef: RefCallback<HTMLDivElement> = useCallback(
    (node) => setModalContent(node),
    [],
  );

  useEffect(() => {
    if (forceClose) {
      return;
    }

    const closeModalOnOutsideClick = (event: MouseEvent) => {
      if (!(event.target instanceof HTMLDivElement)) {
        return;
      }
      if (!modalContent || modalContent.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    const closeModalEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeModalOnOutsideClick);
    document.addEventListener("keydown", closeModalEscape);

    return () => {
      document.removeEventListener("mousedown", closeModalOnOutsideClick);
      document.removeEventListener("keydown", closeModalEscape);
    };
  }, [modalContent, forceClose]);

  return (
    <ModalContextProvider
      value={{
        modalContentCallbackRef,
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
