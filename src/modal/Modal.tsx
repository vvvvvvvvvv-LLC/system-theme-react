import React from "react";
import styles from "../styles";

import ModalContent from "./ModalContent";
import ModalActions from "./ModalActions";

export type ModalProps = {
  title: string;
  children: [
    React.ReactElement<typeof ModalContent>,
    React.ReactElement<typeof ModalActions>,
  ];
};

const Modal: React.FC<ModalProps> = ({ title, children }) => {
  return (
    <div className={`${styles["modal-dialog"]} ${styles["outer-border"]}`}>
      <div className={`${styles["inner-border"]} `}>
        <div className={`${styles["modal-contents"]}`}>
          <h1 className={`${styles["modal-text"]} ${styles["center"]}`}>
            {title}
          </h1>

          <div style={{ margin: "20px" }}>
            {children.filter((child) => child.type === ModalContent)}
          </div>

          <section
            className={`${styles["field-row"]}`}
            style={{ justifyContent: "flex-end" }}
          >
            {children.filter((child) => child.type === ModalActions)}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Modal;
