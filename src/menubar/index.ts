import MenuBarParent from "./MenuBar";
export type { MenuBarProps } from "./MenuBar";

import Menu from "./MenuBarMenu";
export type { MenuBarMenuProps } from "./MenuBarMenu";

import Item from "./MenuBarItem";
export type { MenuBarItemProps } from "./MenuBarItem";

type MenuBarNamespace = typeof MenuBarParent & {
  Item: typeof Item;
  Menu: typeof Menu;
};

const MenuBar = MenuBarParent as MenuBarNamespace;
MenuBar.Item = Item;
MenuBar.Menu = Menu;

export { MenuBar };
