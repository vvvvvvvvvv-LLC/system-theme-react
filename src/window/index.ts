import WindowParent from "./Window";
export type { WindowProps } from "./Window";

import TitleBar from "./WindowTitleBar";
export type { TitleBarProps } from "./WindowTitleBar";

import DetailsBar from "./WindowDetailsBar";
export type { WindowDetailsBarProps } from "./WindowDetailsBar";

import Pane from "./WindowPane";
export type { WindowPaneProps } from "./WindowPane";

type WindowNamespace = typeof WindowParent & {
  TitleBar: typeof TitleBar;
  DetailsBar: typeof DetailsBar;
  Pane: typeof Pane;
};

const Window = WindowParent as WindowNamespace;
Window.TitleBar = TitleBar;
Window.DetailsBar = DetailsBar;
Window.Pane = Pane;

export default Window;
