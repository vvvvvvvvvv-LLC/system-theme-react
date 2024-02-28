import React from "react";
import MenuBarMenu from "./MenuBarMenu";
import "@sakun/system.css";
import styles from "../styles";

export type MenuBarItemProps = {
  children?: React.ReactNode | [React.ReactNode, React.ReactElement<typeof MenuBarMenu>];
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  divider?: boolean;
};


const MenuBarItem: React.FC<MenuBarItemProps> = ({ onClick, divider, children }) => {
  const ariaHasPopup = React.Children.toArray(children).find((child) => {
    // if the child is an object with the key 'type' and the type is MenuBarMenu then return true
    if (
      (typeof child === "object") && 
      (child && 'type' in child) && 
      (child.type === MenuBarMenu)
    ) {
      return true;
    } else {
      return false;
    }
  }) !== undefined;

  return (
    <li className={`${divider ? styles["divider"] : ""}`} role="menu-item" aria-haspopup={ariaHasPopup} tabIndex={0} onClick={onClick}>
      {children}
    </li>
  );
};

export default MenuBarItem;
