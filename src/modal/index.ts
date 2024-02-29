import ModalParent from "./Modal";
export type { ModalProps } from "./Modal";

import Content from "./ModalContent";
export type { ModalContentProps } from "./ModalContent";

import Actions from "./ModalActions";
export type { ModalActionsProps } from "./ModalActions";

type ModalNamespace = typeof ModalParent & {
  Content: typeof Content;
  Actions: typeof Actions;
};

const Modal = ModalParent as ModalNamespace;
Modal.Content = Content;
Modal.Actions = Actions;

export { Modal };
