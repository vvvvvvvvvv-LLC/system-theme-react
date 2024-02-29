import React from "react";
import styles from "../styles";

export type DialogProps = {
  children?: React.ReactNode;
};

const Dialog: React.FC<DialogProps> = ({ children }) => {
  const className = `${styles["standard-dialog"]} ${styles["center"]}`;
  return <div className={className}>{children}</div>;
};

export default Dialog;
