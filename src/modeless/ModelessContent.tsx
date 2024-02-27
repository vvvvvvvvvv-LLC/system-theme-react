import React, { Children } from "react";
import styles from "../styles";

export type ModelessContentProps = {
  children: React.ReactNode;
};

const ModelessContent: React.FC<ModelessContentProps> = ({ children }) => {
  let content: React.ReactNode[] = [];
  Children.forEach(children, (child, i) => {
    content.push(
      <div
        key={i}
        className={`${styles["field-row"]}`}
        style={{ justifyContent: "flex-start", margin: "10px" }}
      >
        {child}
      </div>,
    );
  });

  return content;
};

export default ModelessContent;
