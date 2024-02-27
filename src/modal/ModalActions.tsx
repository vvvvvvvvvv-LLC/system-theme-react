import React from "react";

import styles from "../styles";
import { Button } from "../button";

export type ModalActionsProps = {
  children:
    | React.ReactElement<typeof Button>
    | React.ReactElement<typeof Button>[];
};

const ModalActions: React.FC<ModalActionsProps> = ({ children }) => {
  return (
    <section
      className={`${styles["field-row"]}`}
      style={{ justifyContent: "flex-end" }}
    >
      {children}
    </section>
  );
};

export default ModalActions;
