import AlertParent from "./Alert";
export type { AlertProps } from "./Alert";

import Icon from "./AlertIcon";
export type { AlertIconProps } from "./AlertIcon";

import Text from "./AlertText";
export type { AlertTextProps } from "./AlertText";

import Actions from "./AlertActions";
export type { AlertActionsProps } from "./AlertActions";

type AlertNamespace = typeof AlertParent & {
  Icon: typeof Icon;
  Text: typeof Text;
  Actions: typeof Actions;
};

const Alert = AlertParent as AlertNamespace;
Alert.Icon = Icon;
Alert.Text = Text;
Alert.Actions = Actions;

export { Alert };
