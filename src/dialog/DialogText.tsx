import React from "react";
import styles from "../styles";

export type DialogTextProps = {
  children?: string;
};

const DialogText: React.FC<DialogTextProps> = ({
  children
}) => {
  return (
    <p className={styles["dialog-text"]}>{children}</p>
  );
};

export default DialogText;
