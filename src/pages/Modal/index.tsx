import { Modal } from "../../components/Modal/Modal";
import styles from "./Modal.module.css";

export default function ModalPage() {
  return (
    <div className={styles.layout}>
      <Modal
        closeOnEscape
        closeOnOutsideClick
      >
        <Modal.Trigger>
          <button>모달 버튼</button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Overlay className={styles.overlay} />
          <Modal.Content className={styles.content}>
            <h1 style={{ fontSize: "20px" }}>이건 모달 제목입니다!</h1>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span>이건 모달 내용입니다!</span>
              <span>이건 모달 내용입니다!</span>
            </div>
            <Modal.Close className={styles.close}>닫기</Modal.Close>
          </Modal.Content>
        </Modal.Portal>
      </Modal>
    </div>
  );
}
