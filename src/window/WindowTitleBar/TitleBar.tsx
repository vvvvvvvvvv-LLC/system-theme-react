import React from "react";
import styles from "../../styles";

import CloseButton from "./CloseButton";
import ResizeButton from "./ResizeButton";

export type TitleBarProps = {
  title: string;
  onClose?: () => void;
  onResize?: () => void;
  inactive?: boolean;
};

const TitleBar: React.FC<TitleBarProps> = ({
  title,
  onClose,
  onResize,
  inactive,
}) => {
  const className = inactive
    ? `${styles["inactive-title-bar"]}`
    : `${styles["title-bar"]}`;
  return (
    <div className={className}>
      <CloseButton
        onClick={onClose ? onClose : () => {}}
        disabled={onClose && !inactive ? false : true}
      />
      <h1 className={styles["title"]}>{title}</h1>
      <ResizeButton
        onClick={onResize ? onResize : () => {}}
        disabled={onResize && !inactive ? false : true}
      />
    </div>
  );
};

export default TitleBar;
