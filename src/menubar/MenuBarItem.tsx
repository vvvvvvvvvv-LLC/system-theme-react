import React from "react";
import MenuBarMenu from "./MenuBarMenu";
import styles from "../styles";

export type MenuBarItemProps = {
  title: string;
  children?: React.ReactNode | React.ReactElement<typeof MenuBarMenu>;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
};


const MenuBarItem: React.FC<MenuBarItemProps> = ({ title, onClick, children }) => {
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
    <li role={`${styles["menu-item"]}`} aria-haspopup={ariaHasPopup} onClick={onClick}>
      {title}
      {children}
    </li>
  );
};

export default MenuBarItem;
