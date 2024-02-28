import React from "react";
import "@sakun/system.css";

export type CheckBoxProps = Omit<React.ComponentProps<"input">, "type"> & {
  label: string;
};

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  return (
    <div>
      <input {...props} type="checkbox" />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default CheckBox;
