import React, { FC } from "react";
import { Button, ButtonProps } from "..";

const Example: FC<ButtonProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button {...props}>{props.children}</Button>
    </div>
  );
};

export default Example;
