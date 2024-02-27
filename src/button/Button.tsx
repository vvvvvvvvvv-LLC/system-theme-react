import React from "react";
import styles from "../styles";

export type ButtonProps = React.ComponentProps<"button"> & {
  primary?: boolean;
};

const Button: React.FC<ButtonProps> = ({ primary, children, ...props }) => {
  let className = `${styles["btn"]}`;
  if (primary && !props.disabled) {
    className += ` ${styles["btn-default"]}`;
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
