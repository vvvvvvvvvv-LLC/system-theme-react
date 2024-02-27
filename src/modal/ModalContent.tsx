import React, { Children } from "react";
import styles from "../styles";

export type ModalContentProps = {
  children: React.ReactNode;
};

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return Children.map(children, (child) => {
    return <div className={`${styles["field-row"]}`}>{child}</div>;
  });
}

export default ModalContent;
