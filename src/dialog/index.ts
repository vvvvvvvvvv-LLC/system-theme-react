import { attachSubComponents } from "../util";

import DialogParent from "./Dialog";
export type { DialogProps } from "./Dialog";

import Text from "./DialogText";
export type { DialogTextProps } from "./DialogText";

export const Dialog = attachSubComponents(
  "Dialog",
  DialogParent,
  { Text },
);

export default Dialog;
