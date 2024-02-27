import React from "react";
import styles from "../../styles";

export type CloseButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

const CloseButton: React.FC<CloseButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      aria-label="Close"
      onClick={onClick}
      className={`${styles["close"]} ${disabled ? styles["hidden"] : ""}`}
      hidden={disabled}
    />
  );
};

export default CloseButton;
