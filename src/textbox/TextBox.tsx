import React from "react";
import "@sakun/system.css";

export type TextBoxProps = React.ComponentProps<"input"> & {
  label: string;
};

const TextBox: React.FC<TextBoxProps> = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input {...props} />
      <br />
    </div>
  );
};

export default TextBox;
