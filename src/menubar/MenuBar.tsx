import React from "react";
import Item from "./MenuBarItem";
import styles from "../styles";

export type MenuBarProps = {
  children: React.ReactElement<typeof Item> | React.ReactElement<typeof Item>[];
};

const MenuBar: React.FC<MenuBarProps> = ({ children }) => {
  return (
    <ul role={`${styles["menubar"]}`}>
      {children}
    </ul>
  );
};

export default MenuBar;
