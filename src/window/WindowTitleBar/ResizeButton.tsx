import React from "react";
import styles from "../../styles";

export type ResizeButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

const ResizeButton: React.FC<ResizeButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      aria-label="Resize"
      onClick={onClick}
      className={`${styles["resize"]} ${disabled ? styles["hidden"] : ""}`}
      hidden={disabled}
    />
  );
};

export default ResizeButton;
