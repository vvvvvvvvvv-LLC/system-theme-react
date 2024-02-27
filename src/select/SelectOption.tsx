import React from "react";

// the props are exactly the same as the select component
export type SelectOptionProps = React.ComponentProps<"option">;

// Apparently we don't actually need to style this component.
// That's not ideal because we want to make sure the styles
// that are being applied are also isolated to this component.
const Select: React.FC<SelectOptionProps> = ({ children }) => {
  return <option>{children}</option>;
};

export default Select;
