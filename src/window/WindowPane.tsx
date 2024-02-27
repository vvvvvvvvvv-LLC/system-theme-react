import React from "react";
import styles from "../styles";

export type WindowPaneProps = {
  children: React.ReactNode,
};

const WindowPane: React.FC<WindowPaneProps> = ({ children }) => {
  return (
    <div className={`${styles["window-pane"]}`}>
      {children}
    </div>
  );
};

export default WindowPane;
