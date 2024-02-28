import React from "react";
import "@sakun/system.css";

export type RadioButtonProps = Omit<React.ComponentProps<"input">, "type"> & {
  label: string;
};

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  return (
    <div>
      <input {...props} type="radio" />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default RadioButton;
