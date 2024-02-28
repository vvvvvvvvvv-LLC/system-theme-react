import React from "react";
import Item from "./MenuBarItem";
import styles from "../styles";

export type MenuBarMenuProps = {
  children: React.ReactElement<typeof Item> | React.ReactElement<typeof Item>[];
};

const MenuBarMenu: React.FC<MenuBarMenuProps> = ({ children }) => {
  return (
    <ul role={`${styles["menu"]}`}>
      {children}
    </ul>
  );
};

export default MenuBarMenu;
