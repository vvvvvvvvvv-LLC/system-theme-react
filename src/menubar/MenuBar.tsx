import React from "react";
import Item from "./MenuBarItem";
import "@sakun/system.css";

export type MenuBarProps = {
  children: React.ReactElement<typeof Item> | React.ReactElement<typeof Item>[];
};

const MenuBar: React.FC<MenuBarProps> = ({ children }) => {
  return <ul role="menu-bar">{children}</ul>;
};

export default MenuBar;
