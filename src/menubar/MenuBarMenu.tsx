import React from "react";
import Item from "./MenuBarItem";
import "@sakun/system.css";

export type MenuBarMenuProps = {
  children: React.ReactElement<typeof Item> | React.ReactElement<typeof Item>[];
};

const MenuBarMenu: React.FC<MenuBarMenuProps> = ({ children }) => {
  return (
    <ul role="menu">
      {children}
    </ul>
  );
};

export default MenuBarMenu;
