import React, { FC } from "react";
import { Window, WindowProps } from "../index";

const Example: FC<WindowProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Window {...props} />
    </div>
  );
};

export default Example;
