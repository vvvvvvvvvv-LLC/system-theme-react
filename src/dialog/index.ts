import DialogParent from "./Dialog";
export type { DialogProps } from "./Dialog";

import Text from "./DialogText";
export type { DialogTextProps } from "./DialogText";

type DialogNamespace = typeof DialogParent & {
  Text: typeof Text;
};

const Dialog = DialogParent as DialogNamespace;
Dialog.Text = Text;

export { Dialog };
