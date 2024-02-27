import ModelessParent from "./Modeless";
export type { ModelessProps } from "./Modeless";

import Content from "./ModelessContent";
export type { ModelessContentProps } from "./ModelessContent";

import Actions from "./ModelessActions";
export type { ModelessActionsProps } from "./ModelessActions";

type ModelessNamespace = typeof ModelessParent & {
  Content: typeof Content;
  Actions: typeof Actions;
};

const Modeless = ModelessParent as ModelessNamespace;
Modeless.Content = Content;
Modeless.Actions = Actions;

export default Modeless;
