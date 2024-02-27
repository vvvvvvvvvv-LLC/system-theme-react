import React, { MouseEventHandler } from "react";
import styles from "../styles";

export type ButtonProps = {
  primary?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function Button({
  children,
  primary,
  disabled,
  onClick,
}: ButtonProps) {
  let className = `${styles["btn"]}`;
  if (primary && !disabled) {
    className += ` ${styles["btn-default"]}`;
  }
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
