import React from "react";
import { DialogTextProps } from "./DialogText";
import styles from "../styles";

export type DialogProps = {
  children?:
    | React.ReactElement<DialogTextProps>
    | React.ReactElement<DialogTextProps>[];
};

const Dialog: React.FC<DialogProps> = ({ children }) => {
  const className = `${styles["standard-dialog"]} ${styles["center"]} ${styles["scale-down"]}`;
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Dialog;
