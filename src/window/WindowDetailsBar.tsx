import React from "react";
import styles from "../styles";

export type WindowDetailsBarProps = {
  children: React.ReactNode,
};

const WindowDetailsBar: React.FC<WindowDetailsBarProps> = ({ children }) => {

  const wrappedChildren = React.Children.map(children, (child, i) => {
    return (
      <span key={i}>{child}</span>
    );
  });

  return (
    <div className={`${styles["details-bar"]}`}>
      { wrappedChildren }
    </div>
  );
}


export default WindowDetailsBar;